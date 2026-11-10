<script setup>
import { computed, ref } from 'vue'

const descriptions = {
  'WhatsApp Image 2026-11-10 at 10.14.28.jpeg': {
    category: 'Conectividad inalámbrica',
    title: 'Punto de acceso inalámbrico',
    alt: 'Equipo de conectividad inalámbrica instalado junto a una ventana'
  },
  'WhatsApp Image 2026-11-10 at 10.14.29 (1).jpeg': {
    category: 'Control de acceso',
    title: 'Acceso con teclado digital',
    alt: 'Teclado digital instalado para control de acceso'
  },
  'WhatsApp Image 2026-11-10 at 10.14.29.jpeg': {
    category: 'Seguridad electrónica',
    title: 'Dispositivo de alarma',
    alt: 'Dispositivo de seguridad electrónica instalado en una pared'
  },
  'WhatsApp Image 2026-11-10 at 10.14.30.jpeg': {
    category: 'Redes y cableado',
    title: 'Cableado de red en gabinete',
    alt: 'Cableado de red conectado y organizado en un gabinete'
  },
  'WhatsApp Image 2026-11-10 at 10.14.31 (1).jpeg': {
    category: 'Redes y cableado',
    title: 'Panel de conexiones de red',
    alt: 'Conexiones azules de red organizadas en un panel'
  },
  'WhatsApp Image 2026-11-10 at 10.14.31 (2).jpeg': {
    category: 'Infraestructura de red',
    title: 'Equipos de red en rack',
    alt: 'Equipos de red montados y conectados en un rack'
  },
  'WhatsApp Image 2026-11-10 at 10.14.31 (3).jpeg': {
    category: 'Infraestructura de red',
    title: 'Switch y conexiones de red',
    alt: 'Switch de red y cableado instalados en un gabinete'
  },
  'WhatsApp Image 2026-11-10 at 10.14.31 (4).jpeg': {
    category: 'Infraestructura tecnológica',
    title: 'Gabinete de comunicaciones',
    alt: 'Gabinete técnico con equipos y cableado instalados'
  },
  'WhatsApp Image 2026-11-10 at 10.14.31 (5).jpeg': {
    category: 'Videovigilancia',
    title: 'Monitoreo de videovigilancia',
    alt: 'Monitores de un sistema de videovigilancia instalado'
  },
  'WhatsApp Image 2026-11-10 at 10.14.31.jpeg': {
    category: 'Infraestructura tecnológica',
    title: 'Rack tecnológico con monitoreo',
    alt: 'Rack con equipos tecnológicos y pantallas de monitoreo'
  },
  'WhatsApp Image 2026-11-10 at 10.14.36 (1).jpeg': {
    category: 'Videovigilancia',
    title: 'Cámara interior de videovigilancia',
    alt: 'Cámara de videovigilancia instalada en una esquina interior'
  },
  'WhatsApp Image 2026-11-10 at 10.14.36 (2).jpeg': {
    category: 'Videovigilancia',
    title: 'Cámara de videovigilancia en techo',
    alt: 'Cámara de videovigilancia montada en el techo'
  },
  'WhatsApp Image 2026-11-10 at 10.14.36 (3).jpeg': {
    category: 'Videovigilancia',
    title: 'Cámara de videovigilancia instalada',
    alt: 'Cámara de seguridad instalada en una estructura'
  },
  'WhatsApp Image 2026-11-10 at 10.14.36.jpeg': {
    category: 'Videovigilancia',
    title: 'Cámara domo de interior',
    alt: 'Cámara de seguridad tipo domo instalada en el techo'
  },
  'WhatsApp Image 2026-11-10 at 10.14.37 (1).jpeg': {
    category: 'Videovigilancia',
    title: 'Estación de monitoreo',
    alt: 'Pantallas de monitoreo dentro de un rack de seguridad'
  },
  'WhatsApp Image 2026-11-10 at 10.14.37.jpeg': {
    category: 'Instalación en sitio',
    title: 'Instalación de infraestructura tecnológica',
    alt: 'Técnico trabajando en la instalación de equipos en altura'
  },
  'WhatsApp Image 2026-11-10 at 10.14.40 (1).jpeg': {
    category: 'Sensores y seguridad',
    title: 'Sensor de seguridad en techo',
    alt: 'Sensor de seguridad instalado en un techo interior'
  },
  'WhatsApp Image 2026-11-10 at 10.14.40 (2).jpeg': {
    category: 'Control de acceso',
    title: 'Terminal digital de acceso',
    alt: 'Terminal digital instalada para control de acceso'
  },
  'WhatsApp Image 2026-11-10 at 10.14.40 (3).jpeg': {
    category: 'Conectividad inalámbrica',
    title: 'Punto de acceso para red inalámbrica',
    alt: 'Punto de acceso inalámbrico listo para su instalación'
  },
  'WhatsApp Image 2026-11-10 at 10.14.40 (4).jpeg': {
    category: 'Videovigilancia',
    title: 'Cámara de videovigilancia exterior',
    alt: 'Cámara de videovigilancia instalada en el exterior'
  },
  'WhatsApp Image 2026-11-10 at 10.14.40 (5).jpeg': {
    category: 'Videovigilancia',
    title: 'Videovigilancia en acceso interior',
    alt: 'Cámara de seguridad instalada junto a una entrada'
  },
  'WhatsApp Image 2026-11-10 at 10.14.40.jpeg': {
    category: 'Redes y cableado',
    title: 'Conexión de red instalada',
    alt: 'Cable de red conectado a un equipo de comunicaciones'
  },
  'WhatsApp Image 2026-11-10 at 10.14.41 (1).jpeg': {
    category: 'Iluminación e integración',
    title: 'Iluminación integrada al espacio',
    alt: 'Iluminación instalada e integrada en un espacio interior'
  },
  'WhatsApp Image 2026-11-10 at 10.14.41.jpeg': {
    category: 'Videovigilancia',
    title: 'Cámara exterior de videovigilancia',
    alt: 'Cámara de videovigilancia instalada en una fachada'
  }
}

const images = Object.entries(
  import.meta.glob('../../../imagenesServicios/*.jpeg', {
    eager: true,
    import: 'default'
  })
)
  .sort(([first], [second]) =>
    first.localeCompare(second, 'en', { numeric: true })
  )
  .map(([path, src]) => {
    const fileName = path.slice(path.lastIndexOf('/') + 1)

    return {
      src,
      ...descriptions[fileName]
    }
  })

const currentIndex = ref(0)
const currentImage = computed(() => images[currentIndex.value])
const progress = computed(
  () => `${((currentIndex.value + 1) / images.length) * 100}%`
)
const displayIndex = computed(() =>
  String(currentIndex.value + 1).padStart(2, '0')
)
const displayTotal = computed(() => String(images.length).padStart(2, '0'))

const showPrevious = () => {
  if (currentIndex.value > 0) currentIndex.value -= 1
}

const showNext = () => {
  if (currentIndex.value < images.length - 1) currentIndex.value += 1
}
</script>

<template>
  <section
    id="portfolio-section"
    class="portfolio-section"
    aria-labelledby="portfolio-title"
  >
    <div class="container">
      <header class="portfolio-heading">
        <span class="portfolio-tag">Proyectos que nos respaldan</span>
        <h2 id="portfolio-title">Tecnología para conectar y proteger</h2>
        <p>
          Conoce algunos de nuestros proyectos de conectividad, infraestructura
          y seguridad, implementados por nuestro equipo para nuestros clientes.
        </p>
      </header>

      <div class="portfolio-carousel" aria-roledescription="carrusel">
        <Transition name="portfolio-fade" mode="out-in">
          <article :key="currentIndex" class="portfolio-project">
            <div class="portfolio-image">
              <img :src="currentImage.src" :alt="currentImage.alt" />
              <span class="portfolio-image-label">HENCOM · Proyecto realizado</span>
            </div>

            <div class="portfolio-details">
              <span class="portfolio-category">{{ currentImage.category }}</span>
              <h3>{{ currentImage.title }}</h3>
              <p>
                Soluciones instaladas con atención a cada detalle para ofrecer
                espacios más conectados, funcionales y seguros.
              </p>

              <div class="portfolio-navigation">
                <span
                  class="portfolio-counter"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  <span>{{ displayIndex }}</span> / {{ displayTotal }} proyectos
                </span>
                <div class="portfolio-controls">
                  <button
                    type="button"
                    class="portfolio-arrow"
                    aria-label="Ver proyecto anterior"
                    :disabled="currentIndex === 0"
                    @click="showPrevious"
                  >
                    <span aria-hidden="true">&larr;</span>
                  </button>
                  <button
                    type="button"
                    class="portfolio-arrow"
                    aria-label="Ver proyecto siguiente"
                    :disabled="currentIndex === images.length - 1"
                    @click="showNext"
                  >
                    <span aria-hidden="true">&rarr;</span>
                  </button>
                </div>
              </div>

              <div
                class="portfolio-progress"
                role="progressbar"
                :aria-valuenow="currentIndex + 1"
                :aria-valuemin="1"
                :aria-valuemax="images.length"
                :aria-label="`Proyecto ${currentIndex + 1} de ${images.length}`"
              >
                <span :style="{ width: progress }"></span>
              </div>
            </div>
          </article>
        </Transition>
      </div>
    </div>
  </section>
</template>

<style scoped>
.portfolio-section {
  padding: 110px 0;
  background: #0b1220;
}

.portfolio-heading {
  margin: 0 auto 52px;
  max-width: 760px;
  text-align: center;
}

.portfolio-tag {
  display: inline-block;
  margin-bottom: 18px;
  padding: 8px 18px;
  border: 1px solid rgba(56, 189, 248, 0.25);
  border-radius: 30px;
  background: rgba(30, 41, 59, 0.75);
  color: #38bdf8;
  font-weight: 700;
}

.portfolio-heading h2 {
  margin: 0;
  color: #f8fafc;
  font-size: 2.5rem;
  font-weight: 800;
}

.portfolio-heading p {
  margin: 18px auto 0;
  color: #94a3b8;
  font-size: 18px;
  line-height: 1.7;
}

.portfolio-carousel {
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  background: #111827;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);
}

.portfolio-project {
  display: grid;
  min-height: 440px;
  grid-template-columns: minmax(0, 1.2fr) minmax(300px, 0.8fr);
}

.portfolio-image {
  position: relative;
  min-height: 440px;
  overflow: hidden;
  background: #1e293b;
}

.portfolio-image img {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 440px;
  object-fit: cover;
}

.portfolio-image-label {
  position: absolute;
  bottom: 24px;
  left: 24px;
  padding: 9px 14px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 30px;
  background: rgba(11, 18, 32, 0.78);
  color: #f8fafc;
  font-size: 13px;
  font-weight: 700;
  backdrop-filter: blur(8px);
}

.portfolio-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 48px;
}

.portfolio-category {
  color: #38bdf8;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.portfolio-details h3 {
  margin: 18px 0 14px;
  color: #f8fafc;
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.2;
}

.portfolio-details p {
  margin: 0;
  color: #94a3b8;
  font-size: 16px;
  line-height: 1.8;
}

.portfolio-navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 42px;
}

.portfolio-counter {
  color: #64748b;
  font-size: 15px;
  font-weight: 700;
}

.portfolio-counter span {
  color: #f8fafc;
  font-size: 22px;
}

.portfolio-controls {
  display: flex;
  gap: 12px;
}

.portfolio-arrow {
  display: grid;
  width: 46px;
  height: 46px;
  place-items: center;
  border: 1px solid rgba(56, 189, 248, 0.4);
  border-radius: 50%;
  background: transparent;
  color: #38bdf8;
  cursor: pointer;
  font-size: 22px;
  transition: background 0.2s ease, color 0.2s ease, opacity 0.2s ease;
}

.portfolio-arrow:hover:not(:disabled) {
  background: #0284c7;
  color: #fff;
}

.portfolio-arrow:focus-visible {
  outline: 3px solid #7dd3fc;
  outline-offset: 3px;
}

.portfolio-arrow:disabled {
  cursor: not-allowed;
  opacity: 0.35;
}

.portfolio-progress {
  height: 3px;
  margin-top: 22px;
  overflow: hidden;
  background: #334155;
}

.portfolio-progress span {
  display: block;
  height: 100%;
  background: linear-gradient(90deg, #0284c7, #38bdf8);
  transition: width 0.3s ease;
}

.portfolio-fade-enter-active,
.portfolio-fade-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}

.portfolio-fade-enter-from,
.portfolio-fade-leave-to {
  opacity: 0;
  transform: translateX(12px);
}

@media (max-width: 768px) {
  .portfolio-section {
    padding: 80px 0;
  }

  .portfolio-heading {
    margin-bottom: 36px;
  }

  .portfolio-heading h2 {
    font-size: 2rem;
  }

  .portfolio-heading p {
    font-size: 16px;
  }

  .portfolio-project {
    grid-template-columns: 1fr;
  }

  .portfolio-image,
  .portfolio-image img {
    min-height: 300px;
  }

  .portfolio-details {
    padding: 32px;
  }
}

@media (max-width: 480px) {
  .portfolio-details {
    padding: 26px 22px;
  }

  .portfolio-details h3 {
    font-size: 1.65rem;
  }

  .portfolio-image,
  .portfolio-image img {
    min-height: 240px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .portfolio-fade-enter-active,
  .portfolio-fade-leave-active,
  .portfolio-arrow,
  .portfolio-progress span {
    transition: none;
  }
}
</style>
