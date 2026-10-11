import { NextResponse } from 'next/server';
import { getReports, addReport, deleteReport } from '../../../lib/db';

export const dynamic = 'force-dynamic';

// GET /api/reports -> returns shared list of all reports (from Neon or local)
export async function GET() {
  try {
    const reports = await getReports();
    return NextResponse.json({ success: true, reports });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// POST /api/reports -> adds a new report to Neon (or local)
export async function POST(request) {
  try {
    const body = await request.json();
    if (!body || !body.title) {
      return NextResponse.json({ success: false, error: 'Título requerido' }, { status: 400 });
    }

    const updatedReports = await addReport(body);
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

    const updatedReports = await deleteReport(idToDelete);
    return NextResponse.json({ success: true, reports: updatedReports });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
