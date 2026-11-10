<script setup>
import {
  ref,
  computed,
  onMounted,
  onBeforeUnmount
} from 'vue'

import { useServicesTabs } from '../composables/useServicesTabs.js'

/* ==========================================================================
 * CONFIGURACIÓN DE EMPRESA
 * ========================================================================== */
const company = {
  name: 'HENCOM',
  shortName: 'HENCOM',
  logo: '/images/hencom.PNG',
  showLogo: true,
  hideTextWhenLogo: true
}

/* ==========================================================================
 * COMPUTED
 * ========================================================================== */
const showCompanyText = computed(() => {
  if (company.showLogo && company.hideTextWhenLogo) {
    return false
  }
  return true
})

/* ==========================================================================
 * NAVEGACIÓN Y PESTAÑAS
 * ========================================================================== */
const { activeTab, setActiveTab } = useServicesTabs()

const mobileMenuOpen = ref(false)
const openDropdown = ref(null)
const navbarRef = ref(null)

const menuItems = [
  {
    id: 'home',
    label: 'Inicio',
    href: '#home-section'
  },
  {
    id: 'services',
    label: 'Servicios',
    children: [
      { id: 'consultoria', label: 'Consultoría' },
      { id: 'soluciones', label: 'Soluciones' },
      { id: 'nosotros', label: 'Nosotros' }
    ]
  }
]

/* ==========================================================================
 * MÉTODOS DE NAVEGACIÓN
 * ========================================================================== */
const scrollTo = (selector) => {
  if (!selector) return
  // No scroll si es una ruta de página
  if (selector === '#contacto') return
  
  const element = document.querySelector(selector)
  if (!element) return

  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

const navigate = (href) => {
  if (href === '#home-section') {
    setActiveTab('home')
    closeAllMenus()
    scrollTo(href)
  } else if (href === '#contacto') {
    setActiveTab('contacto')
    closeAllMenus()
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  } else {
    closeAllMenus()
    scrollTo(href)
  }
}

const goToService = (serviceId) => {
  if (activeTab.value !== serviceId) {
    setActiveTab(serviceId)
  }
  closeAllMenus()
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

/* ==========================================================================
 * CONTROL DE DESPLEGABLES Y MENÚ MÓVIL
 * ========================================================================== */
const toggleDropdown = (dropdownId) => {
  openDropdown.value = openDropdown.value === dropdownId ? null : dropdownId
}

const closeAllMenus = () => {
  openDropdown.value = null
  mobileMenuOpen.value = false
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

/* ==========================================================================
 * EVENTOS GLOBALES (CLICK OUTSIDE & ESC)
 * ========================================================================== */
const handleOutsideClick = (event) => {
  if (navbarRef.value && !navbarRef.value.contains(event.target)) {
    closeAllMenus()
  }
}

const handleEscape = (event) => {
  if (event.key === 'Escape') {
    closeAllMenus()
  }
}

onMounted(() => {
  document.addEventListener('click', handleOutsideClick)
  document.addEventListener('keydown', handleEscape)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleOutsideClick)
  document.removeEventListener('keydown', handleEscape)
})
</script>

<template>
  <nav ref="navbarRef" class="site-nav">
    <div class="container">
      <div class="site-navigation">
        <!-- ===================================================== -->
        <!-- LOGO -->
        <!-- ===================================================== -->
        <a href="#" class="logo" @click.prevent="navigate('#home-section')">
          <img
            v-if="company.showLogo"
            :src="company.logo"
            :alt="company.name"
            class="logo-image"
          />
          <template v-if="showCompanyText">
            <span class="logo-text">{{ company.shortName }}</span>
            <span class="logo-divider">|</span>
            <span class="logo-company">{{ company.name }}</span>
          </template>
        </a>

        <!-- ===================================================== -->
        <!-- DESKTOP MENU -->
        <!-- ===================================================== -->
        <ul class="site-menu desktop-menu">
          <li v-for="item in menuItems" :key="item.id" class="menu-item">
            <!-- LINK NORMAL -->
            <template v-if="!item.children">
              <a
                :href="item.href"
                class="nav-link"
                @click.prevent="navigate(item.href)"
              >
                <span class="nav-link-text">{{ item.label }}</span>
              </a>
            </template>

            <!-- DROPDOWN -->
            <template v-else>
              <button
                class="nav-link dropdown-trigger"
                type="button"
                :aria-expanded="openDropdown === item.id"
                @click.stop="toggleDropdown(item.id)"
              >
                <span class="nav-link-text">{{ item.label }}</span>
                <i
                  class="icon-chevron-down"
                  :class="{ rotate: openDropdown === item.id }"
                ></i>
              </button>

              <Transition name="dropdown">
                <div v-if="openDropdown === item.id" class="dropdown-panel">
                  <button
                    v-for="service in item.children"
                    :key="service.id"
                    type="button"
                    class="dropdown-item"
                    :class="{ active: activeTab === service.id }"
                    @click="goToService(service.id)"
                  >
                    {{ service.label }}
                  </button>
                </div>
              </Transition>
            </template>
          </li>

          <!-- CTA BUTTON -->
          <li>
            <button
              class="nav-btn"
              @click="navigate('#contacto')"
            >
              Solicitar Asesoría
            </button>
          </li>
        </ul>

        <!-- ===================================================== -->
        <!-- MOBILE TOGGLE -->
        <!-- ===================================================== -->
        <button
          class="mobile-toggle"
          type="button"
          @click="toggleMobileMenu"
          aria-label="Abrir Menú"
        >
          <span v-if="!mobileMenuOpen">☰</span>
          <span v-else>✕</span>
        </button>
      </div>
    </div>

    <!-- ========================================================= -->
    <!-- MOBILE MENU PANEL -->
    <!-- ========================================================= -->
    <Transition name="mobile-menu">
      <div v-if="mobileMenuOpen" class="mobile-menu">
        <template v-for="item in menuItems" :key="item.id">
          <!-- NORMAL LINK -->
          <button
            v-if="!item.children"
            class="mobile-link"
            @click="navigate(item.href)"
          >
            {{ item.label }}
          </button>

          <!-- DROPDOWN LINK -->
          <div v-else class="mobile-dropdown">
            <button class="mobile-link" @click="toggleDropdown(item.id)">
              <span>{{ item.label }}</span>
              <i
                class="icon-chevron-down"
                :class="{ rotate: openDropdown === item.id }"
              ></i>
            </button>

            <Transition name="dropdown">
              <div v-if="openDropdown === item.id" class="mobile-dropdown-items">
                <button
                  v-for="service in item.children"
                  :key="service.id"
                  class="mobile-subitem"
                  :class="{ active: activeTab === service.id }"
                  @click="goToService(service.id)"
                >
                  {{ service.label }}
                </button>
              </div>
            </Transition>
          </div>
        </template>

        <button
          class="nav-btn mobile-cta"
          @click="navigate('#contacto')"
        >
          Solicitar Asesoría
        </button>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
/* ==========================================================
   VARIABLES Y ESTILOS BASE DARK MODE
========================================================== */
.site-nav {
  --nav-height: 82px;
  --bg-dark: rgba(11, 18, 32, 0.88);
  --bg-panel: #1e293b;
  --primary-cyan: #38bdf8;
  --primary-blue: #0284c7;
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --border-light: rgba(255, 255, 255, 0.08);

  position: sticky;
  top: 0;
  z-index: 9999;
  padding: 0;
  background: var(--bg-dark);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border-light);
  transition: all 0.3s ease;
}

.site-navigation {
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* ==========================================================
   LOGO
========================================================== */
.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  border-radius: 12px;
}

.logo-image {
  width: 190px;
  max-width: 45vw;
  max-height: 72px;
  height: auto;
  object-fit: contain;
  display: block;
}

.logo-text {
  font-size: 24px;
  font-weight: 800;
  color: var(--primary-cyan);
  letter-spacing: 0.5px;
}

.logo-divider {
  color: #334155;
  font-size: 20px;
}

.logo-company {
  color: var(--text-main);
  font-size: 15px;
  font-weight: 600;
}

/* ==========================================================
   MENU DESKTOP
========================================================== */
.site-menu {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.menu-item {
  position: relative;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 18px;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.25s ease;
  text-decoration: none;
}

.nav-link-text {
  color: var(--text-main);
  font-weight: 600;
  font-size: 15px;
  transition: color 0.25s ease;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.05);
}

.nav-link:hover .nav-link-text {
  color: var(--primary-cyan);
}

/* CHEVRON */
.icon-chevron-down {
  font-size: 10px;
  color: var(--text-muted);
  transition: transform 0.25s ease;
  display: inline-block;
}

.icon-chevron-down.rotate {
  transform: rotate(180deg);
}

/* ==========================================================
   DROPDOWN PANEL
========================================================== */
.dropdown-panel {
  position: absolute;
  top: calc(100% + 12px);
  left: 0;
  min-width: 240px;
  background: var(--bg-panel);
  border-radius: 16px;
  border: 1px solid rgba(56, 189, 248, 0.2);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  padding: 8px;
}

.dropdown-item {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: var(--text-muted);
  border-radius: 10px;
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.dropdown-item:hover {
  background: rgba(56, 189, 248, 0.12);
  color: var(--primary-cyan);
}

.dropdown-item.active {
  background: linear-gradient(135deg, var(--primary-blue), #0369a1);
  color: #ffffff;
  font-weight: 700;
}

/* ==========================================================
   BOTÓN CTA
========================================================== */
.nav-btn {
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 14px;
  border: none;
  color: #ffffff;
  background: linear-gradient(135deg, var(--primary-blue), #0284c7);
  box-shadow: 0 8px 25px rgba(2, 132, 199, 0.35);
  cursor: pointer;
  transition: all 0.25s ease;
}

.nav-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 30px rgba(2, 132, 199, 0.5);
  background: linear-gradient(135deg, #0284c7, #0369a1);
}

/* ==========================================================
   MOBILE TOGGLE & MENU
========================================================== */
.mobile-toggle {
  display: none;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 26px;
  color: var(--text-main);
  padding: 8px;
}

.mobile-menu {
  background: #0f172a;
  border-top: 1px solid var(--border-light);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
  padding: 20px;
}

.mobile-link {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;
  border: none;
  background: var(--bg-panel);
  cursor: pointer;
  font-weight: 600;
  color: var(--text-main);
  border-radius: 12px;
  margin-bottom: 8px;
  transition: all 0.2s ease;
}

.mobile-link:hover {
  background: rgba(255, 255, 255, 0.08);
}

.mobile-dropdown-items {
  padding-left: 12px;
  margin-bottom: 12px;
}

.mobile-subitem {
  width: 100%;
  padding: 12px 16px;
  border: none;
  background: transparent;
  text-align: left;
  cursor: pointer;
  border-radius: 8px;
  color: var(--text-muted);
  font-size: 14px;
  transition: all 0.2s ease;
}

.mobile-subitem:hover {
  background: rgba(56, 189, 248, 0.12);
  color: var(--primary-cyan);
}

.mobile-subitem.active {
  background: var(--primary-blue);
  color: #ffffff;
}

.mobile-cta {
  width: 100%;
  margin-top: 15px;
}

/* ==========================================================
   ANIMACIONES
========================================================== */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.25s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

/* ==========================================================
   RESPONSIVE
========================================================== */
@media (max-width: 991px) {
  .site-menu {
    display: none;
  }

  .mobile-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo-company,
  .logo-divider {
    display: none;
  }
}
</style>