<script setup>
import { ref, reactive, computed, nextTick } from "vue";
import { useDiagnostico } from "../composables/useDiagnostico";

// =====================================================
// COMPOSABLE
// =====================================================
const { loading, guardar } = useDiagnostico();

// =====================================================
// ESTADO GENERAL DE LA ENCUESTA
// =====================================================
function createInitialSurvey() {
  return {
    metadata: {
      estado: "BORRADOR",
      fechaRegistro: new Date().toISOString(),
      version: "1.0"
    },

    formulario: {
      empresa: "",
      contacto: "",
      cargo: "",
      telefono: "",
      correo: "",
      ciudad: "",
      sucursales: null,
      tipoEmpresa: "",
      objetivo: "",
      fechaVisita: "",
      horaVisita: ""
    },

    nivelServicio: {
      nivelServicio: ""
    },

    requisitosTamanio: {
      detallePequena: "",
      detalleMediana: "",
      detalleGrande: ""
    }
  };
}
const encuesta = reactive(
  createInitialSurvey()
);
function resetSurvey() {

  Object.assign(
    encuesta,
    createInitialSurvey()
  );

  currentPage.value = 0;

  finished.value = false;

}

// =====================================================
// CONFIGURACIÓN DE PÁGINAS / LIBRO
// =====================================================
const pages = [
  {
    key: "formulario",
    title: "Formulario",
    icon: "bi bi-file-earmark-text",
    description: "Información general de la empresa.",
    sections: [
      {
        id: "empresa",
        title: "Información General",
        icon: "bi bi-building",
        questions: [
          { id: "empresa", label: "Empresa", type: "text", required: true, placeholder: "Nombre de la empresa" },
          { id: "contacto", label: "Contacto", type: "text", required: true, placeholder: "Nombre de contacto" },
          { id: "cargo", label: "Cargo", type: "text", placeholder: "Ej. Gerente de TI" },
          { id: "telefono", label: "Teléfono", type: "tel" },
          { id: "correo", label: "Correo", type: "email" },
          { id: "ciudad", label: "Ciudad", type: "text" },
          { id: "sucursales", label: "No. Sucursales", type: "number" },
          {
            id: "tipoEmpresa",
            label: "Tipo de Empresa",
            type: "select",
            options: ["Comercial", "Industrial", "Servicios", "Gobierno", "Educación", "Salud", "Otro"]
          },
          { id: "objetivo", label: "Objetivo Principal", type: "textarea" },
          { id: "fechaVisita", label: "Fecha de Visita", type: "date" },
          { id: "horaVisita", label: "Hora", type: "time" }
        ]
      }
    ]
  },
  {
    key: "nivelServicio",
    title: "Nivel de Servicio",
    icon: "bi bi-clipboard2-check",
    description: "Selección del nivel de servicio requerido.",
    sections: [
      {
        id: "servicio",
        title: "Nivel de Servicio Requerido",
        icon: "bi bi-award",
        questions: [
          {
            id: "nivelServicio",
            label: "Nivel de Servicio Requerido",
            type: "cards",
            required: true,
            options: [
              { value: "economico", title: "Económico", description: "Cumple la necesidad principal con algunas limitaciones." },
              { value: "adecuado", title: "Adecuado (Recomendado)", description: "Equilibrio entre costo, rendimiento y crecimiento." },
              { value: "profesional", title: "Profesional", description: "Máximo rendimiento, escalable y con mínimas limitaciones." },
              { value: "asesoria", title: "Necesito asesoría", description: "Un consultor de HENCOM recomendará la mejor solución." }
            ]
          }
        ]
      }
    ]
  },
  {
    key: "requisitosTamanio",
    title: "Requerimientos",
    icon: "bi bi-bar-chart",
    description: "Especifica los requerimientos según el tamaño de tu empresa.",
    sections: [
      {
        id: "requisitosPequena",
        type: "company-size",
        title: "Requerimientos por Tamaño de Empresa",
        icon: "bi bi-diagram-3",
        companies: [
          {
            size: "pequena",
            sizeLabel: "Pequeña Empresa",
            icon: "bi bi-shop",
            description: "Hasta 50 empleados",
            questionId: "detallePequena",
            label: "Requerimientos de Infraestructura"
          },
          {
            size: "mediana",
            sizeLabel: "Mediana Empresa",
            icon: "bi bi-buildings",
            description: "51 - 250 empleados",
            questionId: "detalleMediana",
            label: "Requerimientos de Infraestructura"
          },
          {
            size: "grande",
            sizeLabel: "Gran Empresa",
            icon: "bi bi-building-fill",
            description: "Más de 250 empleados",
            questionId: "detalleGrande",
            label: "Requerimientos de Infraestructura"
          }
        ]
      }
    ]
  }
];

// =====================================================
// NAVEGACIÓN Y COMPUTED
// =====================================================
const currentPage = ref(0);
const sending = ref(false);
const finished = ref(false);

const currentBookPage = computed(() => pages[currentPage.value]);
const currentSection = computed(() => pages[currentPage.value]);
const currentSections = computed(() => currentBookPage.value.sections || []);

const progress = computed(() => Math.round(((currentPage.value + 1) / pages.length) * 100));
const isFirstPage = computed(() => currentPage.value === 0);
const isLastPage = computed(() => currentPage.value === pages.length - 1);

function getModel(pageKey) {
  return encuesta[pageKey] || {};
}

function scrollToBook() {
  // Usar nextTick para asegurar que el DOM está actualizado
  nextTick(() => {
    const bookContainer = document.querySelector('.book-container')
    if (bookContainer) {
      bookContainer.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  })
}

function nextPage() {
  if (!isLastPage.value) {
    currentPage.value++
    scrollToBook()
  }
}

function previousPage() {
  if (!isFirstPage.value) {
    currentPage.value--
    scrollToBook()
  }
}

function goToPage(index) {
  if (index >= 0 && index < pages.length) {
    currentPage.value = index
    scrollToBook()
  }
}

// =====================================================
// VALIDACIÓN
// =====================================================
function validatePayload(payload) {
  const errors = [];

  // 1. Validar metadata básica
  if (!payload.metadata) {
    errors.push("Falta la información obligatoria de metadata.");
  }

  // 1b. Validar información obligatoria de la empresa (ubicada en formulario)
  if (!payload.formulario || !payload.formulario.empresa) {
    errors.push("Falta la información obligatoria de la empresa.");
  }

  // Resto de tus validaciones...
  if (!payload.nivelServicio || !payload.nivelServicio.nivelServicio) {
    errors.push("Debes seleccionar un nivel de servicio.");
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}
function getPlaceholder(question) {
  // Si la pregunta ya define un placeholder explícito, usa ese
  if (question.placeholder) {
    return question.placeholder;
  }

  // Fallbacks orientados a Grandes Empresas / Enterprise
  switch (question.type) {
    case 'email':
      return 'ej. contacto.corporativo@empresa-global.com';
    case 'tel':
      return 'ej. +52 (55) 0000-0000 Ext. 104';
    case 'number':
      return 'ej. 500 (Número de colaboradores/sedes)';
    case 'textarea':
      return 'Describa los requerimientos de infraestructura, nivel de SLA (99.9%) o integraciones empresariales requeridas...';
    case 'text':
    default:
      return 'ej. Corporativo Global / Razón Social S.A. de C.V.';
  }
}
// =====================================================
// PAYLOAD Y ENVÍO
// =====================================================
function buildPayload() {
  return {
    metadata: encuesta.metadata,
    formulario: encuesta.formulario,
    nivelServicio: encuesta.nivelServicio,
    requisitosTamanio: encuesta.requisitosTamanio
  };
}

async function submitSurvey() {
  const payload = buildPayload();
  
  // Capa de validación ejecutada antes del envío
  const validation = validatePayload(payload);

  if (!validation.isValid) {
    console.warn("[ENCUESTA] Validación fallida:", validation.errors);
    // Puedes reemplazar este alert por tu sistema de notificaciones o toat
    alert("Por favor corrige los siguientes errores:\n\n" + validation.errors.join("\n"));
    return;
  }

  sending.value = true;

  try {
    console.log("[ENCUESTA] Payload válido enviado:", payload);
    await guardar(payload);
    finished.value = true;
      // Esperar un momento para que el usuario vea el éxito
  setTimeout(() => {

    resetSurvey();

  }, 1000);
  } catch (error) {
    console.error("Error al guardar la encuesta:", error);
    alert("Ocurrió un error al enviar la encuesta. Inténtalo nuevamente.");
  } finally {
    sending.value = false;
  }
}
</script>

<template>
  <div class="survey-book">
    <div class="book-background"></div>

    <div class="book-container">
      <!-- HEADER -->
      <header class="book-header">
        <div class="header-left">
          <div class="company-logo">
            <i class="bi bi-building"></i>
          </div>
          <div>
            <h1>HENCOM</h1>
            <small>Encuesta Empresarial</small>
          </div>
        </div>
        <div class="header-center">
          <h2>{{ currentSection.title }}</h2>
        </div>
        <div class="header-right">
          <div class="page-indicator">
            Página <strong>{{ currentPage + 1 }}</strong> / <strong>{{ pages.length }}</strong>
          </div>
        </div>
      </header>

      <!-- PROGRESS -->
      <div class="progress-wrapper">
        <div class="progress">
          <div class="progress-bar" :style="{ width: progress + '%' }"></div>
        </div>
        <small>{{ progress }}% completado</small>
      </div>

      <!-- BODY -->
      <div class="book-body">
        <!-- SIDEBAR -->
        <aside class="book-sidebar">
          <ul>
            <li
              v-for="(page, index) in pages"
              :key="page.key"
              :class="{ active: index === currentPage, completed: index < currentPage }"
              @click="goToPage(index)"
            >
              <span class="step-number">{{ index + 1 }}</span>
              <span>{{ page.title }}</span>
            </li>
          </ul>
        </aside>
<!-- PAGE MAIN -->
<main class="book-page">
  <Transition name="page" mode="out-in">
    <section class="page-body" :key="currentPage">
      <div class="page-content">
        <div class="page-title">
<div class="page-icon">
  <!-- Con valor por defecto usando FontAwesome (ej. fa-solid fa-file-lines) -->
  <i :class="currentBookPage?.icon || 'fa-solid fa-file-lines'"></i>
</div>
          <div>
            <h3>{{ currentBookPage.title }}</h3>
            <p>{{ currentBookPage.description }}</p>
          </div>
        </div>

        <div class="page-form">
          <section class="survey-section" :id="`section-${currentBookPage.key}`">
            
            <!-- SECCIONES DE FORMULARIO DINÁMICO -->
            <template v-for="section in currentSections" :key="section.id">
              <!-- TARJETAS DE TAMAÑO DE EMPRESA -->
              <template v-if="section.type === 'company-size'">
                <div class="company-size-section">
                  <div class="section-header mb-4">
                    <i :class="section.icon" class="section-header-icon"></i>
                    <div>
                      <h4 class="section-title-main">{{ section.title }}</h4>
                      <p class="section-subtitle">Seleccione e indique los requerimientos según el tamaño de su empresa</p>
                    </div>
                  </div>

                  <div class="company-cards-grid">
                    <div
                      v-for="company in section.companies"
                      :key="company.size"
                      class="company-card"
                    >
                      <!-- Header de Tarjeta -->
                      <div class="company-card-header">
                        <div class="company-icon-wrapper">
                          <i :class="company.icon"></i>
                        </div>
                        <div class="company-info">
                          <h5 class="company-size-label">{{ company.sizeLabel }}</h5>
                          <p class="company-description">{{ company.description }}</p>
                        </div>
                      </div>

                      <!-- Body de Tarjeta -->
                      <div class="company-card-body">
                        <div class="form-group">
                          <label class="form-label">{{ company.label }}</label>
                          <textarea
                            v-model="getModel(currentBookPage.key)[company.questionId]"
                            class="form-control"
                            rows="5"
                            :placeholder="`Describa los requerimientos de infraestructura específicos para una ${company.sizeLabel}...`"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </template>

              <!-- FORMULARIO ESTÁNDAR (NO ES COMPANY-SIZE) -->
              <template v-else>
                <div class="card-box section-card mb-4">
                  <div class="card-title">
                    <i :class="section.icon"></i>
                    <span>{{ section.title }}</span>
                  </div>

                  <div v-for="question in section.questions" :key="question.id" class="form-group">
                    <label class="form-label">
                      {{ question.label }}
                      <span v-if="question.required">*</span>
                    </label>

                    <!-- TEXT -->
                    <input
                      v-if="question.type === 'text'"
                      v-model="getModel(currentBookPage.key)[question.id]"
                      type="text"
                      class="form-control"
                      :placeholder="getPlaceholder(question)"
                    />

                    <!-- EMAIL -->
                    <input
                      v-else-if="question.type === 'email'"
                      v-model="getModel(currentBookPage.key)[question.id]"
                      type="email"
                      class="form-control"
                      :placeholder="getPlaceholder(question)"
                    />

                    <!-- TEL -->
                    <input
                      v-else-if="question.type === 'tel'"
                      v-model="getModel(currentBookPage.key)[question.id]"
                      type="tel"
                      class="form-control"
                      :placeholder="getPlaceholder(question)"
                    />

                    <!-- NUMBER -->
                    <input
                      v-else-if="question.type === 'number'"
                      v-model.number="getModel(currentBookPage.key)[question.id]"
                      type="number"
                      class="form-control"
                      :placeholder="getPlaceholder(question)"
                    />

                    <!-- DATE -->
                    <input
                      v-else-if="question.type === 'date'"
                      v-model="getModel(currentBookPage.key)[question.id]"
                      type="date"
                      class="form-control"
                    />

                    <!-- TIME -->
                    <input
                      v-else-if="question.type === 'time'"
                      v-model="getModel(currentBookPage.key)[question.id]"
                      type="time"
                      class="form-control"
                    />

                    <!-- TEXTAREA -->
                    <textarea
                      v-else-if="question.type === 'textarea'"
                      v-model="getModel(currentBookPage.key)[question.id]"
                      class="form-control"
                      rows="4"
                      :placeholder="getPlaceholder(question)"
                    ></textarea>

                    <!-- SELECT -->
                    <select
                      v-else-if="question.type === 'select'"
                      v-model="getModel(currentBookPage.key)[question.id]"
                      class="form-select"
                    >
                      <option value="">Seleccione opción corporativa...</option>
                      <option v-for="option in question.options" :key="option" :value="option">
                        {{ option }}
                      </option>
                    </select>

                    <!-- CARDS (Nivel de Servicio) -->
                    <div v-else-if="question.type === 'cards'" class="cards-grid">
                      <div
                        v-for="opt in question.options"
                        :key="opt.value"
                        class="radio-card"
                        :class="{ selected: getModel(currentBookPage.key)[question.id] === opt.value }"
                        @click="getModel(currentBookPage.key)[question.id] = opt.value"
                      >
                        <input
                          type="radio"
                          :name="question.id"
                          :value="opt.value"
                          v-model="getModel(currentBookPage.key)[question.id]"
                        />
                        <div>
                          <strong>{{ opt.title }}</strong>
                          <p class="mb-0 text-muted">{{ opt.description }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </template>

            <!-- VISTA RESUMEN -->
            <!-- <div v-if="currentBookPage.key === 'resumen'" class="summary-container">
              <div class="summary-header">
                <i class="bi bi-check-circle-fill"></i>
                <div>
                  <h3>Resumen de la Encuesta</h3>
                  <p>Revise la información antes de enviarla.</p>
                </div>
              </div>
              <div class="summary-body">
                <pre>{{ buildPayload() }}</pre>
              </div>
            </div> -->

          </section>
        </div>
      </div>
    </section>
  </Transition>
</main>
      </div>

      <!-- FOOTER -->
      <footer class="book-footer">
        <div class="footer-left">
          <button class="btn btn-outline-primary" @click="previousPage" :disabled="isFirstPage">
            <i class="bi bi-arrow-left"></i> Anterior
          </button>
        </div>
        <div class="footer-center">
          <span>Página {{ currentPage + 1 }} de {{ pages.length }}</span>
        </div>
        <div class="footer-right">
          <button v-if="!isLastPage" class="btn btn-primary" @click="nextPage">
            Siguiente <i class="bi bi-arrow-right"></i>
          </button>
          <button v-else class="btn btn-success" @click="submitSurvey" :disabled="loading || sending">
            <span v-if="loading || sending" class="spinner-border spinner-border-sm me-2"></span>
            Enviar Encuesta
          </button>
        </div>
      </footer>
    </div>
  </div>
</template>
<style scoped>
/* ==========================================================
   VARIABLES Y CONTENEDOR PRINCIPAL (SCOPE ISOLATED)
========================================================== */
.survey-book {
  /* Variables locales para no afectar :root global */
  --sb-primary: #2563eb;
  --sb-primary-hover: #1d4ed8;
  --sb-primary-glow: rgba(37, 99, 235, 0.2);
  
  --sb-bg-app: #f1f5f9;
  --sb-bg-card: #ffffff;
  --sb-bg-card-subtle: #f8fafc;
  --sb-bg-sidebar: #0f172a;
  --sb-bg-input: #ffffff;
  
  --sb-border: #e2e8f0;
  --sb-border-strong: #cbd5e1;
  --sb-border-active: #2563eb;
  
  --sb-text-main: #0f172a;
  --sb-text-muted: #475569;
  --sb-text-dim: #64748b;
  
  --sb-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.05);
  --sb-shadow-md: 0 4px 12px rgba(0, 0, 0, 0.06);
  --sb-shadow-lg: 0 20px 40px rgba(15, 23, 42, 0.08);
  --sb-shadow-glow: 0 0 20px var(--sb-primary-glow);

  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  padding: 40px 20px;
  color: var(--sb-text-main);
  background-color: var(--sb-bg-app);
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}

/* RESET SOLO DENTRO DE LA ENCUESTA */
.survey-book *,
.survey-book *::before,
.survey-book *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ==========================================================
   FONDO AMBIENTAL AISLADO
========================================================== */
.survey-book .book-background {
  position: absolute;
  inset: 0;
  z-index: 0;
  background: var(--sb-bg-app);
  pointer-events: none;
}

.survey-book .book-background::before {
  content: "";
  position: absolute;
  width: 700px;
  height: 700px;
  border-radius: 50%;
  top: -200px;
  right: -100px;
  background: radial-gradient(circle, rgba(37, 99, 235, 0.08), transparent 70%);
  animation: floatAmbient 12s infinite alternate ease-in-out;
}

/* ==========================================================
   ESTRUCTURA DEL LIBRO DE ENCUESTA
========================================================== */
.survey-book .book-container {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1400px;
  margin: auto;
  background: var(--sb-bg-card);
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid var(--sb-border);
  box-shadow: var(--sb-shadow-lg);
  animation: containerAppear 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.survey-book .book-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 32px;
  background: #ffffff;
  border-bottom: 1px solid var(--sb-border);
}

.survey-book .header-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.survey-book .company-logo {
  width: 50px;
  height: 50px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  color: #ffffff !important;
  font-size: 24px;
  box-shadow: var(--sb-shadow-glow);
}

.survey-book .header-left h1 {
  font-size: 22px;
  font-weight: 800;
  color: var(--sb-text-main) !important;
  line-height: 1.2;
}

.survey-book .header-left small {
  color: var(--sb-text-muted) !important;
  font-size: 13px;
  display: block;
  margin-top: 2px;
}

.survey-book .header-center h2 {
  font-size: 20px;
  font-weight: 700;
  color: var(--sb-text-main) !important;
}

.survey-book .page-indicator {
  background: var(--sb-bg-card-subtle);
  padding: 8px 16px;
  border-radius: 12px;
  border: 1px solid var(--sb-border);
  color: var(--sb-text-muted) !important;
  font-size: 14px;
  font-weight: 600;
}

.survey-book .page-indicator strong {
  color: var(--sb-primary) !important;
}

/* ==========================================================
   BARRA DE PROGRESO
========================================================== */
.survey-book .progress-wrapper {
  padding: 14px 32px;
  background: #f8fafc;
  border-bottom: 1px solid var(--sb-border);
}

.survey-book .progress {
  height: 8px;
  background: #e2e8f0;
  border-radius: 20px;
  overflow: hidden;
}

.survey-book .progress-bar {
  height: 100%;
  border-radius: 20px;
  background: linear-gradient(90deg, #2563eb, #0284c7, #10b981);
  background-size: 200% 100%;
  animation: gradientMove 3s ease infinite;
  transition: width 0.4s ease;
}

.survey-book .progress-wrapper small {
  display: block;
  margin-top: 6px;
  color: var(--sb-text-muted) !important;
  font-weight: 600;
  font-size: 12px;
}

/* ==========================================================
   LAYOUT Y SIDEBAR
========================================================== */
.survey-book .book-body {
  display: grid;
  grid-template-columns: 280px 1fr;
  min-height: auto;
  height: auto;
}

.survey-book .book-sidebar {
  background: var(--sb-bg-sidebar);
  border-right: 1px solid var(--sb-border);
  padding: 24px 16px;
}

.survey-book .book-sidebar ul {
  list-style: none;
}

.survey-book .book-sidebar li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  margin-bottom: 8px;
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.25s ease;
  color: #94a3b8 !important;
  font-weight: 600;
  font-size: 14px;
  border: 1px solid transparent;
}

.survey-book .book-sidebar li:hover {
  background: rgba(255, 255, 255, 0.06);
  color: #ffffff !important;
}

.survey-book .book-sidebar li.active {
  background: rgba(37, 99, 235, 0.2);
  color: #ffffff !important;
  border-color: rgba(59, 130, 246, 0.4);
  box-shadow: inset 4px 0 0 #3b82f6;
}

.survey-book .step-number {
  width: 28px;
  height: 28px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  color: #cbd5e1;
  font-size: 12px;
  font-weight: 700;
}

.survey-book .book-sidebar li.active .step-number {
  background: #3b82f6;
  color: #ffffff !important;
}

/* ==========================================================
   PÁGINA PRINCIPAL Y SECCIÓN BLANCA
========================================================== */
.survey-book .book-page {
  padding: 40px;
  background: var(--sb-bg-card);
  overflow-y: auto;
  max-height: calc(100vh - 280px);
}

.survey-book .page-title {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 32px;
  padding-bottom: 20px;
  border-bottom: 2px solid var(--sb-bg-card-subtle);
}

.survey-book .page-icon {
  width: 60px;
  height: 60px;
  min-width: 60px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Fondo cian traslúcido para modo oscuro */
  background: rgba(56, 189, 248, 0.12);
  /* Borde brillante translúcido */
  border: 1px solid rgba(56, 189, 248, 0.25);
  /* Color del ícono cian brillante */
  color: #38bdf8 !important;
  font-size: 28px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

/* Efecto hover suave */
.survey-book .page-icon:hover {
  background: rgba(56, 189, 248, 0.2);
  border-color: rgba(56, 189, 248, 0.4);
  transform: translateY(-2px);
}

.survey-book .page-title h3 {
  font-size: 26px;
  font-weight: 800;
  color: var(--sb-text-main) !important;
  letter-spacing: -0.5px;
}

.survey-book .page-title p {
  color: var(--sb-text-muted) !important;
  font-size: 15px;
  margin-top: 4px;
}

/* ==========================================================
   TARJETAS Y INPUTS AISLADOS
========================================================== */
.survey-book .card-box {
  background: #ffffff;
  border-radius: 18px;
  padding: 28px;
  border: 1px solid var(--sb-border);
  box-shadow: var(--sb-shadow-sm);
  margin-bottom: 24px;
  transition: all 0.25s ease;
}

.survey-book .card-box:hover {
  box-shadow: var(--sb-shadow-md);
  border-color: var(--sb-border-strong);
}

.survey-book .card-title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 22px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--sb-primary) !important;
}

.survey-book .form-group {
  margin-bottom: 22px;
}

.survey-book .form-label {
  display: block;
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 13px;
  color: var(--sb-text-main) !important;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.survey-book .form-label span {
  color: #ef4444 !important;
}

/* INPUTS DENTRO DEL CONTENEDOR */
.survey-book .form-control,
.survey-book .form-select {
  width: 100%;
  height: 50px;
  padding: 0 18px;
  border-radius: 12px;
  border: 1px solid var(--sb-border-strong);
  background: var(--sb-bg-input) !important;
  color: var(--sb-text-main) !important;
  font-size: 15px;
  font-weight: 500;
  outline: none;
  transition: all 0.25s ease;
}

.survey-book .form-control::placeholder {
  color: #94a3b8 !important;
}

.survey-book textarea.form-control {
  height: auto;
  padding: 14px 18px;
}

.survey-book .form-control:focus,
.survey-book .form-select:focus {
  border-color: var(--sb-primary);
  box-shadow: 0 0 0 4px var(--sb-primary-glow);
  background: #ffffff !important;
}

.survey-book .form-select option {
  background-color: #ffffff !important;
  color: var(--sb-text-main) !important;
}

/* ==========================================================
   CARDS DE OPCIONES (RADIO-CARD)
========================================================== */
.survey-book .cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
}

.survey-book .radio-card {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 20px;
  border-radius: 16px;
  border: 1px solid var(--sb-border);
  background: var(--sb-bg-card-subtle);
  cursor: pointer;
  transition: all 0.25s ease;
}

.survey-book .radio-card:hover {
  border-color: var(--sb-primary);
  background: #ffffff;
  transform: translateY(-2px);
  box-shadow: var(--sb-shadow-md);
}

.survey-book .radio-card.selected {
  border-color: var(--sb-primary);
  background: rgba(37, 99, 235, 0.04);
  box-shadow: 0 0 0 2px var(--sb-primary), var(--sb-shadow-sm);
}

.survey-book .radio-card strong {
  color: var(--sb-text-main) !important;
  font-size: 15px;
  display: block;
  margin-bottom: 4px;
}

.survey-book .radio-card p {
  color: var(--sb-text-muted) !important;
  font-size: 13px;
  line-height: 1.5;
}

/* ==========================================================
   COMPANY SIZE SECTION (TARJETAS DE TAMAÑO EMPRESA)
========================================================== */
.survey-book .company-size-section {
  width: 100%;
}

.survey-book .section-header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding-bottom: 20px;
  border-bottom: 2px solid var(--sb-bg-card-subtle);
}

.survey-book .section-header-icon {
  width: 50px;
  height: 50px;
  min-width: 50px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(56, 189, 248, 0.12);
  border: 1px solid rgba(56, 189, 248, 0.25);
  color: #38bdf8 !important;
  font-size: 24px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.survey-book .section-title-main {
  font-size: 20px;
  font-weight: 800;
  color: var(--sb-text-main) !important;
  margin: 0;
}

.survey-book .section-subtitle {
  font-size: 14px;
  color: var(--sb-text-muted) !important;
  margin: 4px 0 0 0;
}

/* GRID DE TARJETAS */
.survey-book .company-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  margin-top: 32px;
}

.survey-book .company-card {
  background: #ffffff;
  border-radius: 18px;
  border: 1px solid var(--sb-border);
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: var(--sb-shadow-sm);
  display: flex;
  flex-direction: column;
}

.survey-book .company-card:hover {
  border-color: var(--sb-primary);
  box-shadow: var(--sb-shadow-md);
  transform: translateY(-4px);
}

.survey-book .company-card-header {
  padding: 24px;
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
  border-bottom: 1px solid var(--sb-border);
  display: flex;
  align-items: center;
  gap: 16px;
}

.survey-book .company-icon-wrapper {
  width: 50px;
  height: 50px;
  min-width: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #2563eb, #0284c7);
  color: #ffffff !important;
  font-size: 24px;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
}

.survey-book .company-info {
  flex: 1;
}

.survey-book .company-size-label {
  font-size: 16px;
  font-weight: 800;
  color: var(--sb-text-main) !important;
  margin: 0 0 4px 0;
}

.survey-book .company-description {
  font-size: 13px;
  color: var(--sb-text-muted) !important;
  margin: 0;
}

/* CARD BODY */
.survey-book .company-card-body {
  padding: 24px;
  flex: 1;
}

.survey-book .company-card-body .form-group {
  margin-bottom: 0;
}

.survey-book .company-card-body .form-label {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 10px;
}

.survey-book .company-card-body textarea.form-control {
  resize: vertical;
  min-height: 140px;
  border: 1px solid var(--sb-border);
  border-radius: 10px;
  padding: 12px 16px;
  font-size: 14px;
  line-height: 1.6;
}

.survey-book .company-card-body textarea.form-control:focus {
  border-color: var(--sb-primary);
  box-shadow: 0 0 0 3px var(--sb-primary-glow);
}

/* ==========================================================
   RESUMEN FINAL Y FOOTER
========================================================== */
.survey-book .summary-body {
  background: #0f172a;
  border-radius: 16px;
  padding: 24px;
  border: 1px solid var(--sb-border);
}

.survey-book .summary-body pre {
  color: #38bdf8 !important;
  font-family: monospace;
  font-size: 13px;
}

.survey-book .book-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 32px;
  background: #ffffff;
  border-top: 1px solid var(--sb-border);
}

.survey-book .btn {
  padding: 12px 26px;
  border-radius: 12px;
  border: none;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.25s ease;
}

.survey-book .btn-primary {
  background: var(--sb-primary);
  color: #ffffff !important;
  box-shadow: var(--sb-shadow-glow);
}

.survey-book .btn-primary:hover:not(:disabled) {
  background: var(--sb-primary-hover);
  transform: translateY(-1px);
}

.survey-book .btn-outline-primary {
  background: transparent;
  border: 1px solid var(--sb-border-strong);
  color: var(--sb-text-muted) !important;
}

.survey-book .btn-outline-primary:hover:not(:disabled) {
  border-color: var(--sb-primary);
  color: var(--sb-primary) !important;
  background: rgba(37, 99, 235, 0.05);
}

.survey-book .btn-success {
  background: #10b981;
  color: #ffffff !important;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2);
}

.survey-book .btn-success:hover:not(:disabled) {
  background: #059669;
}

.survey-book .btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* ==========================================================
   ANIMACIONES LOCALES
========================================================== */
.survey-book .page-enter-active {
  animation: pageInLight 0.35s ease;
}

.survey-book .page-leave-active {
  animation: pageOutLight 0.2s ease forwards;
}

@keyframes pageInLight {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes pageOutLight {
  to { opacity: 0; transform: translateY(-8px); }
}

@keyframes containerAppear {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes floatAmbient {
  from { transform: translateY(0); }
  to { transform: translateY(40px); }
}

@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* RESPONSIVE DENTRO DEL CONTENEDOR */
@media (max-width: 992px) {
  .survey-book .book-body { 
    grid-template-columns: 1fr;
  }
  .survey-book .book-sidebar { 
    border-right: none; 
    border-bottom: 1px solid var(--sb-border); 
  }
  .survey-book .book-page {
    max-height: none;
    overflow-y: visible;
  }
  .survey-book .book-header, 
  .survey-book .book-footer { 
    flex-direction: column; 
    gap: 14px; 
    text-align: center; 
  }
}
</style>