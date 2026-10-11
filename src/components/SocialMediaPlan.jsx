'use client';

import React, { useState } from 'react';
import { Share2, Calendar, Clock, Copy, Check, ExternalLink, Image as ImageIcon, Video, BarChart2, Eye, Sparkles } from 'lucide-react';

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
import { socialMediaPosts } from '../data/socialMediaData';

export default function SocialMediaPlan({ onSelectPost }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [copiedId, setCopiedId] = useState(null);
  const [selectedPostModal, setSelectedPostModal] = useState(null);

  const handleCopyCaption = (id, caption) => {
    navigator.clipboard.writeText(caption);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const filteredPosts = socialMediaPosts.filter((post) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'day1') return post.dayNumber === 1;
    if (activeFilter === 'day2') return post.dayNumber === 2;
    if (activeFilter === 'day3') return post.dayNumber === 3;
    if (activeFilter === 'instagram') return post.platform.toLowerCase() === 'instagram';
    if (activeFilter === 'facebook') return post.platform.toLowerCase() === 'facebook';
    return true;
  });

  return (
    <section id="redes" style={{ padding: '5rem 0 4rem' }}>
      <div className="max-w-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 3rem' }}>
          <span className="badge badge-emerald" style={{ marginBottom: '1rem' }}>
            <Share2 size={14} />
            Estrategia de Social Media Periodística
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#f8fafc', marginBottom: '1rem' }}>
            Plan de Social Media: 9 Publicaciones en 3 Días
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#94a3b8', lineHeight: 1.6 }}>
            Campaña de difusión transmedia en <strong>Instagram</strong> y <strong>Facebook</strong> distribuida en 3 franjas horarias 
            (Mañana 8:00 AM, Tarde 2:00 PM, Noche 7:00 PM) con 3 formatos visuales (Fotografía, Video e Infografía).
          </p>
        </div>

        {/* Filter Controls */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.6rem',
          flexWrap: 'wrap',
          marginBottom: '2.5rem'
        }}>
          {[
            { id: 'all', label: 'Todas las 9 Publicaciones' },
            { id: 'day1', label: '📅 Día 1 (Lanzamiento)' },
            { id: 'day2', label: '📅 Día 2 (Investigaciones)' },
            { id: 'day3', label: '📅 Día 3 (Futuro & Cierre)' },
            { id: 'instagram', label: '📸 Instagram (5)' },
            { id: 'facebook', label: '📘 Facebook (4)' }
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setActiveFilter(btn.id)}
              style={{
                padding: '0.6rem 1.15rem',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: 700,
                backgroundColor: activeFilter === btn.id ? '#e5a93c' : 'rgba(255, 255, 255, 0.05)',
                color: activeFilter === btn.id ? '#0a0d14' : '#cbd5e1',
                border: '1px solid',
                borderColor: activeFilter === btn.id ? '#e5a93c' : 'rgba(255, 255, 255, 0.1)',
                transition: 'all 0.2s ease'
              }}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* 9 Posts Grid */}
        <div className="grid-3" style={{ gap: '1.75rem' }}>
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '18px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              {/* Post Header */}
              <div style={{
                padding: '1rem 1.25rem',
                backgroundColor: 'rgba(10, 14, 23, 0.7)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: post.platform === 'Instagram' ? 'rgba(225, 48, 108, 0.2)' : 'rgba(24, 119, 242, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: post.platform === 'Instagram' ? '#e1306c' : '#1877f2'
                  }}>
                    {post.platform === 'Instagram' ? <InstagramIcon size={17} /> : <FacebookIcon size={17} />}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#f8fafc' }}>
                      {post.platform === 'Instagram' ? '@latrinidadperiodistica' : 'La Trinidad Periodística'}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
                      Día {post.dayNumber} • {post.time} ({post.timeSlot})
                    </div>
                  </div>
                </div>

                <span style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  padding: '0.25rem 0.6rem',
                  borderRadius: '6px',
                  backgroundColor: '#161f33',
                  color: '#e5a93c',
                  border: '1px solid rgba(229, 169, 60, 0.3)'
                }}>
                  Post #{post.id}
                </span>
              </div>

              {/* Media Thumbnail */}
              <div style={{ position: 'relative', height: '200px', width: '100%', backgroundColor: '#090d15' }}>
                <img
                  src={post.image || post.videoPreview}
                  alt={post.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  top: '0.75rem',
                  left: '0.75rem',
                  backgroundColor: 'rgba(10, 13, 20, 0.85)',
                  backdropFilter: 'blur(6px)',
                  padding: '0.3rem 0.65rem',
                  borderRadius: '20px',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  color: '#f8fafc',
                  border: '1px solid rgba(255, 255, 255, 0.15)'
                }}>
                  {post.formatType === 'photo' && <ImageIcon size={13} color="#e5a93c" />}
                  {post.formatType === 'video' && <Video size={13} color="#06b6d4" />}
                  {post.formatType === 'infographic' && <BarChart2 size={13} color="#10b981" />}
                  <span>{post.format}</span>
                </div>
              </div>

              {/* Caption and content */}
              <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#f8fafc', marginBottom: '0.5rem' }}>
                  {post.title}
                </div>

                <div style={{
                  fontSize: '0.82rem',
                  color: '#cbd5e1',
                  lineHeight: 1.5,
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  marginBottom: '1rem',
                  whiteSpace: 'pre-line',
                  maxHeight: '120px',
                  overflowY: 'auto',
                  fontFamily: 'monospace'
                }}>
                  {post.caption}
                </div>

                {/* Simulated Metrics */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '0.75rem',
                  color: '#64748b',
                  marginBottom: '1rem'
                }}>
                  <span>❤️ {post.simulatedLikes}</span>
                  <span>💬 {post.simulatedComments}</span>
                </div>

                {/* Action buttons */}
                <div style={{
                  marginTop: 'auto',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  gap: '0.5rem'
                }}>
                  <button
                    onClick={() => handleCopyCaption(post.id, post.caption)}
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.4rem',
                      padding: '0.55rem',
                      borderRadius: '8px',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      backgroundColor: copiedId === post.id ? '#10b981' : 'rgba(229, 169, 60, 0.15)',
                      color: copiedId === post.id ? '#0a0d14' : '#e5a93c',
                      border: '1px solid',
                      borderColor: copiedId === post.id ? '#10b981' : 'rgba(229, 169, 60, 0.3)'
                    }}
                  >
                    {copiedId === post.id ? <Check size={14} /> : <Copy size={14} />}
                    <span>{copiedId === post.id ? '¡Copiado!' : 'Copiar Texto Post'}</span>
                  </button>

                  <button
                    onClick={() => setSelectedPostModal(post)}
                    style={{
                      padding: '0.55rem 0.75rem',
                      borderRadius: '8px',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      color: '#f8fafc',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    title="Ver Publicación Completa"
                  >
                    <Eye size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Detailed Post View */}
        {selectedPostModal && (
          <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 110,
            backgroundColor: 'rgba(5, 7, 12, 0.85)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}>
            <div style={{
              backgroundColor: '#0d131f',
              border: '1px solid rgba(229, 169, 60, 0.4)',
              borderRadius: '20px',
              maxWidth: '650px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '2rem'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span className="badge badge-gold">Post #{selectedPostModal.id}</span>
                  <span style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>
                    {selectedPostModal.platform} • {selectedPostModal.time}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedPostModal(null)}
                  style={{ background: 'transparent', color: '#94a3b8', fontSize: '1.2rem', padding: '0.2rem' }}
                >
                  ✕
                </button>
              </div>

              <img
                src={selectedPostModal.image || selectedPostModal.videoPreview}
                alt={selectedPostModal.title}
                style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '12px', marginBottom: '1.25rem' }}
              />

              <h3 style={{ fontSize: '1.3rem', color: '#f8fafc', marginBottom: '0.75rem' }}>
                {selectedPostModal.title}
              </h3>

              <div style={{
                background: '#090d15',
                padding: '1.25rem',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                fontSize: '0.9rem',
                color: '#e2e8f0',
                lineHeight: 1.6,
                whiteSpace: 'pre-line',
                marginBottom: '1.5rem'
              }}>
                {selectedPostModal.caption}
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => handleCopyCaption(selectedPostModal.id, selectedPostModal.caption)}
                  style={{
                    padding: '0.65rem 1.25rem',
                    backgroundColor: '#e5a93c',
                    color: '#0a0d14',
                    borderRadius: '8px',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <Copy size={15} />
                  <span>Copiar Contenido para Redes</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
