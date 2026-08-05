<script setup>

import { computed, defineAsyncComponent } from 'vue'
import { useServicesTabs } from '../composables/useServicesTabs'

const { activeTab } = useServicesTabs()

const pages = {

    home: defineAsyncComponent(() =>
        import('./LandingHome.vue')
    ),

    consultoria: defineAsyncComponent(() =>
        import('./Landing/TabConsultoria.vue')
    ),

    soluciones: defineAsyncComponent(() =>
        import('./Landing/TabSoluciones.vue')
    ),

    nosotros: defineAsyncComponent(() =>
        import('./Landing/TabNosotros.vue')
    )

}

const currentPage = computed(() =>

    pages[activeTab.value] ?? pages.home

)

</script>

<template>

<Suspense>

    <component
        :is="currentPage"
        :key="activeTab"
    />

    <template #fallback>

        <div class="landing-loading">

            Cargando...

        </div>

    </template>

</Suspense>

</template>