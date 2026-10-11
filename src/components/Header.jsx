'use client';

import React, { useState } from 'react';
import { Newspaper, FileCheck, Menu, X, Sparkles } from 'lucide-react';

export default function Header({ onOpenSubmission, onOpenCreateReport }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: '#0a0d14',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      {/* Top breaking bar */}
      <div style={{
        backgroundColor: '#111827',
        borderBottom: '1px solid rgba(229, 169, 60, 0.25)',
        padding: '0.4rem 1rem',
        fontSize: '0.8rem',
        color: '#94a3b8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span style={{
            backgroundColor: '#e11d48',
            color: '#ffffff',
            padding: '0.18rem 0.55rem',
            borderRadius: '4px',
            fontSize: '0.68rem',
            fontWeight: 800,
            letterSpacing: '0.05em'
          }}>
            COBERTURA ESPECIAL
          </span>
          <span style={{ color: '#f8fafc', fontWeight: 600 }}>
            2016 - 2026: Una década del Acuerdo Final de Paz en Colombia
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', opacity: 0.9 }}>
          <span>Edición Digital Convergente</span>
          <span>•</span>
          <span>Actualizado: Octubre 2026</span>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 1.5rem'
      }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', textDecoration: 'none' }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #f5bc56 0%, #e5a93c 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 14px rgba(229, 169, 60, 0.4)'
          }}>
            <Newspaper size={24} color="#0a0d14" strokeWidth={2.5} />
          </div>
          <div>
            <div className="brand-font" style={{
              fontSize: '1.28rem',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '0.06em',
              lineHeight: 1.1
            }}>
              LA TRINIDAD
            </div>
            <div style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              color: '#f5bc56',
              letterSpacing: '0.12em',
              textTransform: 'uppercase'
            }}>
              Periodística y el Idioma
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav" style={{
          alignItems: 'center',
          gap: '1.75rem',
          fontSize: '0.9rem',
          fontWeight: 600
        }}>
          <a href="#informes" style={{ color: '#cbd5e1' }} onMouseOver={e => e.currentTarget.style.color = '#e5a93c'} onMouseOut={e => e.currentTarget.style.color = '#cbd5e1'}>
            Informes
          </a>
          <a href="#multimedia" style={{ color: '#cbd5e1' }} onMouseOver={e => e.currentTarget.style.color = '#e5a93c'} onMouseOut={e => e.currentTarget.style.color = '#cbd5e1'}>
            Multimedia
          </a>
          <a href="#redes" style={{ color: '#cbd5e1' }} onMouseOver={e => e.currentTarget.style.color = '#e5a93c'} onMouseOut={e => e.currentTarget.style.color = '#cbd5e1'}>
            Social Media (9 Posts)
          </a>
          <a href="#editorial" style={{ color: '#cbd5e1' }} onMouseOver={e => e.currentTarget.style.color = '#e5a93c'} onMouseOut={e => e.currentTarget.style.color = '#cbd5e1'}>
            Quiénes Somos
          </a>
        </nav>

        {/* Action buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            type="button"
            onClick={onOpenCreateReport}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.65rem 1.25rem',
              backgroundColor: '#e5a93c',
              color: '#0a0d14',
              borderRadius: '9999px',
              fontSize: '0.88rem',
              fontWeight: 800,
              boxShadow: '0 4px 14px rgba(229, 169, 60, 0.4)',
              cursor: 'pointer'
            }}
            onMouseOver={e => e.currentTarget.style.backgroundColor = '#f5bc56'}
            onMouseOut={e => e.currentTarget.style.backgroundColor = '#e5a93c'}
          >
            <Sparkles size={16} />
            <span>+ Publicar Historia</span>
          </button>

          <button
            type="button"
            onClick={onOpenSubmission}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.65rem 1.2rem',
              backgroundColor: 'rgba(229, 169, 60, 0.15)',
              border: '1px solid rgba(229, 169, 60, 0.5)',
              color: '#f5bc56',
              borderRadius: '9999px',
              fontSize: '0.88rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
            onMouseOver={e => {
              e.currentTarget.style.backgroundColor = '#e5a93c';
              e.currentTarget.style.color = '#0a0d14';
            }}
            onMouseOut={e => {
              e.currentTarget.style.backgroundColor = 'rgba(229, 169, 60, 0.15)';
              e.currentTarget.style.color = '#f5bc56';
            }}
          >
            <FileCheck size={16} />
            <span>Entregable Docente</span>
          </button>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              background: '#1f2937',
              color: '#ffffff',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.1)',
              cursor: 'pointer'
            }}
            className="mobile-toggle"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isMobileMenuOpen && (
        <div style={{
          backgroundColor: '#0f1422',
          borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <a href="#informes" onClick={() => setIsMobileMenuOpen(false)} style={{ color: '#ffffff', fontWeight: 600, fontSize: '1rem' }}>
            📰 Informes Periodísticos
          </a>
          <a href="#multimedia" onClick={() => setIsMobileMenuOpen(false)} style={{ color: '#ffffff', fontWeight: 600, fontSize: '1rem' }}>
            🎧 Centro Multimedia
          </a>
          <a href="#redes" onClick={() => setIsMobileMenuOpen(false)} style={{ color: '#ffffff', fontWeight: 600, fontSize: '1rem' }}>
            📱 Plan Social Media (9 Posts)
          </a>
          <a href="#editorial" onClick={() => setIsMobileMenuOpen(false)} style={{ color: '#ffffff', fontWeight: 600, fontSize: '1rem' }}>
            👥 Quiénes Somos & Manifiesto
          </a>
        </div>
      )}
    </header>
  );
}
