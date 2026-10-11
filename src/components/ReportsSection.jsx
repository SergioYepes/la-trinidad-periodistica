'use client';

import React from 'react';
import { BookOpen, Clock, ArrowRight, BarChart2, Volume2, Video, Sparkles, PlusCircle, Trash2 } from 'lucide-react';

export default function ReportsSection({ reports, onOpenReport, onOpenCreateReport, onDeleteReport }) {
  return (
    <section id="informes" style={{ padding: '5rem 0 4rem' }}>
      <div className="max-w-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem' }}>
          <span className="badge badge-gold" style={{ marginBottom: '1rem' }}>
            <BookOpen size={14} />
            Investigaciones Centrales
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            color: '#f8fafc',
            marginBottom: '1rem'
          }}>
            Informes Periodísticos Convergentes ({reports?.length || 0})
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            Estructurados a partir del balance 2016–2026 del Acuerdo de Paz, combinando reportería en terreno, 
            análisis de datos del Instituto Kroc y la JEP, audios testimoniales y formatos interactivos.
          </p>

          <button
            onClick={onOpenCreateReport}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.65rem 1.4rem',
              backgroundColor: 'rgba(229, 169, 60, 0.15)',
              border: '1px solid rgba(229, 169, 60, 0.4)',
              color: '#e5a93c',
              borderRadius: '9999px',
              fontSize: '0.9rem',
              fontWeight: 700
            }}
            onMouseOver={e => {
              e.currentTarget.style.backgroundColor = '#e5a93c';
              e.currentTarget.style.color = '#0a0d14';
            }}
            onMouseOut={e => {
              e.currentTarget.style.backgroundColor = 'rgba(229, 169, 60, 0.15)';
              e.currentTarget.style.color = '#e5a93c';
            }}
          >
            <PlusCircle size={16} />
            <span>+ Agregar / Redactar Nueva Historia</span>
          </button>
        </div>

        {/* Reports Grid */}
        {reports?.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '3rem',
            background: 'rgba(255,255,255,0.02)',
            borderRadius: '16px',
            border: '1px dashed rgba(255,255,255,0.1)'
          }}>
            <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginBottom: '1rem' }}>No hay informes publicados actualmente.</p>
            <button
              onClick={onOpenCreateReport}
              style={{
                padding: '0.6rem 1.25rem',
                backgroundColor: '#e5a93c',
                color: '#0a0d14',
                borderRadius: '8px',
                fontWeight: 700
              }}
            >
              + Publicar el Primer Informe
            </button>
          </div>
        ) : (
          <div className="grid-2" style={{ gap: '2rem' }}>
            {reports?.map((report) => (
              <article
                key={report.id}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  position: 'relative'
                }}
              >
                {/* Card Image Container */}
                <div style={{ position: 'relative', height: '240px', width: '100%', overflow: 'hidden' }}>
                  <img
                    src={report.coverImage}
                    alt={report.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }}
                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  
                  {/* Category & Delete button */}
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    right: '1rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span className={`badge badge-${report.categoryColor}`}>
                      {report.number}
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (confirm(`¿Estás seguro de que deseas eliminar el informe "${report.title}"?`)) {
                          onDeleteReport(report.id);
                        }
                      }}
                      title="Eliminar este artículo"
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(10, 13, 20, 0.85)',
                        backdropFilter: 'blur(8px)',
                        color: '#fb7185',
                        border: '1px solid rgba(225, 29, 72, 0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                      onMouseOver={e => {
                        e.currentTarget.style.backgroundColor = '#e11d48';
                        e.currentTarget.style.color = '#ffffff';
                      }}
                      onMouseOut={e => {
                        e.currentTarget.style.backgroundColor = 'rgba(10, 13, 20, 0.85)';
                        e.currentTarget.style.color = '#fb7185';
                      }}
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>

                  {/* Multimedia Type Pill */}
                  <div style={{
                    position: 'absolute',
                    bottom: '1rem',
                    right: '1rem',
                    background: 'rgba(10, 13, 20, 0.85)',
                    backdropFilter: 'blur(8px)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#e5a93c',
                    border: '1px solid rgba(229, 169, 60, 0.3)'
                  }}>
                    {report.multimedia.type === 'infographic' && <BarChart2 size={14} />}
                    {report.multimedia.type === 'audioPodcast' && <Volume2 size={14} />}
                    {report.multimedia.type === 'videoDocumentary' && <Video size={14} />}
                    {report.multimedia.type === 'interactiveMap' && <Sparkles size={14} />}
                    <span>{report.multimedia.type === 'infographic' ? 'Infografía' : report.multimedia.type === 'audioPodcast' ? 'Podcast Audio' : report.multimedia.type === 'videoDocumentary' ? 'Microdocumental' : 'Matriz Interactiva'}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.75rem' }}>
                    <span>{report.category}</span>
                    <span>•</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Clock size={13} />
                      <span>{report.readTime}</span>
                    </div>
                  </div>

                  <h3 style={{
                    fontSize: '1.35rem',
                    lineHeight: 1.3,
                    color: '#f8fafc',
                    marginBottom: '0.75rem'
                  }}>
                    {report.title}
                  </h3>

                  <p style={{
                    fontSize: '0.92rem',
                    color: '#94a3b8',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    flex: 1
                  }}>
                    {report.lead}
                  </p>

                  {/* Card footer CTA */}
                  <div style={{
                    paddingTop: '1.25rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
                      {report.author?.split('-')[0]}
                    </span>

                    <button
                      onClick={() => onOpenReport(report)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        background: 'rgba(229, 169, 60, 0.15)',
                        color: '#e5a93c',
                        padding: '0.55rem 1.1rem',
                        borderRadius: '8px',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        border: '1px solid rgba(229, 169, 60, 0.3)'
                      }}
                      onMouseOver={e => {
                        e.currentTarget.style.backgroundColor = '#e5a93c';
                        e.currentTarget.style.color = '#0a0d14';
                      }}
                      onMouseOut={e => {
                        e.currentTarget.style.backgroundColor = 'rgba(229, 169, 60, 0.15)';
                        e.currentTarget.style.color = '#e5a93c';
                      }}
                    >
                      <span>Leer Informe Completo</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
