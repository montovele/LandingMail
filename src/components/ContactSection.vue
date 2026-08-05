<script setup>

import ContactForm from "./ContactForm.vue";
import ContactInfoCard from "./ContactInfoCard.vue";

</script>

<template>

<section
id="contact-section"
class="contact-section"
>

<div class="container">

<div class="text-center mb-5">

<span class="section-tag">

Diagnóstico Empresarial

</span>

<h2>

Solicita un Diagnóstico Gratuito

</h2>

<p>

Completa el siguiente formulario y uno de nuestros consultores realizará un diagnóstico empresarial personalizado.

</p>

</div>

<div class="row g-5 align-items-start">

<div class="col-lg-7">

<ContactForm
    mode="diagnostico"
/>

</div>

<div class="col-lg-5">

<ContactInfoCard/>

</div>

</div>

</div>

</section>

</template>