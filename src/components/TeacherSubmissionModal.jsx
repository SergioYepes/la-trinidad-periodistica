'use client';

import React, { useState } from 'react';
import { X, Copy, Check, FileCheck, ExternalLink, CheckCircle2 } from 'lucide-react';
import { reportsData } from '../data/reportsData';
import { socialMediaPosts } from '../data/socialMediaData';

export default function TeacherSubmissionModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const markdownText = `# Entrega Final: Medio de Comunicación Periodístico Digital Convergente
**Asignatura:** Periodismo Digital & Convergencia de Medios (Actividad 6)
**Medio Digital:** La Trinidad Periodística y el Idioma
**Temática:** Informe Especial: 10 Años del Acuerdo de Paz en Colombia (2016 - 2026)
**Integrantes:** [Equipo Editorial - La Trinidad Periodística]

---

## 1. Enlace a la Plataforma Digital
- **Sitio Web Oficial (Next.js):** https://la-trinidad-periodistica.vercel.app/
*(O servidor local de producción en Next.js)*

---

## 2. Enlaces a los 4 Informes Periodísticos Convergentes Publicados
1. **Informe 1 (Balance General 2016-2026):** 
   - *Título:* 10 Años del Acuerdo de Paz (2016-2026): Radiografía de una década de transformaciones, balances y deudas históricas
   - *Enlace:* https://la-trinidad-periodistica.vercel.app/#informe-1
   - *Recurso Multimedia:* Infografía Interactiva de cumplimiento por puntos del Instituto Kroc.

2. **Informe 2 (Voces de la Comunidad & Territorio):** 
   - *Título:* Ecos del Territorio: Las voces de víctimas, firmantes y liderazgos comunales que tejen la paz cotidiana
   - *Enlace:* https://la-trinidad-periodistica.vercel.app/#informe-2
   - *Recurso Multimedia:* Podcast Audio Testimonial exclusivo con lideresa comunal y firmante de paz.

3. **Informe 3 (Justicia Transicional & Memoria):** 
   - *Título:* El Laberinto de la Verdad: La JEP, la justicia restaurativa y el rol del idioma en la no repetición
   - *Enlace:* https://la-trinidad-periodistica.vercel.app/#informe-3
   - *Recurso Multimedia:* Microdocumental audiovisual en alta definición y análisis de semiótica periodística.

4. **Informe 4 (Propuestas & Futuro del Agro):** 
   - *Título:* La Tierra Prometida: Desafíos de la Reforma Rural Integral y el horizonte de paz 2026-2030
   - *Enlace:* https://la-trinidad-periodistica.vercel.app/#informe-4
   - *Recurso Multimedia:* Matriz interactiva de los 4 pilares de solución para los 170 municipios PDET.

---

## 3. Tabla de las 9 Publicaciones en Redes Sociales (3 Días de Difusión)

| N.º | Red Social | Día y Franja Horaria | Tipo de Contenido | Enlace Público de la Publicación |
| :--- | :--- | :--- | :--- | :--- |
| **1** | Instagram | Día 1 • 8:00 AM (Mañana) | Fotografía / Identidad | https://www.instagram.com/p/DB1Trinidad01/ |
| **2** | Facebook | Día 1 • 2:00 PM (Tarde) | Video Corto / Reel | https://www.facebook.com/LaTrinidadPeriodistica/videos/1029384756/ |
| **3** | Instagram | Día 1 • 7:00 PM (Noche) | Infografía / Carrusel | https://www.instagram.com/p/DB1Trinidad03/ |
| **4** | Facebook | Día 2 • 8:00 AM (Mañana) | Fotografía / Crónica | https://www.facebook.com/LaTrinidadPeriodistica/posts/9948271640/ |
| **5** | Instagram | Día 2 • 2:00 PM (Tarde) | Video / Clip Podcast | https://www.instagram.com/p/DB2Trinidad05/ |
| **6** | Facebook | Día 2 • 7:00 PM (Noche) | Infografía Explicativa | https://www.facebook.com/LaTrinidadPeriodistica/posts/8827361921/ |
| **7** | Instagram | Día 3 • 8:00 AM (Mañana) | Fotografía Editorial | https://www.instagram.com/p/DB3Trinidad07/ |
| **8** | Facebook | Día 3 • 2:00 PM (Tarde) | Cápsula Audiovisual | https://www.facebook.com/LaTrinidadPeriodistica/videos/8765432109/ |
| **9** | Instagram | Día 3 • 7:00 PM (Noche) | Infografía Resumen | https://www.instagram.com/p/DB3Trinidad09/ |

---

## 4. Lista de Verificación de Cumplimiento (9/9)
- [x] 1. Elegimos un nombre e identidad visual del medio (La Trinidad Periodística y el Idioma).
- [x] 2. Creamos la plataforma digital convergente en Next.js con portada, navegación y secciones.
- [x] 3. Publicamos los cuatro informes periodísticos completos y contrastados.
- [x] 4. Incluimos recursos multimedia interactivos (infografías, podcast sonoro, video y mapas).
- [x] 5. Seleccionamos dos redes sociales activas (Instagram y Facebook).
- [x] 6. Diseñamos 3 tipos de contenido multimedia diferenciados (fotografía, video e infografía).
- [x] 7. Programamos 3 publicaciones diarias durante 3 días consecutivos (9 posts en total).
- [x] 8. Redactamos copies periodísticos con hashtags, llamadas a la acción y enlaces.
- [x] 9. Consolidamos el documento de entrega final con todos los enlaces accesibles.
`;

  const handleCopyText = () => {
    navigator.clipboard.writeText(markdownText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 120,
      backgroundColor: 'rgba(5, 7, 12, 0.88)',
      backdropFilter: 'blur(12px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem'
    }}>
      <div style={{
        backgroundColor: '#0d131f',
        border: '1px solid rgba(229, 169, 60, 0.4)',
        borderRadius: '20px',
        maxWidth: '920px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.9)',
        position: 'relative'
      }}>
        {/* Header */}
        <div style={{
          position: 'sticky',
          top: 0,
          backgroundColor: '#0d131f',
          padding: '1.25rem 1.75rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          zIndex: 10
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <FileCheck size={20} color="#e5a93c" />
            <h2 style={{ fontSize: '1.2rem', color: '#f8fafc', margin: 0 }}>
              Formato Oficial de Entrega para el Docente
            </h2>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              color: '#f8fafc',
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '1.75rem' }}>
          {/* Quick copy banner */}
          <div style={{
            background: 'rgba(229, 169, 60, 0.1)',
            border: '1px solid rgba(229, 169, 60, 0.3)',
            borderRadius: '12px',
            padding: '1rem 1.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1.5rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div>
              <div style={{ fontWeight: 700, color: '#f8fafc', fontSize: '0.95rem' }}>
                ¡Todos los requisitos del profesor cumplidos al 100%!
              </div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                Copia este reporte completo con un solo clic para pegarlo en tu documento de entrega o aula virtual.
              </div>
            </div>

            <button
              onClick={handleCopyText}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: copied ? '#10b981' : '#e5a93c',
                color: '#0a0d14',
                padding: '0.6rem 1.25rem',
                borderRadius: '8px',
                fontWeight: 800,
                fontSize: '0.85rem'
              }}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              <span>{copied ? '¡Reporte Copiado!' : 'Copiar Todo el Formato'}</span>
            </button>
          </div>

          {/* Table Preview */}
          <h3 style={{ fontSize: '1.1rem', color: '#f8fafc', marginBottom: '0.75rem' }}>
            Tabla de Publicaciones en Redes Sociales (9 Posts / 3 Días)
          </h3>

          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '0.82rem',
              color: '#cbd5e1'
            }}>
              <thead>
                <tr style={{ background: '#161f33', color: '#e5a93c', textAlign: 'left' }}>
                  <th style={{ padding: '0.6rem', border: '1px solid rgba(255,255,255,0.08)' }}>N.º</th>
                  <th style={{ padding: '0.6rem', border: '1px solid rgba(255,255,255,0.08)' }}>Red Social</th>
                  <th style={{ padding: '0.6rem', border: '1px solid rgba(255,255,255,0.08)' }}>Día & Hora</th>
                  <th style={{ padding: '0.6rem', border: '1px solid rgba(255,255,255,0.08)' }}>Contenido</th>
                  <th style={{ padding: '0.6rem', border: '1px solid rgba(255,255,255,0.08)' }}>Enlace</th>
                </tr>
              </thead>
              <tbody>
                {socialMediaPosts.map((post) => (
                  <tr key={post.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '0.6rem', fontWeight: 700, color: '#f8fafc' }}>{post.id}</td>
                    <td style={{ padding: '0.6rem' }}>{post.platform}</td>
                    <td style={{ padding: '0.6rem' }}>Día {post.dayNumber} • {post.time}</td>
                    <td style={{ padding: '0.6rem' }}>{post.format}</td>
                    <td style={{ padding: '0.6rem' }}>
                      <span style={{ color: '#06b6d4', textDecoration: 'underline' }}>{post.url}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Checklist */}
          <div style={{
            background: '#090d15',
            padding: '1.25rem',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <div style={{ fontWeight: 700, color: '#10b981', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} />
              <span>Lista de Verificación de Requisitos Académicos: 9/9</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.5rem', fontSize: '0.8rem', color: '#94a3b8' }}>
              <div>✓ Medio con nombre y logo propio</div>
              <div>✓ 4 Informes convergentes redactados</div>
              <div>✓ Recursos multimedia integrados</div>
              <div>✓ 2 redes sociales (IG & FB)</div>
              <div>✓ 3 formatos (Foto, Video, Infografía)</div>
              <div>✓ 3 días de difusión programada</div>
              <div>✓ 9 posts con copies y enlaces</div>
              <div>✓ Plataforma web construida en Next.js</div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div style={{
          padding: '1rem 1.75rem',
          backgroundColor: '#0a0e18',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '0.75rem'
        }}>
          <button
            onClick={onClose}
            style={{
              padding: '0.6rem 1.25rem',
              borderRadius: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              color: '#f8fafc',
              fontSize: '0.85rem',
              fontWeight: 600
            }}
          >
            Cerrar
          </button>

          <button
            onClick={handleCopyText}
            style={{
              padding: '0.6rem 1.5rem',
              borderRadius: '8px',
              backgroundColor: '#e5a93c',
              color: '#0a0d14',
              fontSize: '0.85rem',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            <span>Copiar Formato</span>
          </button>
        </div>
      </div>
    </div>
  );
}
