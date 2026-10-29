import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Phone, Clock, ChevronDown, MessageCircle } from 'lucide-react';

const DATA = {
  "handle": "cosmedent.rd",
  "businessName": "CosmeDent RD",
  "legalOrFullTitle": "CosmeDent RD — Dr. Hancel Sánchez | Estética Dental & Diseño de Sonrisa",
  "tagline": "La Fábrica de Sonrisas",
  "industry": "clinics-health",
  "followersEstimate": "18.5K seguidores",
  "hasWebsite": false,
  "leadScore": 96,
  "specialist": {
    "name": "Dr. Hancel Sánchez",
    "role": "Director Clínico & Especialista en Estética Dental",
    "bioParagraph1": "El Dr. Hancel Sánchez lidera CosmeDent RD combinando la precisión de la odontología digital moderna con la sensibilidad artesanal requerida para lograr sonrisas verdaderamente naturales. Su enfoque elimina el estigma de las sonrisas opacas o sobreblanqueadas, priorizando la anatomía única, textura e iridiscencia de cada diente.",
    "bioParagraph2": "En sus instalaciones boutique en Plaza Gala, Santo Domingo, el Dr. Sánchez se dedica a devolver la confianza funcional y estética a cada paciente con protocolos de mínima invasión, diagnóstico facializado y un trato cálido y transparente.",
    "credentials": [
      "Especialista en Odontología Estética & Restauradora",
      "Experto en Diseño Digital de Sonrisa (DSD 3D)",
      "Certificado en Sistemas de Cerámica Feldespática & Resinas de Alta Densidad"
    ]
  },
  "contact": {
    "address": "Plaza Gala, Av. Los Próceres (frente a la Texaco, esq. Euclides Morillo), 2do nivel, Santo Domingo",
    "sector": "Los Próceres / Arroyo Hondo",
    "city": "Santo Domingo, D.N., República Dominicana",
    "phoneDisplay": "+1 (829) 334-4244",
    "secondaryPhone": "+1 (829) 830-2276",
    "whatsappNumber": "18293344244",
    "whatsappPrefill": "Hola, vi su página web y me gustaría agendar una cita de evaluación con el Dr. Hancel Sánchez.",
    "instagramUrl": "https://www.instagram.com/cosmedent.rd/",
    "hours": "Lunes a Viernes: 9:00 AM – 6:30 PM | Sábados: 9:00 AM – 2:00 PM",
    "mapQuery": "Plaza Gala Avenida Los Proceres Santo Domingo"
  },
  "hero": {
    "headlinePart1": "Esculpimos la armonía de tu",
    "headlineAccent": "sonrisa natural",
    "headlinePart2": "con precisión digital.",
    "subtitle": "Estética dental de alta gama en Santo Domingo. Diseñamos sonrisas a medida con textura, translucidez y un enfoque 100% preservador de tu salud.",
    "primaryCta": "Agendar Evaluación por WhatsApp",
    "secondaryCta": "Ver Casos y Especialidades",
    "locationStamp": "SANTO DOMINGO • PLAZA GALA, AV. LOS PRÓCERES",
    "highlightStatNumber": "+1,800",
    "highlightStatLabel": "Sonrisas transformadas con acabado natural y garantía clínica"
  },
  "authorityStrip": {
    "title": "EXCELENCIA Y TECNOLOGÍA ODONTOLÓGICA EN REPÚBLICA DOMINICANA",
    "items": [
      "Diseño Digital Facializado 3D",
      "Técnicas Mínimamente Invasivas",
      "Cerámicas & Resinas de Grado Alemán",
      "Atención Personalizada en Plaza Gala",
      "Estética Natural de Alto Impacto"
    ]
  },
  "services": [
    {
      "number": "01",
      "title": "Diseño de Sonrisa Digital 3D",
      "patientQuote": "Quiero ver exactamente cómo lucirá mi sonrisa antes de tocar una sola pieza dental.",
      "description": "Análisis morfológico y simulación fotográfica adaptada a las proporciones de tu rostro. Creamos una maqueta previa (mock-up) para que pruebes tu nueva sonrisa de forma interactiva.",
      "deliverable": "Simulación 3D + Prueba estética en boca previa al tratamiento",
      "duration": "1 a 2 sesiones clínicas",
      "imageCategory": "smile_design"
    },
    {
      "number": "02",
      "title": "Carillas de Alta Estética (Porcelana & Resina)",
      "patientQuote": "Busco corregir bordes, manchas y desalineaciones sin perder la apariencia de un diente real.",
      "description": "Láminas ultrafinas elaboradas artesanalmente con graduación de color, microtextura e translucidez incisal, logrando un cambio radical de aspecto sin desgaste agresivo del esmalte.",
      "deliverable": "Restauraciones cerámicas o en resina nanohíbrida de larga durabilidad",
      "duration": "2 a 3 visitas de precisión",
      "imageCategory": "veneers"
    },
    {
      "number": "03",
      "title": "Blanqueamiento Dental Láser & Avanzado",
      "patientQuote": "Deseo recuperar un tono brillante y rejuvenecido sin sufrir sensibilidad molesta.",
      "description": "Tratamiento de aceleración fotoactiva con agentes desensibilizantes que remueven pigmentos profundos causados por café o paso del tiempo de manera segura y duradera.",
      "deliverable": "Aclaramiento de 3 a 6 tonos en sesión de consultorio + kit de mantenimiento",
      "duration": "Sesión única de 60 minutos",
      "imageCategory": "whitening"
    },
    {
      "number": "04",
      "title": "Rehabilitación Oral & Estética Integrada",
      "patientQuote": "Necesito restaurar dientes desgastados y cambiar empastes oscuros antiguos por materiales modernos.",
      "description": "Sustitución de amalgamas por resinas biocompatibles y reconstrucción de piezas desgastadas para equilibrar la mordida y devolver la estética funcional y armoniosa.",
      "deliverable": "Saneamiento total, cambio de amalgamas y nivelación oclusal",
      "duration": "2 a 4 sesiones según complejidad",
      "imageCategory": "rehab"
    }
  ],
  "cases": [
    {
      "code": "CASO 01",
      "title": "Rediseño de Sonrisa por Desgaste e Irregularidad Anterior",
      "category": "Carillas de Porcelana Ultra-Delgadas",
      "challenge": "Paciente con bordes desgastados, asimetría de forma y descontento con tratamientos previos opacos.",
      "solution": "Planificación digital facial y colocación de 8 carillas de porcelana feldespática manteniendo transparencia y textura orgánicas.",
      "time": "3 visitas (2 semanas)"
    },
    {
      "code": "CASO 02",
      "title": "Cierre de Diastemas y Cambio de Color en Zona Frontal",
      "category": "Lentes Cerámicos & Protocolo Anti-Manchas",
      "challenge": "Espaciados interdentales marcados y tono amarillento resistente a blanqueamientos caseros.",
      "solution": "Blanqueamiento clínico previo e integración de microcarillas de resina de alta densidad sin desgaste dentario.",
      "time": "2 sesiones clínicas"
    },
    {
      "code": "CASO 03",
      "title": "Rehabilitación Estética Integral & Retiro de Amalgamas",
      "category": "Rehabilitación Estética & Resinas Directas",
      "challenge": "Boca con restauraciones oscuras antiguas, desgaste por bruxismo y desalineación de la línea de la sonrisa.",
      "solution": "Sustitución de amalgamas por inlays de resina biocompatible y armonización de bordes incisales superiores e inferiores.",
      "time": "3 semanas de tratamiento"
    }
  ],
  "process": [
    {
      "step": "01",
      "title": "Consulta & Escaneo Digital",
      "desc": "Evaluación minuciosa en Plaza Gala con fotografía clínica HD y mapeo digital de la estructura facial y dental."
    },
    {
      "step": "02",
      "title": "Diseño & Prueba en Boca (Mock-up)",
      "desc": "Simulamos la propuesta estética directamente en tus dientes sin alterar nada para validar proporciones y expectativas."
    },
    {
      "step": "03",
      "title": "Confección y Ajuste Micro-Estético",
      "desc": "Procedimiento indoloro bajo protocolos de máxima precisión técnica con materiales de origen europeo."
    },
    {
      "step": "04",
      "title": "Mantenimiento y Control de Garantía",
      "desc": "Entregamos protector oclusal y citas periódicas de profilaxis para garantizar la longevidad de tu inversión."
    }
  ],
  "testimonials": [
    {
      "name": "Dra. Carolina Almonte",
      "context": "Paciente de Carillas en Porcelana",
      "quote": "Mi mayor temor era terminar con dientes artificiales o exagerados. El Dr. Hancel entendió exactamente la textura y luminosidad que mi rostro necesitaba. Su atención en Plaza Gala es impecable."
    },
    {
      "name": "Lic. Jean Carlos Pichardo",
      "context": "Diseño de Sonrisa Digital & Blanqueamiento",
      "quote": "Viajé desde Miami expresamente para hacerme el diseño con CosmeDent RD. La puntualidad, la limpieza del espacio y la tecnología que maneja el Dr. Sánchez superó mis expectativas."
    },
    {
      "name": "Valeria Tejeda",
      "context": "Cierre de Diastemas con Resinas Estéticas",
      "quote": "El trato humano y detallista marca la diferencia. Me mostraron el resultado antes de empezar y el procedimiento fue cero molestia. Recomiendo a CosmeDent con los ojos cerrados."
    }
  ],
  "faqs": [
    {
      "q": "¿Dónde está ubicada la clínica CosmeDent RD y cómo es el acceso?",
      "a": "Estamos ubicados en Plaza Gala, Av. Los Próceres (frente a la Estación Texaco, esquina Euclides Morillo), 2do nivel, en Santo Domingo. La plaza cuenta con parqueo accesible y seguridad permanentemente."
    },
    {
      "q": "¿Es necesario desgastar mis dientes naturales para colocar carillas?",
      "a": "No necesariamente. Priorizamos la odontología mínimamente invasiva. Con la tecnología de diseño digital en 3D, en muchos casos realizamos intervenciones de micro-preparación o 'carillas sin desgaste' según tu estructura dentaria."
    },
    {
      "q": "¿Resido fuera de República Dominicana, puedo completar mi tratamiento en un viaje corto?",
      "a": "Sí. Coordinamos una primera consulta virtual para revisar tu caso y planificar la agenda. La mayoría de los tratamientos estéticos se completan exitosamente en una estancia de 5 a 8 días hábiles en Santo Domingo."
    },
    {
      "q": "¿Cómo puedo agendar una evaluación con el Dr. Hancel Sánchez?",
      "a": "Puedes agendar directamente vía WhatsApp a los números (829) 334-4244 o (829) 830-2276. Nuestro equipo asistente te coordinará el horario ideal según tu disponibilidad."
    }
  ],
  "brand": {
    "aestheticName": "Clínico Editorial Cálido & Elegancia Cerámica",
    "fontDisplay": "Cormorant Garamond",
    "fontSans": "Plus Jakarta Sans",
    "palette": {
      "bgWarm": "#FAF9F5",
      "bgSecondary": "#F3F1EA",
      "bgDark": "#0B0C0E",
      "textDark": "#0E1117",
      "textMuted": "#4B5563",
      "textLight": "#F8FAFC",
      "accent": "#B8860B",
      "accentHover": "#996F08",
      "accentSoft": "#FBF7ED",
      "goldAccent": "#F4E274"
    },
    "inspirationRefs": [
      "/inspiration/clinics-health/h1.jpg",
      "/inspiration/clinics-health/h10.jpg",
      "/inspiration/clinics-health/h11.webp",
      "/inspiration/clinics-health/h12.webp",
      "/inspiration/clinics-health/h13.webp",
      "/inspiration/clinics-health/h14.webp"
    ]
  }
};
const MEDIA = {
  "heroMain": "/media/post_1.jpg",
  "heroDetail": "/media/post_10.jpg",
  "specialist": "/media/post_11.jpg",
  "services": [
    "/media/post_12.jpg",
    "/media/post_2.jpg",
    "/media/post_3.jpg",
    "/media/post_4.jpg"
  ],
  "beforeImg": "/media/post_5.jpg",
  "afterImg": "/media/post_6.jpg",
  "gallery": [
    "/media/post_7.jpg",
    "/media/post_8.jpg",
    "/media/post_9.jpg"
  ]
};
const IS_HEALTH = true;

export default function App() {
  const [activeService, setActiveService] = useState(0);
  const [sliderPos, setSliderPos] = useState(52);
  const [openFaq, setOpenFaq] = useState(0);

  const waUrl = `https://wa.me/${DATA.contact.whatsappNumber}?text=${encodeURIComponent(DATA.contact.whatsappPrefill)}`;

  const handleSliderMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const pct = Math.max(8, Math.min(92, ((clientX - rect.left) / rect.width) * 100));
    setSliderPos(pct);
  };

  return (
    <div>
      {/* NAVBAR FIJO EDITORIAL */}
      <header className="site-navbar">
        <div className="container nav-inner">
          <a href="#" className="brand-mark" style={{ display: 'flex', alignItems: 'center', gap: '14px', flexDirection: 'row' }}>
            <img src="/media/logo_real.jpg" alt="CosmeDent RD" style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '1.5px solid var(--accent)' }} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span className="brand-name">{DATA.businessName}</span>
              <span className="brand-sub">{DATA.tagline}</span>
            </div>
          </a>

          <nav className="nav-links">
            <a href="#especialidades">Especialidades</a>
            <a href="#casos">Resultados</a>
            <a href="#especialista">{DATA.specialist.name.split(' ').slice(0, 2).join(' ')}</a>
            <a href="#ubicacion">Ubicación</a>
          </nav>

          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-brand nav-cta-btn" style={{ padding: '12px 24px', fontSize: '0.92rem' }}>
            Agendar Cita <ArrowUpRight size={17} />
          </a>
        </div>
      </header>

      {/* 1. HERO EDITORIAL ASIMÉTRICO */}
      <section className="hero-section">
        <div className="container hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="hero-title">
              {DATA.hero.headlinePart1}{' '}
              <span className="hero-title-accent">{DATA.hero.headlineAccent}</span>{' '}
              {DATA.hero.headlinePart2}
            </h1>

            <p className="hero-subtitle">{DATA.hero.subtitle}</p>

            <div className="hero-actions">
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-brand">
                {DATA.hero.primaryCta} <ArrowUpRight size={19} />
              </a>
              <a href="#especialidades" className="btn-outline-editorial">
                {DATA.hero.secondaryCta}
              </a>
            </div>

            <div className="hero-meta-row">
              <div>
                <div className="hero-stat-num">{DATA.hero.highlightStatNumber}</div>
                <div className="hero-stat-label">{DATA.hero.highlightStatLabel}</div>
              </div>
              <div style={{ borderLeft: '1px solid rgba(15,23,42,0.12)', paddingLeft: '28px' }}>
                <div style={{ fontWeight: 700, color: 'var(--text-dark)', fontSize: '1.02rem' }}>
                  {DATA.specialist.name}
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  {DATA.contact.sector}, Santo Domingo
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-stage"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero-main-frame">
              <img src={MEDIA.heroMain} alt={DATA.businessName} />
            </div>
            <div className="hero-floating-photo">
              <img src={MEDIA.heroDetail} alt={DATA.tagline} loading="lazy" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. FRANJA DE RESPALDO / SEGUROS MÉDICOS RD */}
      <section className="authority-strip">
        <div className="container">
          <div className="authority-label">{DATA.authorityStrip.title}</div>
          <div className="marquee-track-wrap">
            <div className="marquee-track">
              {IS_HEALTH ? (
                [...Array(2)].map((_, idx) => (
                  <React.Fragment key={idx}>
                    <img src="/logos-seguros/Logohumano2016.webp" alt="ARS Humano" className="insurance-logo" />
                    <img src="/logos-seguros/Mapfre_Logo_2026-s1280.png" alt="Mapfre Salud" className="insurance-logo" />
                    <img src="/logos-seguros/ars_seguros_banreservas.d729df7.png" alt="Seguros Reservas" className="insurance-logo" />
                    <img src="/logos-seguros/logo-seguros-universal.svg" alt="Seguros Universal" className="insurance-logo" />
                    <img src="/logos-seguros/logo2022.webp" alt="SeNaSa" className="insurance-logo" />
                    <img src="/logos-seguros/Worldwide Medical.png" alt="Worldwide Medical" className="insurance-logo" />
                    <img src="/logos-seguros/logos-bmi-ecuador-02.png" alt="BMI" className="insurance-logo" />
                  </React.Fragment>
                ))
              ) : (
                [...DATA.authorityStrip.items, ...DATA.authorityStrip.items].map((item, i) => (
                  <span key={i} style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-dark)' }}>
                    {item}
                  </span>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. ÍNDICE EDITORIAL NUMERADO INTERACTIVO (CERO TARJETAS) */}
      <section id="especialidades" className="editorial-services-section">
        <div className="container">
          <div style={{ maxWidth: '680px' }}>
            <h2 style={{ fontSize: 'clamp(2.4rem, 4.4vw, 3.8rem)', color: 'var(--text-light)' }}>
              Especialidades diseñadas alrededor de lo que deseas lograr.
            </h2>
          </div>

          <div className="services-layout">
            <div>
              {DATA.services.map((srv, idx) => {
                const isActive = activeService === idx;
                return (
                  <div
                    key={idx}
                    className={`service-row-item ${isActive ? 'active' : ''}`}
                    onMouseEnter={() => setActiveService(idx)}
                    onClick={() => setActiveService(idx)}
                  >
                    <div className="service-row-header">
                      <span className="service-num">{srv.number}</span>
                      <h3 className="service-title">{srv.title}</h3>
                      <ArrowUpRight size={22} color={isActive ? 'var(--accent)' : 'rgba(255,255,255,0.4)'} />
                    </div>

                    {isActive && (
                      <motion.div
                        className="service-expand"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="service-quote">“{srv.patientQuote}”</div>
                        <p className="service-desc">{srv.description}</p>
                        <div className="service-meta-bar">
                          <span>Protocolo: <strong style={{ color: '#FFFFFF' }}>{srv.deliverable}</strong></span>
                          <span>•</span>
                          <span>Tiempo: <strong style={{ color: '#FFFFFF' }}>{srv.duration}</strong></span>
                        </div>
                        <div style={{ marginTop: '10px' }}>
                          <a
                            href={`https://wa.me/${DATA.contact.whatsappNumber}?text=${encodeURIComponent('Hola, me interesa información sobre ' + srv.title)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'var(--accent)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)' }}
                          >
                            Consultar sobre {srv.title} por WhatsApp <ArrowUpRight size={16} />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="service-visual-stage">
              <img
                src={MEDIA.services[activeService % MEDIA.services.length]}
                alt={DATA.services[activeService]?.title}
                loading="lazy"
              />
              <div className="service-visual-caption">
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 600 }}>
                  {DATA.services[activeService]?.title}
                </div>
                <div style={{ fontSize: '0.95rem', opacity: 0.85, marginTop: '4px' }}>
                  {DATA.services[activeService]?.deliverable}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TRANSFORMACIÓN REAL & CASOS DESTACADOS */}
      <section id="casos" className="transformation-section">
        <div className="container trans-grid">
          <div>
            <div
              className="ba-slider-container"
              onMouseMove={handleSliderMove}
              onTouchMove={handleSliderMove}
            >
              <img src={MEDIA.afterImg} alt="Resultado final" className="ba-img" />
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  width: `${sliderPos}%`,
                  overflow: 'hidden'
                }}
              >
                <img
                  src={MEDIA.beforeImg}
                  alt="Estado inicial"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.75) brightness(0.92)' }}
                />
              </div>
              <div className="ba-divider" style={{ left: `${sliderPos}%` }}>
                <div className="ba-handle">↔</div>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '14px', textAlign: 'center' }}>
              Desliza horizontalmente sobre la imagen para comparar el antes y el acabado estético.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: 'clamp(2.3rem, 4vw, 3.5rem)', color: 'var(--text-dark)', marginBottom: '20px' }}>
              Resultados que hablan por su proporción y naturalidad.
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.12rem' }}>
              Cada caso en {DATA.businessName} se planifica de forma individualizada, respetando la armonía y estructura propia de cada persona.
            </p>

            <div className="cases-editorial-list">
              {DATA.cases.map((c, idx) => (
                <div key={idx} className="case-strip">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                    <h3 style={{ fontSize: '1.45rem', color: 'var(--text-dark)' }}>{c.title}</h3>
                    <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.86rem', color: 'var(--accent)', fontWeight: 600 }}>
                      {c.time}
                    </span>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem' }}>
                    <strong style={{ color: 'var(--text-dark)' }}>Diagnóstico:</strong> {c.challenge}{' '}
                    <strong style={{ color: 'var(--text-dark)' }}>Resultado:</strong> {c.solution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. EL ESPECIALISTA / DIRECCIÓN CLÍNICA */}
      <section id="especialista" className="specialist-section">
        <div className="container specialist-grid">
          <div className="specialist-portrait">
            <img src={MEDIA.specialist} alt={DATA.specialist.name} loading="lazy" />
          </div>

          <div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 4.4vw, 3.9rem)', color: 'var(--text-dark)', marginBottom: '12px' }}>
              {DATA.specialist.name}
            </h2>
            <div style={{ fontFamily: 'var(--font-ui)', fontSize: '1.08rem', color: 'var(--accent)', fontWeight: 600, marginBottom: '28px' }}>
              {DATA.specialist.role}
            </div>

            <p style={{ color: 'var(--text-dark)', fontSize: '1.16rem', marginBottom: '20px', lineHeight: 1.68 }}>
              {DATA.specialist.bioParagraph1}
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.08rem', lineHeight: 1.68 }}>
              {DATA.specialist.bioParagraph2}
            </p>

            <div className="credentials-row">
              {DATA.specialist.credentials.map((cred, idx) => (
                <div key={idx} className="credential-item">
                  {cred}
                </div>
              ))}
            </div>

            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-brand">
              Agendar Consulta con {DATA.specialist.name.split(' ').slice(0, 2).join(' ')} <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* 6. MOSAICO DE INSTALACIONES & PROCESO EN 4 ETAPAS */}
      <section className="experience-section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(2.3rem, 4vw, 3.5rem)', color: 'var(--text-dark)', maxWidth: '640px' }}>
              Un espacio pensado para tu calma desde que cruzas la puerta.
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '420px' }}>
              Ubicados en {DATA.contact.address}, combinamos tecnología de última generación con un ambiente privado y relajado.
            </p>
          </div>

          <div className="mosaic-gallery">
            <div className="mosaic-item tall">
              <img src={MEDIA.gallery[0]} alt="Instalaciones principales" loading="lazy" />
            </div>
            <div className="mosaic-item">
              <img src={MEDIA.gallery[1]} alt="Equipamiento especializado" loading="lazy" />
            </div>
            <div className="mosaic-item">
              <img src={MEDIA.gallery[2]} alt="Detalle clínico" loading="lazy" />
            </div>
          </div>

          <div className="process-horizontal">
            {DATA.process.map((p, idx) => (
              <div key={idx}>
                <div className="process-col-num">{p.step}</div>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--text-dark)', marginBottom: '10px', fontFamily: 'var(--font-ui)', fontWeight: 700 }}>
                  {p.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. UBICACIÓN EN SANTO DOMINGO + FAQ + CONTACTO */}
      <section id="ubicacion" className="location-faq-section">
        <div className="container">
          <div className="location-split">
            <div>
              <h2 style={{ fontSize: 'clamp(2.4rem, 4.2vw, 3.6rem)', color: '#FFFFFF', marginBottom: '24px' }}>
                Visítanos en Santo Domingo o agenda tu evaluación hoy.
              </h2>

              <div style={{ display: 'grid', gap: '22px', margin: '36px 0' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <MapPin size={22} color="var(--accent)" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <div>
                    <div style={{ fontWeight: 700, color: '#FFFFFF' }}>Dirección en Santo Domingo</div>
                    <div style={{ color: 'rgba(248,250,252,0.8)' }}>{DATA.contact.address}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <Phone size={22} color="var(--accent)" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <div>
                    <div style={{ fontWeight: 700, color: '#FFFFFF' }}>Líneas Directas & WhatsApp</div>
                    <div style={{ color: 'rgba(248,250,252,0.8)' }}>
                      {DATA.contact.phoneDisplay} {DATA.contact.secondaryPhone ? ` / ${DATA.contact.secondaryPhone}` : ''}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <Clock size={22} color="var(--accent)" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <div>
                    <div style={{ fontWeight: 700, color: '#FFFFFF' }}>Horario de Atención</div>
                    <div style={{ color: 'rgba(248,250,252,0.8)' }}>{DATA.contact.hours}</div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-brand">
                  Escribir por WhatsApp Ahora <ArrowUpRight size={18} />
                </a>
                <a
                  href={DATA.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-editorial"
                  style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.28)' }}
                >
                  Ver Instagram @{DATA.handle}
                </a>
              </div>

              <div className="map-frame" style={{ marginTop: '40px' }}>
                <iframe
                  title="Ubicación en Santo Domingo"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(DATA.contact.mapQuery)}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: '2rem', color: '#FFFFFF', marginBottom: '28px' }}>
                Preguntas Frecuentes
              </h3>
              <div>
                {DATA.faqs.map((f, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={idx} className="faq-item-row" onClick={() => setOpenFaq(isOpen ? -1 : idx)}>
                      <div className="faq-question">
                        <span>{f.q}</span>
                        <ChevronDown
                          size={20}
                          style={{
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.25s ease',
                            color: 'var(--accent)'
                          }}
                        />
                      </div>
                      {isOpen && <div className="faq-answer">{f.a}</div>}
                    </div>
                  );
                })}
              </div>

              {/* Testimonios integrados sin tarjetas pesadas */}
              <div style={{ marginTop: '56px', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.14)' }}>
                <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.85rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '20px' }}>
                  LO QUE DICEN NUESTROS PACIENTES EN SANTO DOMINGO
                </div>
                {DATA.testimonials.slice(0, 2).map((t, idx) => (
                  <blockquote key={idx} style={{ marginBottom: '24px' }}>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontStyle: 'italic', color: '#FFFFFF', lineHeight: 1.4 }}>
                      “{t.quote}”
                    </p>
                    <footer style={{ fontSize: '0.9rem', color: 'rgba(248,250,252,0.7)', marginTop: '6px' }}>
                      — {t.name} ({t.context})
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>

          <footer style={{ paddingTop: '42px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', fontSize: '0.9rem', color: 'rgba(248,250,252,0.6)' }}>
            <div>© {new Date().getFullYear()} {DATA.businessName}. Todos los derechos reservados.</div>
            <div>{DATA.contact.address} • {DATA.contact.city}</div>
          </footer>
        </div>
      </section>

      {/* BOTÓN FLOTANTE DE WHATSAPP */}
      <a href={waUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-float">
        <MessageCircle size={20} /> Agendar por WhatsApp
      </a>
    </div>
  );
}
