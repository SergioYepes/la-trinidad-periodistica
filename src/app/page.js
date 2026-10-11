'use client';

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ReportsSection from '../components/ReportsSection';
import ReportModal from '../components/ReportModal';
import MultimediaGallery from '../components/MultimediaGallery';
import SocialMediaPlan from '../components/SocialMediaPlan';
import EditorialBoard from '../components/EditorialBoard';
import TeacherSubmissionModal from '../components/TeacherSubmissionModal';
import CreateReportModal from '../components/CreateReportModal';
import Footer from '../components/Footer';
import { reportsData as fallbackReportsData } from '../data/reportsData';

export default function HomePage() {
  const [reports, setReports] = useState(fallbackReportsData);
  const [selectedReport, setSelectedReport] = useState(null);
  const [isSubmissionOpen, setIsSubmissionOpen] = useState(false);
  const [isCreateReportOpen, setIsCreateReportOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Fetch shared reports from the server API
  const fetchReports = async () => {
    try {
      const res = await fetch('/api/reports', { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        if (data.success && Array.isArray(data.reports) && data.reports.length > 0) {
          setReports(data.reports);
          return;
        }
      }
    } catch (err) {
      console.warn('Could not fetch /api/reports, using default dataset:', err);
    }
  };

  useEffect(() => {
    setIsMounted(true);
    fetchReports();
  }, []);

  // Add report via Server API (shared across all devices)
  const handleAddReport = async (newReport) => {
    // Optimistic UI update
    setReports(prev => [newReport, ...prev]);

    try {
      const res = await fetch('/api/reports', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newReport),
      });
      if (res.ok) {
        const data = await res.json();
        if (data.success && data.reports) {
          setReports(data.reports);
        }
      }
    } catch (err) {
      console.error('Error saving report to server:', err);
    }
  };

  // Delete report via Server API (shared across all devices)
  const handleDeleteReport = async (reportId) => {
    // Optimistic UI update
    setReports(prev => prev.filter(r => r.id !== reportId));

    try {
      const res = await fetch(`/api/reports?id=${encodeURIComponent(reportId)}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        const data = await res.json();
        if (data.success && data.reports) {
          setReports(data.reports);
        }
      }
    } catch (err) {
      console.error('Error deleting report on server:', err);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <Header
        onOpenSubmission={() => setIsSubmissionOpen(true)}
        onOpenCreateReport={() => setIsCreateReportOpen(true)}
      />

      {/* Hero Section */}
      <Hero onSelectReport={setSelectedReport} />

      {/* Main Reports Section */}
      <ReportsSection
        reports={reports}
        onOpenReport={(report) => setSelectedReport(report)}
        onOpenCreateReport={() => setIsCreateReportOpen(true)}
        onDeleteReport={handleDeleteReport}
      />

      {/* Convergent Multimedia Section */}
      <MultimediaGallery />

      {/* Social Media 9 Posts Plan */}
      <SocialMediaPlan />

      {/* Editorial Board & Manifesto */}
      <EditorialBoard />

      {/* Footer */}
      <Footer onOpenSubmission={() => setIsSubmissionOpen(true)} />

      {/* Report Reader Modal */}
      {selectedReport && (
        <ReportModal
          report={selectedReport}
          onClose={() => setSelectedReport(null)}
          onDeleteReport={handleDeleteReport}
        />
      )}

      {/* Teacher Final Submission Modal */}
      <TeacherSubmissionModal
        isOpen={isSubmissionOpen}
        onClose={() => setIsSubmissionOpen(false)}
      />

      {/* Create New Report / Story Modal */}
      <CreateReportModal
        isOpen={isCreateReportOpen}
        onClose={() => setIsCreateReportOpen(false)}
        onAddReport={handleAddReport}
      />
    </div>
  );
}
