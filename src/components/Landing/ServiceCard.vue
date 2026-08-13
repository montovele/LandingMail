<script setup>
import { computed } from "vue";
import { useServicesTabs } from "../../composables/useServicesTabs";

const { setActiveTab } = useServicesTabs();

const handleNavigate = (href) => {
  if (href === "#contacto") {
    setActiveTab("contacto");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};

const props = defineProps({
  icon: {
    type: String,
    default: "layers", // nombre del icono (sin prefijo)
  },
  // Si usas SVG, pasa el path aquí
  iconSvg: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "#0ea5e9",
  },
  buttonText: {
    type: String,
    default: "Conocer más",
  },
  href: {
    type: String,
    default: "#contacto",
  },
  badge: {
    type: String,
    default: "",
  },
  delay: {
    type: Number,
    default: 0,
  },
  hover: {
    type: Boolean,
    default: true,
  },
});

const cardStyle = computed(() => ({
  "--card-color": props.color,
  "--card-color-rgb": hexToRgb(props.color),
}));

// Convierte hex a rgb para usar en rgba()
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : "14, 165, 233";
}
</script>

<template>
  <div
    class="service-card"
    :class="{ 'service-card--hover': hover }"
    :style="cardStyle"
    data-aos="fade-up"
    :data-aos-delay="delay"
  >
    <!-- Badge -->
    <div v-if="badge" class="service-badge">
      {{ badge }}
    </div>

    <!-- Icono -->
    <div class="service-icon">
      <!-- Opción 1: SVG (recomendado - más control y no depende de fuentes) -->
      <svg
        v-if="iconSvg"
        class="icon-svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        v-html="iconSvg"
      ></svg>

      <!-- Opción 2: Icon font (Bootstrap Icons / Font Awesome / custom) -->
      <i v-else :class="['icon', icon]"></i>
    </div>

    <!-- Contenido -->
    <div class="service-content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>

    <!-- Footer -->
    <div class="service-footer">
      <a
        :href="href"
        class="service-link"
        @click.prevent="handleNavigate(href)"
      >
        <span>{{ buttonText }}</span>
        <span class="arrow">→</span>
      </a>
    </div>
  </div>
</template>

<style scoped>
.service-card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #1e293b;
  border-radius: 20px;
  padding: 2rem;
  height: 100%;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.35);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

/* Barra superior de color */
.service-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: var(--card-color);
  transform: scaleX(0.3);
  transform-origin: left;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Efecto de brillo al hover */
.service-card::after {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(var(--card-color-rgb), 0.08) 0%,
    transparent 60%
  );
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
}

/* ========== HOVER ========== */
.service-card--hover:hover {
  transform: translateY(-10px);
  border-color: rgba(var(--card-color-rgb), 0.35);
  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.45),
    0 0 0 1px rgba(var(--card-color-rgb), 0.1);
}

.service-card--hover:hover::before {
  transform: scaleX(1);
}

.service-card--hover:hover::after {
  opacity: 1;
}

/* ========== BADGE ========== */
.service-badge {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  background: rgba(var(--card-color-rgb), 0.15);
  color: var(--card-color);
  padding: 0.3rem 0.85rem;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  border: 1px solid rgba(var(--card-color-rgb), 0.25);
  animation: badgePulse 2.5s ease-in-out infinite;
}

@keyframes badgePulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

/* ========== ICONO ========== */
.service-icon {
  width: 72px;
  height: 72px;
  border-radius: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(var(--card-color-rgb), 0.12);
  color: var(--card-color);
  margin-bottom: 1.75rem;
  border: 1px solid rgba(var(--card-color-rgb), 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

/* Glow del icono */
.service-icon::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at center,
    rgba(var(--card-color-rgb), 0.25) 0%,
    transparent 70%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
}

.service-card--hover:hover .service-icon {
  transform: scale(1.08) rotate(-3deg);
  background: rgba(var(--card-color-rgb), 0.2);
  box-shadow: 0 0 24px rgba(var(--card-color-rgb), 0.35);
}

.service-card--hover:hover .service-icon::before {
  opacity: 1;
}

/* Estilos del icono (font o svg) */
.service-icon .icon,
.service-icon .icon-svg {
  font-size: 1.9rem;
  width: 1.9rem;
  height: 1.9rem;
  transition: transform 0.4s ease;
  z-index: 1;
}

.service-card--hover:hover .service-icon .icon,
.service-card--hover:hover .service-icon .icon-svg {
  transform: scale(1.1);
}

/* ========== CONTENIDO ========== */
.service-content {
  flex: 1;
}

.service-content h3 {
  font-size: 1.4rem;
  font-weight: 800;
  color: #f8fafc;
  margin: 0 0 0.9rem;
  letter-spacing: -0.02em;
  transition: color 0.3s ease;
}

.service-card--hover:hover .service-content h3 {
  color: #ffffff;
}

.service-content p {
  color: #94a3b8;
  line-height: 1.75;
  margin: 0 0 1.75rem;
  font-size: 0.95rem;
}

/* ========== FOOTER / LINK ========== */
.service-footer {
  margin-top: auto;
}

.service-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--card-color);
  font-weight: 700;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  position: relative;
}

.service-link::after {
  content: "";
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--card-color);
  transition: width 0.35s ease;
}

.service-link:hover {
  gap: 0.75rem;
}

.service-link:hover::after {
  width: 100%;
}

.service-link .arrow {
  display: inline-block;
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-link:hover .arrow {
  transform: translateX(5px);
}

/* ========== RESPONSIVE ========== */
@media (max-width: 991px) {
  .service-card {
    padding: 1.75rem;
  }
}

@media (max-width: 576px) {
  .service-card {
    padding: 1.5rem;
  }

  .service-content h3 {
    font-size: 1.25rem;
  }

  .service-icon {
    width: 64px;
    height: 64px;
  }
}
</style>