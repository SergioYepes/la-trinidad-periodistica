'use client';

import React, { useState } from 'react';
import { Volume2, Play, Pause, Video, Image as ImageIcon, BarChart3, Radio, Sparkles, Download } from 'lucide-react';

export default function MultimediaGallery() {
  const [activeTab, setActiveTab] = useState('audio');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  return (
    <section id="multimedia" style={{
      padding: '5rem 0',
      backgroundColor: 'rgba(17, 22, 34, 0.6)',
      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
    }}>
      <div className="max-w-container">
        {/* Section Title */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}>
          <span className="badge badge-cyan" style={{ marginBottom: '1rem' }}>
            <Radio size={14} />
            Periodismo Convergente & Transmedia
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.7rem)', color: '#f8fafc', marginBottom: '1rem' }}>
            Centro Multimedia & Recursos de Paz
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#94a3b8' }}>
            El periodismo convergente integra audio inmersivo, análisis audiovisual, infografías de datos y fotografía documental para enriquecer el relato histórico.
          </p>
        </div>

        {/* Tab Controls */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.75rem',
          flexWrap: 'wrap',
          marginBottom: '2.5rem'
        }}>
          <button
            onClick={() => setActiveTab('audio')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              borderRadius: '9999px',
              fontWeight: 700,
              fontSize: '0.9rem',
              backgroundColor: activeTab === 'audio' ? '#e5a93c' : 'rgba(255, 255, 255, 0.05)',
              color: activeTab === 'audio' ? '#0a0d14' : '#cbd5e1',
              border: '1px solid',
              borderColor: activeTab === 'audio' ? '#e5a93c' : 'rgba(255, 255, 255, 0.1)'
            }}
          >
            <Volume2 size={16} />
            <span>Audio Podcasts (Voces)</span>
          </button>

          <button
            onClick={() => setActiveTab('video')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              borderRadius: '9999px',
              fontWeight: 700,
              fontSize: '0.9rem',
              backgroundColor: activeTab === 'video' ? '#06b6d4' : 'rgba(255, 255, 255, 0.05)',
              color: activeTab === 'video' ? '#0a0d14' : '#cbd5e1',
              border: '1px solid',
              borderColor: activeTab === 'video' ? '#06b6d4' : 'rgba(255, 255, 255, 0.1)'
            }}
          >
            <Video size={16} />
            <span>Microdocumental Audiovisual</span>
          </button>

          <button
            onClick={() => setActiveTab('infografia')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              borderRadius: '9999px',
              fontWeight: 700,
              fontSize: '0.9rem',
              backgroundColor: activeTab === 'infografia' ? '#10b981' : 'rgba(255, 255, 255, 0.05)',
              color: activeTab === 'infografia' ? '#0a0d14' : '#cbd5e1',
              border: '1px solid',
              borderColor: activeTab === 'infografia' ? '#10b981' : 'rgba(255, 255, 255, 0.1)'
            }}
          >
            <BarChart3 size={16} />
            <span>Infografías & Datos Kroc</span>
          </button>

          <button
            onClick={() => setActiveTab('fotos')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              borderRadius: '9999px',
              fontWeight: 700,
              fontSize: '0.9rem',
              backgroundColor: activeTab === 'fotos' ? '#fb7185' : 'rgba(255, 255, 255, 0.05)',
              color: activeTab === 'fotos' ? '#0a0d14' : '#cbd5e1',
              border: '1px solid',
              borderColor: activeTab === 'fotos' ? '#fb7185' : 'rgba(255, 255, 255, 0.1)'
            }}
          >
            <ImageIcon size={16} />
            <span>Galería Fotográfica</span>
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="glass-card" style={{ padding: '2.5rem', borderRadius: '24px' }}>
          {activeTab === 'audio' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'center' }}>
              <div>
                <span className="badge badge-gold" style={{ marginBottom: '1rem' }}>Podcast Serial • Episodio 1</span>
                <h3 style={{ fontSize: '1.8rem', color: '#f8fafc', marginBottom: '1rem' }}>
                  «Voces de la Reconciliación: Cuando la Tierra Florece»
                </h3>
                <p style={{ color: '#94a3b8', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Testimonios orales en primera persona con María Helena Cardona (víctima del conflicto) y 
                  Jairo Benítez (firmante de paz reincorporado), relatando cómo la cooperativa cafetera 
                  unió a antiguos adversarios en un proyecto de reconciliación comunitaria.
                </p>

                {/* Audio Player Card */}
                <div style={{
                  background: '#090d15',
                  padding: '1.5rem',
                  borderRadius: '16px',
                  border: '1px solid rgba(229, 169, 60, 0.25)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1rem' }}>
                    <button
                      onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        backgroundColor: '#e5a93c',
                        color: '#0a0d14',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 6px 20px rgba(229, 169, 60, 0.4)'
                      }}
                    >
                      {isPlayingAudio ? <Pause size={24} /> : <Play size={24} style={{ marginLeft: '3px' }} />}
                    </button>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, color: '#f8fafc', fontSize: '1rem' }}>
                        Episodio 1: Del Rencor a la Cosecha
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                        Duración: 12:45 min • Formato: Master Stereo AAC 320kbps
                      </div>
                    </div>
                  </div>

                  {/* Simulated Waveform / Timeline */}
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '36px', marginBottom: '0.75rem' }}>
                    {[20, 45, 80, 60, 95, 40, 70, 85, 30, 90, 65, 45, 100, 75, 55, 35, 80, 60, 90, 45, 70, 85, 40, 65].map((h, i) => (
                      <div
                        key={i}
                        style={{
                          flex: 1,
                          height: `${isPlayingAudio ? Math.min(100, h + Math.sin(i) * 20) : h}%`,
                          backgroundColor: i < 10 ? '#e5a93c' : 'rgba(255, 255, 255, 0.15)',
                          borderRadius: '2px',
                          transition: 'height 0.2s ease, background-color 0.2s ease'
                        }}
                      />
                    ))}
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#64748b' }}>
                    <span>04:15</span>
                    <span>12:45</span>
                  </div>
                </div>
              </div>

              {/* Cover Visual */}
              <div style={{ textAlign: 'center' }}>
                <img
                  src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=700&q=80"
                  alt="Grabación de podcast testimonial de paz"
                  style={{ width: '100%', maxHeight: '340px', objectFit: 'cover', borderRadius: '18px', border: '1px solid rgba(255, 255, 255, 0.1)' }}
                />
                <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.5rem', fontStyle: 'italic' }}>
                  Estudio de grabación y registro sonoro de testimonios de memoria viva.
                </div>
              </div>
            </div>
          )}

          {activeTab === 'video' && (
            <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto' }}>
              <span className="badge badge-cyan" style={{ marginBottom: '1rem' }}>Microdocumental Exclusivo (8:20 min)</span>
              <h3 style={{ fontSize: '1.8rem', color: '#f8fafc', marginBottom: '1rem' }}>
                «El Espejo de la Verdad: La JEP y la Memoria Colectiva»
              </h3>
              <p style={{ color: '#94a3b8', lineHeight: 1.6, marginBottom: '2rem' }}>
                Un recorrido audiovisual por las audiencias de verdad, las medidas restaurativas (TOAR) 
                y el cambio en la semántica del periodismo frente a las víctimas del conflicto armado.
              </p>

              {/* Video Player Mock */}
              <div style={{
                position: 'relative',
                height: '420px',
                borderRadius: '18px',
                overflow: 'hidden',
                background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.3)), url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80) center/cover',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(6, 182, 212, 0.3)'
              }}>
                <div style={{ textAlign: 'center', zIndex: 2 }}>
                  <button style={{
                    width: '74px',
                    height: '74px',
                    borderRadius: '50%',
                    backgroundColor: '#06b6d4',
                    color: '#0a0d14',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 30px rgba(6, 182, 212, 0.5)',
                    margin: '0 auto 1rem'
                  }}>
                    <Play size={32} style={{ marginLeft: '4px' }} />
                  </button>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f8fafc' }}>
                    Reproducir Microdocumental en Alta Definición
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '0.35rem' }}>
                    Subtítulos en español • Lenguaje de señas disponible
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'infografia' && (
            <div>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <span className="badge badge-emerald" style={{ marginBottom: '0.75rem' }}>Datos & Verificación</span>
                <h3 style={{ fontSize: '1.8rem', color: '#f8fafc', marginBottom: '0.5rem' }}>
                  Matriz Comparativa de los 6 Puntos de La Habana (2016 - 2026)
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
                  Monitoreo de compromisos e indicadores según el Instituto Kroc de la Universidad de Notre Dame.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                <div style={{ background: '#0a0e17', padding: '1.25rem', borderRadius: '14px', border: '1px solid rgba(225, 29, 72, 0.3)' }}>
                  <div style={{ color: '#e11d48', fontWeight: 800, fontSize: '0.85rem' }}>PUNTO 1: REFORMA RURAL INTEGRAL</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#f8fafc', margin: '0.4rem 0' }}>34% de avance</div>
                  <p style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Mayor desafío: Fondo de tierras, catastro multipropósito y vías terciarias.</p>
                </div>

                <div style={{ background: '#0a0e17', padding: '1.25rem', borderRadius: '14px', border: '1px solid rgba(229, 169, 60, 0.3)' }}>
                  <div style={{ color: '#e5a93c', fontWeight: 800, fontSize: '0.85rem' }}>PUNTO 2: PARTICIPACIÓN POLÍTICA</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#f8fafc', margin: '0.4rem 0' }}>52% de avance</div>
                  <p style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Curules de paz (CITREP) activas en el Congreso y garantías de oposición.</p>
                </div>

                <div style={{ background: '#0a0e17', padding: '1.25rem', borderRadius: '14px', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                  <div style={{ color: '#10b981', fontWeight: 800, fontSize: '0.85rem' }}>PUNTO 3: FIN DEL CONFLICTO</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#f8fafc', margin: '0.4rem 0' }}>78% de avance</div>
                  <p style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Dejación de más de 13.000 armas y reincorporación socioeconómica base.</p>
                </div>

                <div style={{ background: '#0a0e17', padding: '1.25rem', borderRadius: '14px', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
                  <div style={{ color: '#f59e0b', fontWeight: 800, fontSize: '0.85rem' }}>PUNTO 4: SUSTITUCIÓN DE DROGAS</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#f8fafc', margin: '0.4rem 0' }}>41% de avance</div>
                  <p style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Programas PNIS con necesidad de estabilización comercial campesina.</p>
                </div>

                <div style={{ background: '#0a0e17', padding: '1.25rem', borderRadius: '14px', border: '1px solid rgba(6, 182, 212, 0.3)' }}>
                  <div style={{ color: '#06b6d4', fontWeight: 800, fontSize: '0.85rem' }}>PUNTO 5: VÍCTIMAS Y JEP</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#f8fafc', margin: '0.4rem 0' }}>62% de avance</div>
                  <p style={{ fontSize: '0.82rem', color: '#94a3b8' }}>11 Macrocasos abiertos, informe de la Comisión de la Verdad y UBPD.</p>
                </div>

                <div style={{ background: '#0a0e17', padding: '1.25rem', borderRadius: '14px', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
                  <div style={{ color: '#8b5cf6', fontWeight: 800, fontSize: '0.85rem' }}>PUNTO 6: VERIFICACIÓN & CSIVI</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#f8fafc', margin: '0.4rem 0' }}>58% de avance</div>
                  <p style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Acompañamiento de la ONU y países garantes internacionales.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'fotos' && (
            <div>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <span className="badge badge-crimson" style={{ marginBottom: '0.75rem' }}>Archivo Documental</span>
                <h3 style={{ fontSize: '1.8rem', color: '#f8fafc', marginBottom: '0.5rem' }}>
                  Fotorreportaje: Rostros y Territorios de la Paz (2016-2026)
                </h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {[
                  { img: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80', title: 'Monumento a la Memoria', caption: 'Homenaje a las víctimas en Bogotá. Foto: Archivo CC.' },
                  { img: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=600&q=80', title: 'Trabajo Comunitario en el Cauca', caption: 'Asambleas campesinas de soberanía alimentaria. Foto: Colectivo Memoria.' },
                  { img: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80', title: 'La Tierra y el Arado', caption: 'Siembra en zonas priorizadas por los PDET. Foto: Banco Agrario.' }
                ].map((item, idx) => (
                  <div key={idx} style={{ background: '#0a0e17', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <img src={item.img} alt={item.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                    <div style={{ padding: '1rem' }}>
                      <div style={{ fontWeight: 700, color: '#f8fafc', fontSize: '0.95rem' }}>{item.title}</div>
                      <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '0.25rem' }}>{item.caption}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
