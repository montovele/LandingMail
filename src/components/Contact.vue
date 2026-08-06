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

    background:linear-gradient(
        180deg,
        #0b1220 0%,
        #111827 100%
    );

    color:#f8fafc;

    position:relative;

    overflow:hidden;

}

/* ==========================================
   DECORACIÓN
========================================== */

.contact-section::before{

    content:"";

    position:absolute;

    top:-150px;

    right:-150px;

    width:350px;

    height:350px;

    background:radial-gradient(
        circle,
        rgba(59,130,246,.15),
        transparent 70%
    );

    border-radius:50%;

    pointer-events:none;

}

.contact-section::after{

    content:"";

    position:absolute;

    bottom:-180px;

    left:-120px;

    width:300px;

    height:300px;

    background:radial-gradient(
        circle,
        rgba(14,165,233,.12),
        transparent 70%
    );

    border-radius:50%;

    pointer-events:none;

}

/* ==========================================
   TAG
========================================== */

.section-tag{

    display:inline-flex;

    align-items:center;

    justify-content:center;

    padding:10px 22px;

    background:rgba(37,99,235,.15);

    color:#60a5fa;

    border:1px solid rgba(96,165,250,.25);

    border-radius:40px;

    font-weight:700;

    letter-spacing:.5px;

    margin-bottom:22px;

    backdrop-filter:blur(10px);

}

/* ==========================================
   TITLE
========================================== */

.contact-section h2{

    font-size:2.8rem;

    font-weight:800;

    line-height:1.2;

    margin-bottom:22px;

    color:#ffffff;

}

/* ==========================================
   DESCRIPTION
========================================== */

.contact-section p{

    max-width:720px;

    margin:auto;

    font-size:1.05rem;

    line-height:1.9;

    color:#cbd5e1;

}

/* ==========================================
   RESPONSIVE
========================================== */

@media(max-width:992px){

.contact-section{

    padding:90px 25px;

}

.contact-section h2{

    font-size:2.2rem;

}

}

@media(max-width:768px){

.contact-section{

    padding:70px 20px;

}

.contact-section h2{

    font-size:1.9rem;

}

.contact-section p{

    font-size:16px;

}

.section-tag{

    font-size:14px;

}

}

</style>