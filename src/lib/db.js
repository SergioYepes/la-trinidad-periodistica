import { neon } from '@neondatabase/serverless';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'src', 'data', 'activeReports.json');

// Helper to read fallback local JSON
function getReportsFromFile() {
  try {
    if (fs.existsSync(dataFilePath)) {
      const fileData = fs.readFileSync(dataFilePath, 'utf8');
      return JSON.parse(fileData);
    }
  } catch (error) {
    console.error('Error reading local reports file:', error);
  }
  return [];
}

// Helper to save to fallback local JSON
function saveReportsToFile(reports) {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(reports, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error('Error saving local reports file:', error);
    return false;
  }
}

// Get Neon SQL client if connection string is configured
function getSql() {
  const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL;
  if (!databaseUrl) return null;
  return neon(databaseUrl);
}

let tableInitialized = false;

// Ensure table exists and auto-seed with base reports if table is empty
async function ensureTable(sql) {
  if (tableInitialized) return;
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS reports (
        id TEXT PRIMARY KEY,
        data JSONB NOT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW()
      );
    `;

    // Check if table is empty to auto-seed initial reports
    const countResult = await sql`SELECT COUNT(*) as count FROM reports;`;
    const count = parseInt(countResult[0]?.count || '0', 10);
    if (count === 0) {
      const initialReports = getReportsFromFile();
      for (const report of initialReports) {
        if (report && report.id) {
          await sql`
            INSERT INTO reports (id, data, created_at)
            VALUES (${report.id}, ${JSON.stringify(report)}, NOW())
            ON CONFLICT (id) DO NOTHING;
          `;
        }
      }
    }
    tableInitialized = true;
  } catch (err) {
    console.error('Error initializing Neon table:', err);
  }
}

// Get all reports (from Neon if configured, otherwise fallback to local JSON)
export async function getReports() {
  const sql = getSql();
  if (sql) {
    try {
      await ensureTable(sql);
      const rows = await sql`
        SELECT data FROM reports ORDER BY created_at DESC;
      `;
      if (rows && rows.length > 0) {
        return rows.map(r => r.data);
      }
    } catch (err) {
      console.error('Error querying Neon, using local fallback:', err);
    }
  }
  return getReportsFromFile();
}

// Add a new report to Neon (or fallback to local file)
export async function addReport(report) {
  const sql = getSql();
  if (sql) {
    try {
      await ensureTable(sql);
      await sql`
        INSERT INTO reports (id, data, created_at)
        VALUES (${report.id}, ${JSON.stringify(report)}, NOW())
        ON CONFLICT (id) DO UPDATE SET data = ${JSON.stringify(report)};
      `;
      return await getReports();
    } catch (err) {
      console.error('Error inserting into Neon, saving to local file as fallback:', err);
    }
  }

  const current = getReportsFromFile();
  const updated = [report, ...current.filter(r => r.id !== report.id)];
  saveReportsToFile(updated);
  return updated;
}

// Delete a report from Neon (or fallback to local file)
export async function deleteReport(reportId) {
  const sql = getSql();
  if (sql) {
    try {
      await ensureTable(sql);
      await sql`
        DELETE FROM reports WHERE id = ${reportId};
      `;
      return await getReports();
    } catch (err) {
      console.error('Error deleting from Neon, using local fallback:', err);
    }
  }

  const current = getReportsFromFile();
  const updated = current.filter(r => r.id !== reportId);
  saveReportsToFile(updated);
  return updated;
}
