<script setup>

import {
  ref,
  computed,
  onMounted,
  onBeforeUnmount
} from 'vue'

import { useServicesTabs } from '../composables/useServicesTabs.js'

/* ==========================================================================
 * COMPANY
 * ========================================================================== */
const company = {

  name: ' HENCOM',

  shortName: '',

  logo: '/images/hencom.PNG',

  showLogo: true,

  hideTextWhenLogo: true

}
/*
|--------------------------------------------------------------------------
| COMPANY
|--------------------------------------------------------------------------
*/

const showCompanyText = computed(() => {

  return !(

    company.showIcon &&

    company.hideTextWhenIcon

  )

})

/* ==========================================================================
 * SERVICES
 * ========================================================================== */

const {

  activeTab,

  setActiveTab

} = useServicesTabs()

/* ==========================================================================
 * NAVBAR STATE
 * ========================================================================== */

const mobileMenuOpen = ref(false)

const openDropdown = ref(null)

const navbarRef = ref(null)

/* ==========================================================================
 * MENU
 * ========================================================================== */
    
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

      {

        id: 'consultoria',

        label: 'Consultoría'

      },

      {

        id: 'soluciones',

        label: 'Soluciones'

      },

      {

        id: 'nosotros',

        label: 'Nosotros'

      }

    ]

  }

]

/* ==========================================================================
 * COMPUTED
 * ========================================================================== */

const hasOpenDropdown = computed(() =>

  openDropdown.value !== null

)

/* ==========================================================================
 * SCROLL
 * ========================================================================== */

const scrollTo = (selector) => {

  if (!selector)
    return

  const element = document.querySelector(selector)

  if (!element)
    return

  element.scrollIntoView({

    behavior: 'smooth',

    block: 'start'

  })

}

/* ==========================================================================
 * NAVIGATION
 * ========================================================================== */

const navigate = (href) => {

    console.log(
        'Antes:',
        activeTab.value
    )

    if (href === '#home-section') {

        setActiveTab('home')

    }

    console.log(
        'Después:',
        activeTab.value
    )

    closeAllMenus()

    scrollTo(href)

}
/* ==========================================================================
 * SERVICES
 * ========================================================================== */

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
 * DROPDOWNS
 * ========================================================================== */

const toggleDropdown = (dropdownId) => {

  openDropdown.value =

    openDropdown.value === dropdownId

      ? null

      : dropdownId

}

const closeDropdown = () => {

  openDropdown.value = null

}

/* ==========================================================================
 * MOBILE
 * ========================================================================== */

const toggleMobileMenu = () => {

  mobileMenuOpen.value =

    !mobileMenuOpen.value

}

const closeMobileMenu = () => {

  mobileMenuOpen.value = false

}

/* ==========================================================================
 * CLOSE EVERYTHING
 * ========================================================================== */

const closeAllMenus = () => {

  closeDropdown()

  closeMobileMenu()

}

/* ==========================================================================
 * CLICK OUTSIDE
 * ========================================================================== */

const handleOutsideClick = (event) => {

  if (!navbarRef.value)
    return

  if (

    !navbarRef.value.contains(event.target)

  ) {

    closeAllMenus()

  }

}

/* ==========================================================================
 * ESC KEY
 * ========================================================================== */

const handleEscape = (event) => {

  if (

    event.key === 'Escape'

  ) {

    closeAllMenus()

  }

}

/* ==========================================================================
 * LIFECYCLE
 * ========================================================================== */

onMounted(() => {

  document.addEventListener(

    'click',

    handleOutsideClick

  )

  document.addEventListener(

    'keydown',

    handleEscape

  )

})

onBeforeUnmount(() => {

  document.removeEventListener(

    'click',

    handleOutsideClick

  )

  document.removeEventListener(

    'keydown',

    handleEscape

  )

})

</script>
<template>

<nav
    ref="navbarRef"
    class="site-nav"
>

    <div class="container">

        <div class="site-navigation">

            <!-- ===================================================== -->
            <!-- LOGO -->
            <!-- ===================================================== -->

<a
    href="#"
    class="logo"
    @click.prevent="navigate('#home-section')"
>

    <img
        v-if="company.showLogo"
        :src="company.logo"
        :alt="company.name"
        class="logo-image"
    >

    <template v-if="showCompanyText">

        <span class="logo-text">

            {{ company.shortName }}

        </span>

        <span class="logo-divider">

            |

        </span>

        <span class="logo-company">

            {{ company.name }}

        </span>

    </template>

</a>

            <!-- ===================================================== -->
            <!-- DESKTOP MENU -->
            <!-- ===================================================== -->

            <ul class="site-menu desktop-menu">

                <li
                    v-for="item in menuItems"
                    :key="item.id"
                    class="menu-item"
                >

                    <!-- ============================================== -->
                    <!-- NORMAL LINK -->
                    <!-- ============================================== -->

                    <template v-if="!item.children">

                        <a
                            :href="item.href"
                            class="nav-link"
                            @click.prevent="navigate(item.href)"
                        >
                        <span class="nav-link-text">
                          {{ item.label }}

                        </span>


                        </a>

                    </template>

                    <!-- ============================================== -->
                    <!-- DROPDOWN -->
                    <!-- ============================================== -->

                    <template v-else>

                        <button
                            class="nav-link dropdown-trigger"
                            type="button"
                            :aria-expanded="openDropdown === item.id"
                            @click.stop="toggleDropdown(item.id)"
                        >

                            {{ item.label }}

                            <i
                                class="icon-chevron-down"
                                :class="{

                                    rotate:

                                        openDropdown === item.id

                                }"
                            />

                        </button>

                        <Transition
                            name="dropdown"
                        >

                            <div
                                v-if="openDropdown === item.id"
                                class="dropdown-panel"
                            >

                                <button
                                    v-for="service in item.children"
                                    :key="service.id"
                                    type="button"
                                    class="dropdown-item"
                                    :class="{

                                        active:

                                            activeTab === service.id

                                    }"
                                    @click="goToService(service.id)"
                                >

                                    {{ service.label }}

                                </button>

                            </div>

                        </Transition>

                    </template>

                </li>

                <!-- ============================================== -->
                <!-- CTA -->
                <!-- ============================================== -->

                <li>

                    <button
                        class="btn btn-primary nav-btn"
                        @click="navigate('#contact-section')"
                    >

                        Solicitar Asesoría

                    </button>

                </li>

            </ul>

            <!-- ===================================================== -->
            <!-- MOBILE BUTTON -->
            <!-- ===================================================== -->

            <button
                class="mobile-toggle"
                type="button"
                @click="toggleMobileMenu"
            >

                <span
                    v-if="!mobileMenuOpen"
                >

                    ☰

                </span>

                <span
                    v-else
                >

                    ✕

                </span>

            </button>

        </div>

    </div>

    <!-- ========================================================= -->
    <!-- MOBILE MENU -->
    <!-- ========================================================= -->

    <Transition
        name="mobile-menu"
    >

        <div
            v-if="mobileMenuOpen"
            class="mobile-menu"
        >

            <template
                v-for="item in menuItems"
                :key="item.id"
            >

                <!-- NORMAL -->

                <button
                    v-if="!item.children"
                    class="mobile-link"
                    @click="navigate(item.href)"
                >

                    {{ item.label }}

                </button>

                <!-- DROPDOWN -->

                <div
                    v-else
                    class="mobile-dropdown"
                >

                    <button
                        class="mobile-link"

                        @click="toggleDropdown(item.id)"
                    >

                        {{ item.label }}

                        <i
                            class="icon-chevron-down"
                            :class="{

                                rotate:

                                    openDropdown === item.id

                            }"
                        />

                    </button>

                    <Transition
                        name="dropdown"
                    >

                        <div
                            v-if="openDropdown === item.id"
                            class="mobile-dropdown-items"
                        >

                            <button
                                v-for="service in item.children"
                                :key="service.id"
                                class="mobile-subitem"
                                :class="{

                                    active:

                                        activeTab === service.id

                                }"
                                @click="goToService(service.id)"
                            >

                                {{ service.label }}

                            </button>

                        </div>

                    </Transition>

                </div>

            </template>

            <button
                class="btn btn-primary mobile-cta"
                @click="navigate('#contact-section')"
            >

                Solicitar Asesoría

            </button>

        </div>

    </Transition>

</nav>

</template>

<style scoped>
/* ==========================================================
   VARIABLES
========================================================== */

:root {

  --nav-height: 82px;

  --primary: #1d4ed8;
  --primary-dark: #1e3a8a;

  --secondary: #0f172a;

  --text: #334155;
  --text-light: #64748b;

  --border: #e2e8f0;

  --background: rgba(255,255,255,.96);

  --shadow:

    0 12px 40px rgba(15,23,42,.08);

  --shadow-dropdown:

    0 25px 50px rgba(15,23,42,.12);

  --radius: 16px;

  --transition: .28s ease;

}

/* ==========================================================
   NAVBAR
========================================================== */

.site-nav {

  position: sticky;

  top: 0;

  z-index: 9999;

  backdrop-filter: blur(18px);

  background: var(--background);

  border-bottom: 1px solid rgba(226,232,240,.65);

  transition: all .35s ease;

}

.site-navigation{

  height: var(--nav-height);

  display:flex;

  align-items:center;

  justify-content:space-between;

}

/* ==========================================================
   LOGO
========================================================== */

.logo{

  display:flex;

  align-items:center;

  gap:12px;

  text-decoration:none;
  border-radius: 20px;

}

.logo-text{

  font-size:28px;

  font-weight:800;

  color:var(--primary);

  letter-spacing:1px;

}

.logo-divider{

  color:#CBD5E1;

}

.logo-company{

  color:var(--secondary);

  font-size:15px;

  font-weight:600;
    border-radius: 20px;


}

/* ==========================================================
   MENU
========================================================== */

.site-menu{

  display:flex;

  align-items:center;

  gap:8px;

  margin:0;

  padding:0;

  list-style:none;

}

.menu-item{

  position:relative;

}

/* ==========================================================
   LINKS
========================================================== */

.nav-link{

  display:flex;

  align-items:center;

  gap:8px;

  padding:14px 18px;

  border:none;

  background:none;

  color:var(back);

  font-weight:600;

  cursor:pointer;

  border-radius:10px;

  transition:var(--transition);

  text-decoration:none;

}

.nav-link:hover{

  background:#f8fafc;

  color:var(--primary);

}

.dropdown-trigger{

  appearance:none;

}

/* ==========================================================
   CHEVRON
========================================================== */

.icon-chevron-down{

  font-size:12px;

  transition:.25s;

}

.icon-chevron-down.rotate{

  transform:rotate(180deg);

}

/* ==========================================================
   DROPDOWN
========================================================== */

.dropdown-panel{

  position:absolute;

  top:calc(100% + 12px);

  left:0;

  min-width:260px;

  background:white;

  border-radius:18px;

  border:1px solid var(--border);

  box-shadow:var(--shadow-dropdown);

  overflow:hidden;

  padding:10px;

}

/* ==========================================================
   DROPDOWN ITEMS
========================================================== */

.dropdown-item{

  width:100%;

  display:flex;

  align-items:center;

  padding:14px 16px;

  border:none;

  background:white;

  cursor:pointer;

  color:var(--text);

  border-radius:12px;

  text-align:left;

  font-size:15px;

  font-weight:500;

  transition:var(--transition);

}

.dropdown-item:hover{

  background:#eff6ff;

  color:var(--primary);

}

.dropdown-item.active{

  background:linear-gradient(

      135deg,

      #2563eb,

      #1d4ed8

  );

  color:white;

}

/* ==========================================================
   CTA
========================================================== */

.nav-btn{

  padding:14px 24px;

  border-radius:14px;

  font-weight:700;

  border:none;

  color:white;

  background:linear-gradient(

      135deg,

      #2563eb,

      #1d4ed8

  );

  box-shadow:

      0 10px 30px rgba(37,99,235,.28);

  transition:.25s;

}

.nav-btn:hover{

  transform:translateY(-2px);

  box-shadow:

      0 18px 36px rgba(37,99,235,.35);

}

/* ==========================================================
   MOBILE BUTTON
========================================================== */

.mobile-toggle{

  display:none;

  border:none;

  background:none;

  cursor:pointer;

  font-size:28px;

  color:var(--secondary);

}

/* ==========================================================
   MOBILE MENU
========================================================== */

.mobile-menu{

  background:white;

  border-top:1px solid var(--border);

  box-shadow:var(--shadow);

  padding:20px;

}

.mobile-link{

  width:100%;

  display:flex;

  justify-content:space-between;

  align-items:center;

  padding:16px;

  border:none;

  background:white;

  cursor:pointer;

  font-weight:600;

  color:var(--secondary);

  border-radius:12px;

  transition:.25s;

}

.mobile-link:hover{

  background:#f8fafc;

}

.mobile-dropdown{

  margin-bottom:10px;

}

.mobile-dropdown-items{

  padding-left:18px;

  margin-top:8px;

}

.mobile-subitem{

  width:100%;

  padding:12px 16px;

  border:none;

  background:white;

  text-align:left;

  cursor:pointer;

  border-radius:10px;

  color:var(--text-light);

  transition:.25s;

}

.mobile-subitem:hover{

  background:#eff6ff;

  color:var(--primary);

}

.mobile-subitem.active{

  color:white;

  background:var(--primary);

}

.mobile-cta{

  margin-top:20px;

  width:100%;

}

/* ==========================================================
   ANIMATIONS
========================================================== */

.dropdown-enter-active,

.dropdown-leave-active{

  transition:.25s;

}

.dropdown-enter-from,

.dropdown-leave-to{

  opacity:0;

  transform:translateY(-10px);

}

.mobile-menu-enter-active,

.mobile-menu-leave-active{

  transition:.35s;

}

.mobile-menu-enter-from,

.mobile-menu-leave-to{

  opacity:0;

  transform:translateY(-15px);

}

/* ==========================================================
   RESPONSIVE
========================================================== */

@media (max-width:991px){

.site-menu{

    display:none;

}

.mobile-toggle{

    display:flex;

    align-items:center;

    justify-content:center;

}

.logo-company{

    display:none;

}

.logo-divider{

    display:none;

}

}
.logo {

    display: flex;

    align-items: center;

    gap: 12px;

    text-decoration: none;
      border-radius: 20px;

}

.logo-image {

    width: 178px;

    height: 48px;

    object-fit: contain;

    display: block;
    border-radius: 20px;
}

.nav-link-text{
  color: #0f172a;
}
</style>