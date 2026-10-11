'use client';

import React, { useState } from 'react';
import { X, PlusCircle, Sparkles, BookOpen, Image, Volume2, Video, BarChart3, Save } from 'lucide-react';

export default function CreateReportModal({ isOpen, onClose, onAddReport }) {
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    category: 'Investigación & Balance',
    categoryColor: 'gold',
    author: 'Equipo Editorial - La Trinidad Periodística',
    readTime: '6 min de lectura',
    coverImage: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
    coverCaption: 'Fotografía acreditada para la investigación.',
    lead: '',
    sectionHeading: '1. Desarrollo de la Investigación',
    sectionContent: '',
    quoteText: '',
    quoteAuthor: '',
    multimediaType: 'infographic',
    multimediaTitle: 'Recurso Multimedia Interactivo',
    multimediaDesc: 'Análisis de datos y testimonios verificados.',
    sources: 'Fuentes oficiales y trabajo de campo.'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.lead) {
      alert('Por favor completa al menos el título y la introducción (lead).');
      return;
    }

    const newReport = {
      id: `informe-${Date.now()}`,
      slug: formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      number: `Informe Nuevo`,
      category: formData.category,
      categoryColor: formData.categoryColor,
      title: formData.title,
      subtitle: formData.subtitle || 'Investigación periodística convergente.',
      author: formData.author,
      date: 'Octubre de 2026',
      readTime: formData.readTime,
      coverImage: formData.coverImage,
      coverCaption: formData.coverCaption,
      lead: formData.lead,
      stats: [
        { label: 'Fuentes Contrastadas', value: '100%', desc: 'Rigor y verificación' },
        { label: 'Multimedia', value: 'Activo', desc: formData.multimediaType },
        { label: 'Estado', value: 'Publicado', desc: 'En plataforma' }
      ],
      sections: [
        {
          heading: formData.sectionHeading || '1. Desarrollo y Hallazgos',
          content: formData.sectionContent || 'Contenido de la investigación periodística.'
        }
      ],
      multimedia: {
        type: formData.multimediaType,
        title: formData.multimediaTitle,
        description: formData.multimediaDesc,
        duration: '10:00 min',
        data: [
          { punto: 'Indicador 1', status: '75% Avance', level: 75, color: '#e5a93c' },
          { punto: 'Indicador 2', status: '50% En Proceso', level: 50, color: '#10b981' }
        ],
        pillars: [
          { title: 'Propuesta Clave', desc: formData.multimediaDesc, icon: 'CheckCircle' }
        ]
      },
      quote: formData.quoteText ? {
        text: formData.quoteText,
        author: formData.quoteAuthor || 'Fuente Testimonial',
        role: 'Testimonio en Terreno'
      } : null,
      sources: formData.sources.split('\n').filter(s => s.trim())
    };

    onAddReport(newReport);
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 130,
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
        maxWidth: '750px',
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
            <PlusCircle size={20} color="#e5a93c" />
            <h2 style={{ fontSize: '1.2rem', color: '#f8fafc', margin: 0 }}>
              Redactar y Publicar Nuevo Informe / Historia
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

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.4rem' }}>
              Título del Informe Periodístico *
            </label>
            <input
              type="text"
              required
              placeholder="Ej: Crónica desde el Catatumbo: La resistencia campesina..."
              value={formData.title}
              onChange={e => setFormData({ ...formData, title: e.target.value })}
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '8px',
                background: '#161f33',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#f8fafc',
                fontSize: '0.95rem'
              }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.4rem' }}>
                Categoría
              </label>
              <select
                value={formData.category}
                onChange={e => {
                  const cat = e.target.value;
                  let color = 'gold';
                  if (cat.includes('Crónica')) color = 'emerald';
                  if (cat.includes('Justicia')) color = 'cyan';
                  if (cat.includes('Propuestas')) color = 'crimson';
                  setFormData({ ...formData, category: cat, categoryColor: color });
                }}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  background: '#161f33',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#f8fafc',
                  fontSize: '0.9rem'
                }}
              >
                <option value="Investigación & Balance">Investigación & Balance</option>
                <option value="Crónica & Testimonios">Crónica & Testimonios</option>
                <option value="Justicia & Transparencia">Justicia & Transparencia</option>
                <option value="Propuestas & Futuro">Propuestas & Futuro</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.4rem' }}>
                Recurso Multimedia Convergente
              </label>
              <select
                value={formData.multimediaType}
                onChange={e => setFormData({ ...formData, multimediaType: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  background: '#161f33',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#f8fafc',
                  fontSize: '0.9rem'
                }}
              >
                <option value="audioPodcast">🎧 Audio Podcast / Testimonio</option>
                <option value="videoDocumentary">🎥 Microdocumental en Video</option>
                <option value="infographic">📊 Infografía de Datos</option>
                <option value="interactiveMap">🗺️ Matriz / Mapa Interactivo</option>
              </select>
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.4rem' }}>
              Subtítulo / Bajada
            </label>
            <input
              type="text"
              placeholder="Breve resumen en una línea que despierte el interés..."
              value={formData.subtitle}
              onChange={e => setFormData({ ...formData, subtitle: e.target.value })}
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '8px',
                background: '#161f33',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#f8fafc',
                fontSize: '0.9rem'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.4rem' }}>
              Párrafo de Entrada (Lead Periodístico) *
            </label>
            <textarea
              required
              rows={3}
              placeholder="El primer párrafo que responde al qué, quién, cómo, cuándo y por qué..."
              value={formData.lead}
              onChange={e => setFormData({ ...formData, lead: e.target.value })}
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '8px',
                background: '#161f33',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#f8fafc',
                fontSize: '0.9rem'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.4rem' }}>
              Cuerpo del Reportaje / Desarrollo
            </label>
            <textarea
              rows={5}
              placeholder="Pega aquí el desarrollo completo de la investigación..."
              value={formData.sectionContent}
              onChange={e => setFormData({ ...formData, sectionContent: e.target.value })}
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '8px',
                background: '#161f33',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#f8fafc',
                fontSize: '0.9rem'
              }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.4rem' }}>
                Cita Textual de la Fuente
              </label>
              <input
                type="text"
                placeholder="«Las palabras construyen la paz...»"
                value={formData.quoteText}
                onChange={e => setFormData({ ...formData, quoteText: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  background: '#161f33',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#f8fafc',
                  fontSize: '0.9rem'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.4rem' }}>
                Autor de la Cita
              </label>
              <input
                type="text"
                placeholder="Ej: Carlos Mejía (Líder comunal)"
                value={formData.quoteAuthor}
                onChange={e => setFormData({ ...formData, quoteAuthor: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  background: '#161f33',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#f8fafc',
                  fontSize: '0.9rem'
                }}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.4rem' }}>
              URL de Imagen de Portada (Opcional)
            </label>
            <input
              type="text"
              placeholder="https://images.unsplash.com/..."
              value={formData.coverImage}
              onChange={e => setFormData({ ...formData, coverImage: e.target.value })}
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '8px',
                background: '#161f33',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#f8fafc',
                fontSize: '0.85rem'
              }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1rem' }}>
            <button
              type="button"
              onClick={onClose}
              style={{
                padding: '0.7rem 1.25rem',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                color: '#f8fafc',
                fontWeight: 600,
                fontSize: '0.85rem'
              }}
            >
              Cancelar
            </button>

            <button
              type="submit"
              style={{
                padding: '0.7rem 1.5rem',
                borderRadius: '8px',
                backgroundColor: '#e5a93c',
                color: '#0a0d14',
                fontWeight: 800,
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 14px rgba(229, 169, 60, 0.4)'
              }}
            >
              <Save size={16} />
              <span>Publicar en la Plataforma</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
