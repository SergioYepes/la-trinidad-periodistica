'use client';

import React, { useState } from 'react';
import { X, Clock, User, Calendar, BookOpen, Volume2, Video, BarChart3, CheckCircle2, Share2, Quote, ExternalLink, Play, Pause } from 'lucide-react';

export default function ReportModal({ report, onClose, onDeleteReport }) {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioProgress, setAudioProgress] = useState(35);

  if (!report) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      backgroundColor: 'rgba(5, 7, 12, 0.85)',
      backdropFilter: 'blur(12px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem',
      overflowY: 'auto'
    }}>
      <div style={{
        backgroundColor: '#0d131f',
        border: '1px solid rgba(229, 169, 60, 0.3)',
        borderRadius: '20px',
        maxWidth: '900px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.85)',
        position: 'relative'
      }}>
        {/* Sticky top modal bar */}
        <div style={{
          position: 'sticky',
          top: 0,
          backgroundColor: 'rgba(13, 19, 31, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '1rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          zIndex: 10
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span className={`badge badge-${report.categoryColor || 'gold'}`}>
              {report.number} • {report.category}
            </span>
            <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
              {report.readTime}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {onDeleteReport && (
              <button
                onClick={() => {
                  if (confirm(`¿Estás seguro de que deseas eliminar este informe ("${report.title}")?`)) {
                    onDeleteReport(report.id);
                    onClose();
                  }
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.4rem 0.85rem',
                  backgroundColor: 'rgba(225, 29, 72, 0.15)',
                  border: '1px solid rgba(225, 29, 72, 0.4)',
                  color: '#fb7185',
                  borderRadius: '8px',
                  fontSize: '0.78rem',
                  fontWeight: 700
                }}
                onMouseOver={e => {
                  e.currentTarget.style.backgroundColor = '#e11d48';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.backgroundColor = 'rgba(225, 29, 72, 0.15)';
                  e.currentTarget.style.color = '#fb7185';
                }}
              >
                Eliminar Artículo
              </button>
            )}

            <button
              onClick={onClose}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                color: '#f8fafc',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseOver={e => e.currentTarget.style.backgroundColor = '#e11d48'}
              onMouseOut={e => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)'}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal content body */}
        <div style={{ padding: '2rem 2.25rem' }}>
          {/* Main Title */}
          <h1 style={{
            fontSize: 'clamp(1.7rem, 3.5vw, 2.5rem)',
            lineHeight: 1.2,
            marginBottom: '1rem',
            color: '#f8fafc'
          }}>
            {report.title}
          </h1>

          <p style={{
            fontSize: '1.15rem',
            color: '#e5a93c',
            fontStyle: 'italic',
            marginBottom: '1.5rem',
            lineHeight: 1.5
          }}>
            {report.subtitle}
          </p>

          {/* Author metadata bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap',
            paddingBottom: '1.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            marginBottom: '2rem',
            fontSize: '0.85rem',
            color: '#94a3b8'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <User size={15} color="#e5a93c" />
              <span>{report.author}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Calendar size={15} color="#e5a93c" />
              <span>{report.date}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Clock size={15} color="#e5a93c" />
              <span>{report.readTime}</span>
            </div>
          </div>

          {/* Cover image */}
          <div style={{ marginBottom: '2rem' }}>
            <img
              src={report.coverImage}
              alt={report.title}
              style={{
                width: '100%',
                height: '380px',
                objectFit: 'cover',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            />
            <p style={{
              fontSize: '0.8rem',
              color: '#64748b',
              marginTop: '0.5rem',
              textAlign: 'center',
              fontStyle: 'italic'
            }}>
              {report.coverCaption}
            </p>
          </div>

          {/* Lead Paragraph */}
          <div style={{
            backgroundColor: 'rgba(229, 169, 60, 0.08)',
            borderLeft: '4px solid #e5a93c',
            padding: '1.25rem 1.5rem',
            borderRadius: '0 12px 12px 0',
            marginBottom: '2rem',
            fontSize: '1.1rem',
            color: '#f1f5f9',
            lineHeight: 1.65,
            fontWeight: 500
          }}>
            {report.lead}
          </div>

          {/* Quick Stats Grid */}
          {report.stats && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1rem',
              marginBottom: '2.5rem'
            }}>
              {report.stats.map((st, i) => (
                <div key={i} style={{
                  background: '#131a29',
                  padding: '1rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#e5a93c' }}>{st.value}</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#f8fafc', margin: '0.2rem 0' }}>{st.label}</div>
                  <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>{st.desc}</div>
                </div>
              ))}
            </div>
          )}

          {/* Report Sections Content */}
          <div style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
            {report.sections.map((sec, idx) => (
              <div key={idx} style={{ marginBottom: '2rem' }}>
                <h2 style={{
                  fontSize: '1.4rem',
                  color: '#f8fafc',
                  marginBottom: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  {sec.heading}
                </h2>
                <div style={{ whiteSpace: 'pre-line' }}>
                  {sec.content}
                </div>
              </div>
            ))}
          </div>

          {/* Convergent Multimedia Resource Box */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(20, 28, 45, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%)',
            border: '1px solid rgba(229, 169, 60, 0.3)',
            borderRadius: '16px',
            padding: '1.75rem',
            marginBottom: '2.5rem',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              color: '#e5a93c',
              fontSize: '0.85rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '1rem'
            }}>
              {report.multimedia.type === 'infographic' && <BarChart3 size={18} />}
              {report.multimedia.type === 'audioPodcast' && <Volume2 size={18} />}
              {report.multimedia.type === 'videoDocumentary' && <Video size={18} />}
              {report.multimedia.type === 'interactiveMap' && <BookOpen size={18} />}
              <span>Recurso Multimedia Convergente</span>
            </div>

            <h3 style={{ fontSize: '1.3rem', color: '#f8fafc', marginBottom: '0.75rem' }}>
              {report.multimedia.title}
            </h3>

            {/* Infographic renderer */}
            {report.multimedia.type === 'infographic' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginTop: '1rem' }}>
                {report.multimedia.data.map((item, i) => (
                  <div key={i}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.35rem' }}>
                      <span style={{ color: '#f1f5f9', fontWeight: 600 }}>{item.punto}</span>
                      <span style={{ color: item.color, fontWeight: 700 }}>{item.status}</span>
                    </div>
                    <div style={{ height: '8px', background: '#1e293b', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{
                        width: `${item.level}%`,
                        height: '100%',
                        backgroundColor: item.color,
                        borderRadius: '4px',
                        transition: 'width 1s ease'
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Audio podcast renderer */}
            {report.multimedia.type === 'audioPodcast' && (
              <div style={{
                background: '#090d15',
                padding: '1.25rem',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                marginTop: '1rem'
              }}>
                <p style={{ fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '1rem' }}>
                  {report.multimedia.description}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <button
                    onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      background: '#e5a93c',
                      color: '#0a0d14',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 12px rgba(229, 169, 60, 0.4)'
                    }}
                  >
                    {isPlayingAudio ? <Pause size={20} /> : <Play size={20} style={{ marginLeft: '2px' }} />}
                  </button>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.3rem' }}>
                      <span>{isPlayingAudio ? "Reproduciendo testimonio..." : "Audio Podcast Listo"}</span>
                      <span>{report.multimedia.duration}</span>
                    </div>
                    <div style={{ height: '6px', background: '#1e293b', borderRadius: '3px', position: 'relative' }}>
                      <div style={{ width: isPlayingAudio ? '68%' : '20%', height: '100%', background: '#e5a93c', borderRadius: '3px' }} />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Video documentary renderer */}
            {report.multimedia.type === 'videoDocumentary' && (
              <div style={{
                background: '#090d15',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                marginTop: '1rem',
                textAlign: 'center',
                padding: '2.5rem 1.5rem',
                position: 'relative'
              }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(229, 169, 60, 0.2)',
                  border: '2px solid #e5a93c',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  color: '#e5a93c'
                }}>
                  <Play size={28} style={{ marginLeft: '4px' }} />
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f8fafc' }}>
                  {report.multimedia.videoPlaceholder}
                </div>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8', maxWidth: '500px', margin: '0.5rem auto 0' }}>
                  {report.multimedia.description} ({report.multimedia.duration})
                </p>
              </div>
            )}

            {/* Matrix / Solutions Map renderer */}
            {report.multimedia.type === 'interactiveMap' && (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                marginTop: '1rem'
              }}>
                {report.multimedia.pillars.map((pil, idx) => (
                  <div key={idx} style={{
                    background: '#0a0e17',
                    padding: '1rem',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.06)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10b981', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                      <CheckCircle2 size={16} />
                      <span>{pil.title}</span>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.4 }}>
                      {pil.desc}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Pull Quote Box */}
          {report.quote && (
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              borderLeft: '4px solid #e5a93c',
              padding: '1.5rem',
              borderRadius: '0 14px 14px 0',
              marginBottom: '2.5rem'
            }}>
              <Quote size={28} color="#e5a93c" style={{ marginBottom: '0.5rem', opacity: 0.8 }} />
              <p style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: '1.25rem',
                fontStyle: 'italic',
                color: '#f8fafc',
                lineHeight: 1.5,
                marginBottom: '0.75rem'
              }}>
                «{report.quote.text}»
              </p>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#e5a93c' }}>
                {report.quote.author} <span style={{ color: '#64748b', fontWeight: 400 }}>— {report.quote.role}</span>
              </div>
            </div>
          )}

          {/* Sources and References */}
          <div style={{
            background: '#090d15',
            padding: '1.5rem',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            fontSize: '0.82rem',
            color: '#94a3b8'
          }}>
            <div style={{ fontWeight: 700, color: '#f8fafc', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
              Fuentes Oficiales & Metodología Periodística:
            </div>
            <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {report.sources.map((src, i) => (
                <li key={i}>{src}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div style={{
          backgroundColor: '#090d15',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '1rem 1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
            © 2026 La Trinidad Periodística y el Idioma • Todos los derechos reservados.
          </div>
          <button
            onClick={onClose}
            style={{
              padding: '0.6rem 1.4rem',
              backgroundColor: '#e5a93c',
              color: '#0a0d14',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '0.85rem'
            }}
          >
            Cerrar Informe
          </button>
        </div>
      </div>
    </div>
  );
}
