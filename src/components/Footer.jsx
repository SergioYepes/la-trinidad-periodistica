'use client';

import React from 'react';
import { Newspaper, Heart, ShieldCheck, ArrowUp, Globe } from 'lucide-react';

const InstagramIcon = ({ size = 18, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ size = 18, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

export default function Footer({ onOpenSubmission }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      backgroundColor: '#07090f',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '4rem 0 2rem',
      color: '#94a3b8',
      fontSize: '0.9rem'
    }}>
      <div className="max-w-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2.5rem',
          paddingBottom: '3rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
        }}>
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: '#e5a93c',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0a0d14'
              }}>
                <Newspaper size={20} />
              </div>
              <div className="brand-font" style={{ fontSize: '1.15rem', color: '#f8fafc', fontWeight: 800 }}>
                LA TRINIDAD PERIODÍSTICA
              </div>
            </div>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: '#64748b', marginBottom: '1.25rem' }}>
              Medio periodístico digital de investigación convergente. Análisis, memoria histórica y el poder del idioma 
              a 10 años del Acuerdo de Paz en Colombia (2016 - 2026).
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#131a29',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#e5a93c'
              }}>
                <InstagramIcon size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#131a29',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#06b6d4'
              }}>
                <FacebookIcon size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div style={{ fontWeight: 700, color: '#f8fafc', marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.08em' }}>
              4 Informes Convergentes
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem' }}>
              <li><a href="#informes" style={{ color: '#94a3b8' }}>1. Balance 10 Años de Paz</a></li>
              <li><a href="#informes" style={{ color: '#94a3b8' }}>2. Ecos y Voces del Territorio</a></li>
              <li><a href="#informes" style={{ color: '#94a3b8' }}>3. Justicia Transicional & JEP</a></li>
              <li><a href="#informes" style={{ color: '#94a3b8' }}>4. Reforma Rural & Futuro 2030</a></li>
            </ul>
          </div>

          {/* Multimedia & Social */}
          <div>
            <div style={{ fontWeight: 700, color: '#f8fafc', marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.08em' }}>
              Estrategia Social Media
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem' }}>
              <li><a href="#redes" style={{ color: '#94a3b8' }}>Día 1: Presentación & Lanzamiento (3 posts)</a></li>
              <li><a href="#redes" style={{ color: '#94a3b8' }}>Día 2: Difusión de Crónicas (3 posts)</a></li>
              <li><a href="#redes" style={{ color: '#94a3b8' }}>Día 3: Futuro & Cierre (3 posts)</a></li>
              <li><a href="#multimedia" style={{ color: '#94a3b8' }}>Centro Multimedia & Podcasts</a></li>
            </ul>
          </div>

          {/* Academic metadata */}
          <div>
            <div style={{ fontWeight: 700, color: '#f8fafc', marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.08em' }}>
              Proyecto Académico
            </div>
            <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.5, marginBottom: '1rem' }}>
              Actividad 6: Creación de Medio Digital y Plan de Social Media con 4 Informes Periodísticos Convergentes.
            </p>
            <button
              onClick={onOpenSubmission}
              style={{
                width: '100%',
                padding: '0.65rem',
                backgroundColor: 'rgba(229, 169, 60, 0.15)',
                color: '#e5a93c',
                border: '1px solid rgba(229, 169, 60, 0.3)',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.8rem'
              }}
            >
              Ver Tabla de Entrega Final
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.8rem',
          color: '#64748b'
        }}>
          <div>
            © 2026 La Trinidad Periodística y el Idioma • Desarrollado con Next.js & Periodismo Convergente.
          </div>

          <button
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: '#131a29',
              color: '#f8fafc',
              padding: '0.5rem 1rem',
              borderRadius: '9999px',
              fontSize: '0.78rem',
              fontWeight: 600
            }}
          >
            <span>Volver arriba</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
