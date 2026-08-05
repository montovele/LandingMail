<script setup>
import ServiceCard from "./ServiceCard.vue";

const services = [

{
icon:"icon-search",
title:"Diagnóstico Tecnológico",
description:"Evaluamos la infraestructura tecnológica de tu empresa para detectar oportunidades de mejora y optimizar el rendimiento.",
color:"#0d6efd"
},

{
icon:"icon-settings",
title:"Optimización de Procesos",
description:"Automatizamos procesos y proponemos soluciones que incrementan la productividad de tu organización.",
color:"#198754"
},

{
icon:"icon-server",
title:"Infraestructura TI",
description:"Diseñamos e implementamos servidores, redes y plataformas tecnológicas adaptadas a tu negocio.",
color:"#6f42c1"
},

{
icon:"icon-shield",
title:"Seguridad Informática",
description:"Protegemos la información de tu empresa mediante estrategias de seguridad, respaldos y buenas prácticas.",
color:"#dc3545"
},

{
icon:"icon-network-wired",
title:"Redes Empresariales",
description:"Configuramos redes LAN, WiFi y enlaces empresariales para garantizar conectividad y estabilidad.",
color:"#fd7e14"
},

{
icon:"icon-graduation-cap",
title:"Capacitación",
description:"Capacitamos a tu personal para aprovechar al máximo las soluciones implementadas.",
color:"#20c997"
},

{
icon:"icon-headset",
title:"Soporte Técnico",
description:"Brindamos soporte preventivo y correctivo para mantener la continuidad operativa de tu empresa.",
color:"#6610f2"
}

];
</script>

<template>

<section class="consultoria-section">

<div class="row mb-5">

<div class="col-lg-8 mx-auto text-center">

<span class="section-tag">

Consultoría Especializada

</span>

<h2>

Consultoría en Tecnologías de la Información

</h2>

<p>

Acompañamos a empresas y PyMES en su transformación digital mediante consultoría estratégica, infraestructura tecnológica y soporte especializado.

</p>

</div>

</div>

<div class="row g-4">

<div
v-for="service in services"
:key="service.title"
class="col-lg-4 col-md-6"
>

<ServiceCard

:icon="service.icon"

:title="service.title"

:description="service.description"

:color="service.color"

/>

</div>

</div>

<div class="consultoria-footer">

<div class="row align-items-center">

<div class="col-lg-8">

<h3>

¿Necesitas asesoría tecnológica?

</h3>

<p>

Nuestro equipo analiza las necesidades de tu empresa para diseñar soluciones tecnológicas personalizadas que impulsen su crecimiento.

</p>

</div>

<div class="col-lg-4 text-lg-end">

<a
href="#contact-section"
class="btn btn-primary btn-lg"
>

Solicitar Asesoría

</a>

</div>

</div>

</div>

</section>

</template>

<style scoped>

.consultoria-section{

padding-top:20px;

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

h2{

font-size:2.4rem;

font-weight:800;

margin-bottom:20px;

color:#1b2940;

}

p{

color:#667085;

line-height:1.8;

}

.consultoria-footer{

margin-top:70px;

padding:45px;

border-radius:20px;

background:linear-gradient(135deg,#0d6efd,#0b5ed7);

color:white;

}

.consultoria-footer h3{

font-weight:700;

margin-bottom:15px;

}

.consultoria-footer p{

color:rgba(255,255,255,.85);

margin:0;

}

.consultoria-footer .btn{

padding:15px 35px;

border-radius:12px;

background:white;

color:#0d6efd;

border:none;

font-weight:700;

}

.consultoria-footer .btn:hover{

background:#f8f9fa;

}

@media(max-width:991px){

.consultoria-footer{

text-align:center;

}

.consultoria-footer .text-lg-end{

margin-top:30px;

text-align:center !important;

}

}

</style>