<script setup>

const benefits = [

{

icon:"icon-check-circle",

text:"Diagnóstico tecnológico personalizado"

},

{

icon:"icon-check-circle",

text:"Consultoría especializada para PyMES y empresas"

},

{

icon:"icon-check-circle",

text:"Implementación de soluciones integrales"

}

]

</script>

<template>

<section class="cta-section">

<div class="container">

<div
class="cta-card"
data-aos="zoom-in"
>

<div class="row align-items-center">

<div class="col-lg-7">

<span class="cta-badge">

Comienza Hoy

</span>

<h2>

¿Listo para transformar tu empresa con tecnología?

</h2>

<p>

Nuestro equipo de especialistas está preparado para ayudarte a
optimizar procesos, fortalecer tu infraestructura tecnológica e
implementar soluciones que impulsen el crecimiento de tu negocio.

</p>

<ul class="cta-list">

<li
v-for="item in benefits"
:key="item.text"
>

<span :class="item.icon"></span>

{{ item.text }}

</li>

</ul>

</div>

<div class="col-lg-5 text-center">

<div class="cta-buttons">

<a
href="#contact-section"
class="btn btn-primary btn-lg"
>

Solicitar Cotización

</a>

<a
href="#contact-section"
class="btn btn-outline-primary btn-lg"
>

Agendar Asesoría

</a>

</div>

</div>

</div>

</div>

</div>

</section>

</template>

<style scoped>

.cta-section{

padding:120px 0;

background:linear-gradient(180deg,#f8fbff 0%,#eef5ff 100%);

}

.cta-card{

background:#ffffff;

border-radius:28px;

padding:70px;

box-shadow:0 30px 80px rgba(0,0,0,.08);

position:relative;

overflow:hidden;

}

.cta-card::before{

content:"";

position:absolute;

top:0;

left:0;

width:100%;

height:8px;

background:linear-gradient(90deg,#0d6efd,#20c997);

}

.cta-badge{

display:inline-block;

padding:8px 18px;

border-radius:30px;

background:#eef5ff;

color:#0d6efd;

font-weight:700;

margin-bottom:25px;

}

.cta-card h2{

font-size:2.6rem;

font-weight:800;

color:#1b2940;

margin-bottom:25px;

line-height:1.2;

}

.cta-card p{

font-size:17px;

line-height:1.9;

color:#667085;

margin-bottom:35px;

}

.cta-list{

list-style:none;

padding:0;

margin:0;

}

.cta-list li{

display:flex;

align-items:center;

margin-bottom:18px;

font-size:17px;

font-weight:600;

color:#374151;

}

.cta-list span{

font-size:22px;

margin-right:15px;

color:#0d6efd;

}

.cta-buttons{

display:flex;

flex-direction:column;

gap:20px;

justify-content:center;

height:100%;

}

.cta-buttons .btn{

padding:16px 35px;

font-size:17px;

font-weight:700;

border-radius:14px;

transition:.3s;

}

.btn-primary{

box-shadow:0 15px 40px rgba(13,110,253,.25);

}

.btn-primary:hover{

transform:translateY(-3px);

}

.btn-outline-primary:hover{

transform:translateY(-3px);

}

@media(max-width:991px){

.cta-card{

padding:45px;

text-align:center;

}

.cta-list li{

justify-content:center;

}

.cta-buttons{

margin-top:40px;

}

.cta-card h2{

font-size:2rem;

}

}

@media(max-width:576px){

.cta-card{

padding:30px;

}

.cta-card h2{

font-size:1.7rem;

}

}

</style>