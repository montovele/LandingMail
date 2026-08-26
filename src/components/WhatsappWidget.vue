<script setup>
import { reactive, ref } from 'vue'
import { useWhatsapp } from '../composables/useWhatsapp.js'

const { openWhatsapp, quoteMessage } = useWhatsapp()

const whatsappOpen = ref(false)
const whatsappError = ref('')
const contactData = reactive({
  email: '',
  phone: ''
})

function toggleWhatsapp() {
  whatsappOpen.value = !whatsappOpen.value
  whatsappError.value = ''
}

function sendWhatsapp() {
  if (!contactData.email.trim() && !contactData.phone.trim()) {
    whatsappError.value = 'Introduce tu correo o teléfono para continuar.'
    return
  }

  openWhatsapp({
    message: quoteMessage({
      email: contactData.email.trim(),
      phone: contactData.phone.trim()
    })
  })

  whatsappOpen.value = false
  contactData.email = ''
  contactData.phone = ''
}
</script>

<template>
  <div v-if="whatsappOpen" class="whatsapp-form" role="dialog" aria-label="Contacto por WhatsApp">
    <button
      type="button"
      class="whatsapp-close"
      aria-label="Cerrar formulario de WhatsApp"
      @click="toggleWhatsapp"
    >
      <span aria-hidden="true">&times;</span>
    </button>

    <h3>Contactar por WhatsApp</h3>
    <p>Déjanos tu correo o teléfono y te atenderemos.</p>

    <form @submit.prevent="sendWhatsapp">
      <label for="whatsapp-email">Correo electrónico</label>
      <input
        id="whatsapp-email"
        v-model="contactData.email"
        type="email"
        placeholder="correo@empresa.com"
      >

      <label for="whatsapp-phone">Teléfono</label>
      <input
        id="whatsapp-phone"
        v-model="contactData.phone"
        type="tel"
        placeholder="+52 664 000 0000"
      >

      <p v-if="whatsappError" class="whatsapp-error" role="alert">{{ whatsappError }}</p>

      <button type="submit" class="whatsapp-submit">
        <span class="icon-whatsapp" aria-hidden="true"></span>
        Abrir WhatsApp
      </button>
    </form>
  </div>

  <button
    class="whatsapp-action"
    aria-label="Contactar a HENCOM por WhatsApp"
    :aria-expanded="whatsappOpen"
    @click="toggleWhatsapp"
  >
    <span class="icon-whatsapp" aria-hidden="true"></span>
    <span>Escríbenos por WhatsApp</span>
  </button>
</template>

<style scoped>
.whatsapp-action {
  position: fixed;
  right: 100px;
  bottom: 30px;
  z-index: 1000;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 18px;
  border: 0;
  border-radius: 999px;
  background: #25d366;
  color: #073b20;
  cursor: pointer;
  font: inherit;
  font-weight: 700;
  box-shadow: 0 10px 24px rgba(7, 59, 32, 0.28);
  transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;
}

.whatsapp-action:hover,
.whatsapp-action:focus-visible {
  background: #20bd5a;
  color: #042b17;
  transform: translateY(-2px);
  box-shadow: 0 14px 28px rgba(7, 59, 32, 0.34);
}

.whatsapp-action:focus-visible {
  outline: 3px solid #ffffff;
  outline-offset: 3px;
}

.whatsapp-action .icon-whatsapp {
  font-size: 20px;
}

.whatsapp-form {
  position: fixed;
  right: 100px;
  bottom: 92px;
  z-index: 1001;
  width: min(340px, calc(100vw - 32px));
  padding: 22px;
  border: 1px solid rgba(37, 211, 102, 0.35);
  border-radius: 12px;
  background: #ffffff;
  color: #172033;
  box-shadow: 0 16px 40px rgba(7, 18, 32, 0.3);
}

.whatsapp-form h3 {
  margin: 0 28px 6px 0;
  font-size: 18px;
}

.whatsapp-form p {
  margin: 0 0 16px;
  color: #526071;
  font-size: 14px;
}

.whatsapp-form form {
  display: grid;
  gap: 8px;
}

.whatsapp-form label {
  font-size: 13px;
  font-weight: 700;
}

.whatsapp-form input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  color: #172033;
  font: inherit;
}

.whatsapp-form input:focus {
  border-color: #25d366;
  outline: 2px solid rgba(37, 211, 102, 0.25);
}

.whatsapp-close {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 28px;
  height: 28px;
  border: 0;
  background: transparent;
  color: #526071;
  cursor: pointer;
  font-size: 24px;
  line-height: 1;
}

.whatsapp-submit {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 8px;
  padding: 11px 14px;
  border: 0;
  border-radius: 6px;
  background: #25d366;
  color: #073b20;
  cursor: pointer;
  font: inherit;
  font-weight: 700;
}

.whatsapp-error {
  margin: 4px 0 0 !important;
  color: #b42318 !important;
  font-size: 13px !important;
}

@media (max-width: 576px) {
  .whatsapp-action {
    right: 82px;
    bottom: 18px;
    padding: 14px;
  }

  .whatsapp-form {
    right: 16px;
    bottom: 84px;
  }

  .whatsapp-action span:last-child {
    display: none;
  }
}
</style>