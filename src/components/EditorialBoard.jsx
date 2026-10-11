'use client';

import React from 'react';
import { Users, Shield, BookOpen, Feather, CheckCircle } from 'lucide-react';
import { editorialMembers } from '../data/reportsData';

export default function EditorialBoard() {
  return (
    <section id="editorial" style={{
      padding: '5rem 0',
      backgroundColor: 'rgba(13, 18, 28, 0.7)',
      borderTop: '1px solid rgba(255, 255, 255, 0.06)'
    }}>
      <div className="max-w-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 3.5rem' }}>
          <span className="badge badge-gold" style={{ marginBottom: '1rem' }}>
            <Users size={14} />
            Identidad Institucional & Manifiesto
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#f8fafc', marginBottom: '1rem' }}>
            Quiénes Somos: La Trinidad Periodística y el Idioma
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#94a3b8', lineHeight: 1.6 }}>
            Somos un colectivo de periodismo digital de investigación, análisis del discurso y verificación de datos, 
            dedicado a explorar el impacto del Acuerdo de Paz en Colombia a través del periodismo convergente.
          </p>
        </div>

        {/* Manifesto Box */}
        <div className="glass-card" style={{
          padding: '2.5rem',
          borderRadius: '24px',
          border: '1px solid rgba(229, 169, 60, 0.25)',
          marginBottom: '3.5rem',
          background: 'linear-gradient(135deg, rgba(20, 27, 43, 0.9) 0%, rgba(10, 15, 25, 0.95) 100%)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', color: '#e5a93c' }}>
            <Feather size={22} />
            <h3 style={{ fontSize: '1.4rem', color: '#f8fafc', margin: 0 }}>
              Manifiesto Editorial: El Valor del Idioma en la Construcción de Paz
            </h3>
          </div>

          <p style={{ color: '#cbd5e1', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            El nombre de nuestro medio, <strong>La Trinidad Periodística y el Idioma</strong>, nace de la unión indisociable 
            entre tres principios fundamentales del periodismo moderno: la <strong>Verdad verificable</strong> (hechos y datos), 
            la <strong>Memoria histórica</strong> (las voces humanas de las víctimas y los territorios) y la <strong>Convergencia digital</strong> 
            (el uso de tecnologías interactivas al servicio de la ciudadanía).
          </p>

          <p style={{ color: '#94a3b8', fontSize: '0.98rem', lineHeight: 1.7 }}>
            Sostenemos que el <em>idioma</em> no es un mero vehículo neutro de palabras, sino una herramienta de transformación social. 
            Nombrar los sucesos con rigor ético, desarmar el lenguaje del odio y garantizar que las investigaciones lleguen a todas 
            las audiencias mediante múltiples formatos es nuestra misión inquebrantable.
          </p>
        </div>

        {/* Editorial Team Roles Cards */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.5rem', color: '#f8fafc', marginBottom: '1.5rem', textAlign: 'center' }}>
            Comité Editorial & Roles de Producción
          </h3>

          <div className="grid-2" style={{ gap: '1.5rem' }}>
            {editorialMembers.map((member, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '1.75rem',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <h4 style={{ fontSize: '1.15rem', color: '#f8fafc', fontWeight: 700 }}>
                    {member.name}
                  </h4>
                  <span className="badge badge-gold" style={{ fontSize: '0.7rem' }}>
                    {member.badge}
                  </span>
                </div>

                <div style={{ fontSize: '0.85rem', color: '#e5a93c', fontWeight: 600, marginBottom: '0.75rem' }}>
                  {member.role}
                </div>

                <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.5 }}>
                  {member.task}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
