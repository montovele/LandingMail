<script setup>

import { computed } from 'vue'

import { useServicesTabs } from '../../composables/useServicesTabs.js'

import TabConsultoria from './TabConsultoria.vue'

import TabSoluciones from './TabSoluciones.vue'

import TabNosotros from './TabNosotros.vue'


/*
|--------------------------------------------------------------------------
| TAB GLOBAL
|--------------------------------------------------------------------------
*/

const {

    activeTab,

    setActiveTab

} = useServicesTabs()


/*
|--------------------------------------------------------------------------
| TABS
|--------------------------------------------------------------------------
*/

const tabs = [

    {

        id: 'consultoria',

        title: 'Consultoría',

        icon: 'icon-briefcase'

    },

    {

        id: 'soluciones',

        title: 'Soluciones',

        icon: 'icon-layers'

    },

    {

        id: 'nosotros',

        title: 'Nosotros',

        icon: 'icon-users'

    }

]


/*
|--------------------------------------------------------------------------
| COMPONENTE ACTUAL
|--------------------------------------------------------------------------
*/

const currentComponent = computed(() => {

    switch (activeTab.value) {

        case 'consultoria':

            return TabConsultoria


        case 'soluciones':

            return TabSoluciones


        case 'nosotros':

            return TabNosotros


        default:

            return TabConsultoria

    }

})

</script>


<template>

<section

    id="services-section"

    class="tabs-section"

>

<div class="container">


<!-- ==================================================
     HEADER
=================================================== -->

<div class="text-center mb-5">

<span class="section-tag">

    Nuestros Servicios

</span>


<h2 class="section-title">

    Soluciones diseñadas para impulsar tu empresa

</h2>


<p class="section-description">

    Descubre cómo HENCOM puede ayudarte
    a optimizar procesos, fortalecer tu infraestructura
    tecnológica y acelerar el crecimiento de tu negocio.

</p>

</div>


<!-- ==================================================
     TABS
=================================================== -->

<div class="tabs-container">


<button

    v-for="tab in tabs"

    :key="tab.id"

    class="tab-button"

    :class="{

        active:

            activeTab === tab.id

    }"

    @click="

        setActiveTab(tab.id)

    "

>

<span :class="tab.icon"></span>


{{ tab.title }}


</button>


</div>


<!-- ==================================================
     TAB CONTENT
=================================================== -->

<Transition

    name="fade"

    mode="out-in"

>

<component

    :is="currentComponent"

    :key="activeTab"

/>

</Transition>


</div>

</section>

</template>
<style scoped>

.tabs-section{

    padding:110px 0;

    background:linear-gradient(180deg, #0b1220 0%, #111827 100%);

}

.section-tag{

    display:inline-block;

    padding:8px 18px;

    background:rgba(30,41,59,.75);

    border:1px solid rgba(56,189,248,.25);

    color:#38bdf8;

    border-radius:30px;

    font-weight:700;

    margin-bottom:18px;

    backdrop-filter:blur(10px);

}

.section-title{

    font-size:2.5rem;

    font-weight:800;

    color:#f8fafc;

}

.section-description{

    max-width:720px;

    margin:auto;

    margin-top:20px;

    color:#94a3b8;

    font-size:18px;

}

.tabs-container{

    display:flex;

    justify-content:center;

    gap:20px;

    flex-wrap:wrap;

    margin:60px 0;

}

.tab-button{

    padding:18px 35px;

    border:1px solid rgba(255,255,255,.08);

    background:#1e293b;

    border-radius:16px;

    font-size:17px;

    font-weight:700;

    color:#cbd5e1;

    transition:.3s;

    box-shadow:0 10px 30px rgba(0,0,0,.35);

    cursor:pointer;

}

.tab-button span{

    margin-right:10px;

}

.tab-button:hover{

    transform:translateY(-4px);

    border-color:rgba(56,189,248,.3);

    color:#38bdf8;

}

.tab-button.active{

    background:#0284c7;

    color:#ffffff;

    border-color:#0284c7;

    box-shadow:0 15px 35px rgba(2,132,199,.4);

}

.fade-enter-active,

.fade-leave-active{

    transition:.35s;

}

.fade-enter-from,

.fade-leave-to{

    opacity:0;

    transform:translateY(20px);

}

@media(max-width:768px){

.tab-button{

width:100%;

}

.section-title{

font-size:2rem;

}

}

</style>