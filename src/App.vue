<script setup>
import { provide } from 'vue'
import Header from "./components/Header.vue"
import LandingContent from "./components/LandingContent.vue"
import Footer from "./components/Footer.vue"
import BackToTop from "./components/Landing/BackToTop.vue"

// Proporcionar contexto global si es necesario
provide('appConfig', {
  appName: 'LandingMail',
  version: '1.0.0'
})
</script>

<template>
  <div id="app" class="app-container">
    <Header />
    <main class="app-main">
      <LandingContent />
    </main>
    <Footer />
    <BackToTop />
  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-container {
  width: 100%;
}

.app-main {
  flex: 1;
  width: 100%;
}
</style>