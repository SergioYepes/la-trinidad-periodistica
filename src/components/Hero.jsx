'use client';

import React from 'react';
import { ArrowRight, BookOpen, Share2, Sparkles, ShieldCheck, Headphones } from 'lucide-react';

export default function Hero({ onSelectReport }) {
  return (
    <section style={{
      position: 'relative',
      padding: '4.5rem 0 3.5rem',
      backgroundColor: '#0a0d14',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      overflow: 'hidden'
    }}>
      {/* Background glow overlay */}
      <div style={{
        position: 'absolute',
        top: '-15%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        height: '450px',
        background: 'radial-gradient(ellipse at center, rgba(229, 169, 60, 0.15) 0%, rgba(6, 182, 212, 0.06) 50%, transparent 75%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="max-w-container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Top badge */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            padding: '0.4rem 1rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(229, 169, 60, 0.15)',
            border: '1px solid rgba(229, 169, 60, 0.4)',
            color: '#f5bc56',
            fontSize: '0.8rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.08em'
          }}>
            <Sparkles size={14} color="#f5bc56" />
            Plataforma Digital de Periodismo Convergente
          </span>
        </div>

        {/* Main Headline */}
        <div style={{ textAlign: 'center', maxWidth: '960px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
            fontWeight: 900,
            lineHeight: 1.15,
            color: '#ffffff',
            marginBottom: '1.25rem'
          }}>
            La Trinidad Periodística <br />
            <span style={{
              background: 'linear-gradient(135deg, #f5bc56 0%, #e5a93c 45%, #ffffff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontStyle: 'italic'
            }}>
              y el Poder del Idioma en la Paz
            </span>
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: '#cbd5e1',
            lineHeight: 1.65,
            maxWidth: '820px',
            margin: '0 auto 2.5rem'
          }}>
            Investigación especial sobre la década del <strong style={{ color: '#f8fafc' }}>Acuerdo de Paz en Colombia (2016–2026)</strong>. 
            Analizamos la transformación social, las voces territoriales, la justicia restaurativa y el 
            futuro del campo mediante cuatro informes convergentes con infografías interactivas, audios y microdocumentales.
          </p>

          {/* Action buttons */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            marginBottom: '3.5rem'
          }}>
            <a
              href="#informes"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                backgroundColor: '#e5a93c',
                color: '#0a0d14',
                padding: '0.95rem 1.85rem',
                borderRadius: '12px',
                fontWeight: 800,
                fontSize: '0.98rem',
                boxShadow: '0 8px 24px rgba(229, 169, 60, 0.4)',
                cursor: 'pointer',
                textDecoration: 'none'
              }}
            >
              <BookOpen size={19} />
              <span>Explorar los 4 Informes</span>
              <ArrowRight size={19} />
            </a>

            <a
              href="#redes"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                backgroundColor: '#161f33',
                color: '#f8fafc',
                border: '1px solid rgba(229, 169, 60, 0.4)',
                padding: '0.95rem 1.7rem',
                borderRadius: '12px',
                fontWeight: 700,
                fontSize: '0.98rem',
                cursor: 'pointer',
                textDecoration: 'none'
              }}
            >
              <Share2 size={19} color="#f5bc56" />
              <span>Plan Social Media (9 Posts)</span>
            </a>

            <a
              href="#multimedia"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                backgroundColor: 'rgba(6, 182, 212, 0.15)',
                color: '#38bdf8',
                border: '1px solid rgba(6, 182, 212, 0.4)',
                padding: '0.95rem 1.6rem',
                borderRadius: '12px',
                fontWeight: 700,
                fontSize: '0.98rem',
                cursor: 'pointer',
                textDecoration: 'none'
              }}
            >
              <Headphones size={19} />
              <span>Podcast & Videos</span>
            </a>
          </div>
        </div>

        {/* Highlights Bar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.25rem'
        }}>
          <div style={{
            background: '#111827',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <div style={{ padding: '0.75rem', background: 'rgba(229, 169, 60, 0.2)', borderRadius: '12px', color: '#f5bc56' }}>
              <BookOpen size={24} />
            </div>
            <div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f8fafc' }}>4 Informes</div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Investigaciones convergentes</div>
            </div>
          </div>

          <div style={{
            background: '#111827',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <div style={{ padding: '0.75rem', background: 'rgba(16, 185, 129, 0.2)', borderRadius: '12px', color: '#34d399' }}>
              <Share2 size={24} />
            </div>
            <div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f8fafc' }}>9 Publicaciones</div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Difusión en 3 días (IG & FB)</div>
            </div>
          </div>

          <div style={{
            background: '#111827',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <div style={{ padding: '0.75rem', background: 'rgba(6, 182, 212, 0.2)', borderRadius: '12px', color: '#38bdf8' }}>
              <Headphones size={24} />
            </div>
            <div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f8fafc' }}>3 Formatos</div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Fotos, videos e infografías</div>
            </div>
          </div>

          <div style={{
            background: '#111827',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <div style={{ padding: '0.75rem', background: 'rgba(225, 29, 72, 0.2)', borderRadius: '12px', color: '#fb7185' }}>
              <ShieldCheck size={24} />
            </div>
            <div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f8fafc' }}>2016 – 2026</div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Fuentes oficiales (Kroc, JEP, ONU)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
