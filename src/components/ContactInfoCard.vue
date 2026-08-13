<script setup>

import { computed } from "vue"

import { useWhatsapp } from "../composables/useWhatsapp.js"

const { buildWhatsappUrl } = useWhatsapp()

const company = {

    name: "HENCOM",

    slogan: "Transformamos la tecnología en resultados.",

    phone: "+52 664 331 3817",

    whatsapp: "526643313817",

    email: "contacto@frontierexpertise.com",

    website: "www.frontierexpertise.com",

    location: "Tijuana, Baja California",

    schedule: "Lunes a Viernes | 09:00 - 18:00",

    response: "Tiempo de respuesta menor a 24 horas."

}

const whatsappMessage = `
Hola HENCOM.

Me interesa conocer más acerca de sus servicios.

Encontré su sitio web y deseo recibir información.

Muchas gracias.
`

const cards = computed(() => [

    {

        icon: "icon-phone",

        title: "Teléfono",

        value: company.phone,

        href: `tel:${company.phone.replace(/\s/g, "")}`

    },

    {

        icon: "icon-whatsapp",

        title: "WhatsApp",

        value: company.phone,

        href: buildWhatsappUrl(

            company.whatsapp,

            whatsappMessage

        )

    },

    {

        icon: "icon-envelope",

        title: "Correo Electrónico",

        value: company.email,

        href: `mailto:${company.email}`

    },

    {

        icon: "icon-location-arrow",

        title: "Ubicación",

        value: company.location,

        href: "#"

    },

    {

        icon: "icon-clock-o",

        title: "Horario",

        value: company.schedule,

        href: "#"

    }

])

</script>
<template>
  <div class="contact-info-card">

    <div class="company-header">

      <div class="company-logo">

        <span class="icon-layers"></span>

      </div>

      <div>

        <h3>

          {{ company.name }}

        </h3>

        <p>

          {{ company.slogan }}

        </p>

      </div>

    </div>

    <div class="contact-items">

      <a
        v-for="item in cards"
        :key="item.title"
        :href="item.href"
        class="contact-item"
        target="_blank"
      >

        <div class="contact-icon">

          <span :class="item.icon"></span>

        </div>

        <div class="contact-content">

          <h5>

            {{ item.title }}

          </h5>

          <span>

            {{ item.value }}

          </span>

        </div>

      </a>

    </div>

    <div class="response-box">

      <span class="icon-check-circle"></span>

      {{ company.response }}

    </div>

</div>
</template>

<style scoped>

.contact-info-card{

    background:#ffffff;

    border-radius:24px;

    padding:40px;

    box-shadow:0 20px 50px rgba(0,0,0,.08);

    height:100%;

}

.company-header{

    display:flex;

    align-items:center;

    margin-bottom:40px;

}

.company-logo{

    width:75px;

    height:75px;

    border-radius:18px;

    background:linear-gradient(135deg,#0d6efd,#20c997);

    color:white;

    display:flex;

    justify-content:center;

    align-items:center;

    font-size:32px;

    margin-right:20px;

}

.company-header h3{

    font-size:1.5rem;

    font-weight:800;

    margin-bottom:8px;

    color:#1d2d44;

}

.company-header p{

    margin:0;

    color:#6c757d;

    line-height:1.6;

}

.contact-items{

    display:flex;

    flex-direction:column;

    gap:18px;

}

.contact-item{

    display:flex;

    align-items:center;

    text-decoration:none;

    padding:18px;

    border-radius:16px;

    transition:.30s;

    border:1px solid #eef2f7;

}

.contact-item:hover{

    transform:translateX(6px);

    background:#f8fbff;

    border-color:#0d6efd;

}

.contact-icon{

    width:55px;

    height:55px;

    border-radius:14px;

    background:#eef5ff;

    display:flex;

    justify-content:center;

    align-items:center;

    color:#0d6efd;

    font-size:24px;

    margin-right:18px;

    flex-shrink:0;

}

.contact-content{

    display:flex;

    flex-direction:column;

}

.contact-content h5{

    margin:0 0 4px;

    font-size:1rem;

    font-weight:700;

    color:#1d2d44;

}

.contact-content span{

    color:#6c757d;

    font-size:.95rem;

}

.response-box{

    margin-top:35px;

    padding:18px;

    border-radius:16px;

    background:#eef9f2;

    color:#198754;

    display:flex;

    align-items:center;

    font-weight:600;

}

.response-box span{

    margin-right:12px;

    font-size:22px;

}

@media(max-width:991px){

.contact-info-card{

margin-top:30px;

}

.company-header{

flex-direction:column;

text-align:center;

}

.company-logo{

margin-right:0;

margin-bottom:20px;

}

}

</style>