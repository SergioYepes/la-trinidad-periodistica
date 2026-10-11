import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'src', 'data', 'activeReports.json');

function getReportsFromFile() {
  try {
    if (fs.existsSync(dataFilePath)) {
      const fileData = fs.readFileSync(dataFilePath, 'utf8');
      return JSON.parse(fileData);
    }
  } catch (error) {
    console.error('Error reading reports file:', error);
  }
  return [];
}

function saveReportsToFile(reports) {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(reports, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error('Error writing reports file:', error);
    return false;
  }
}

// GET /api/reports -> returns shared list of all reports
export async function GET() {
  const reports = getReportsFromFile();
  return NextResponse.json({ success: true, reports });
}

// POST /api/reports -> adds a new report to the shared JSON file
export async function POST(request) {
  try {
    const body = await request.json();
    if (!body || !body.title) {
      return NextResponse.json({ success: false, error: 'Título requerido' }, { status: 400 });
    }

    const currentReports = getReportsFromFile();
    const updatedReports = [body, ...currentReports];
    saveReportsToFile(updatedReports);

    return NextResponse.json({ success: true, reports: updatedReports });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// DELETE /api/reports?id=xxx -> deletes a report by id
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const idToDelete = searchParams.get('id');

    if (!idToDelete) {
      return NextResponse.json({ success: false, error: 'ID requerido' }, { status: 400 });
    }

    const currentReports = getReportsFromFile();
    const updatedReports = currentReports.filter(r => r.id !== idToDelete);
    saveReportsToFile(updatedReports);

    return NextResponse.json({ success: true, reports: updatedReports });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
