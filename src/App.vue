<script setup>
import { provide } from 'vue'
import Header from "./components/Header.vue"
import LandingContent from "./components/LandingContent.vue"
import Footer from "./components/Footer.vue"
import BackToTop from "./components/Landing/BackToTop.vue"
import WhatsappWidget from "./components/WhatsappWidget.vue"

// Proporcionar contexto global si es necesario
provide('appConfig', {
  appName: 'LandingMail',
  version: '1.0.0'
})
</script>

<template>
  <div class="app-container">
    <Header />
    <main class="app-main">
      <LandingContent />
    </main>
    <Footer />
    <BackToTop />
    <WhatsappWidget />
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

.app-main {
  flex: 1;
  width: 100%;
}
</style>