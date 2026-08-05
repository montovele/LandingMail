<script setup>

import EncuestaEmpresarial from "./EncuestaEmpresarial.vue";
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

Contacto

</span>

<h2>

¿Hablemos de tu próximo proyecto?

</h2>

<p>

Nuestro equipo está listo para ayudarte a implementar la solución tecnológica que tu empresa necesita.

</p>

</div>

<div class="row g-5 align-items-start">

<div class="container">

<EncuestaEmpresarial/>

</div>
<!-- 
<div class="col-lg-5">

<ContactInfoCard/>

</div> -->

</div>

</div>

</section>

</template>

<style scoped>

.contact-section{

padding:120px 0;

background:#f8fbff;

}

.section-tag{

display:inline-block;

padding:8px 18px;

background:#eef5ff;

color:#0d6efd;

border-radius:30px;

font-weight:700;

margin-bottom:20px;

}

.contact-section h2{

font-size:2.7rem;

font-weight:800;

margin-bottom:20px;

color:#1b2940;

}

.contact-section p{

max-width:700px;

margin:auto;

font-size:17px;

color:#667085;

line-height:1.8;

}

</style>