<script setup>

const stats = [

{

value:"+150",

label:"Proyectos Implementados",

icon:"icon-briefcase"

},

{

value:"10+",

label:"Años de Experiencia",

icon:"icon-calendar"

},

{

value:"24/7",

label:"Soporte Especializado",

icon:"icon-headset"

},

{

value:"100%",

label:"Soluciones Personalizadas",

icon:"icon-star"

}

]

</script>

<template>

<section class="stats-section">

<div class="container">

<div class="text-center mb-5">

<span class="stats-badge">

Nuestra Experiencia

</span>

<h2>

Resultados que respaldan nuestro trabajo

</h2>

<p>

Cada proyecto representa nuestro compromiso por ofrecer soluciones tecnológicas confiables, escalables y orientadas al crecimiento empresarial.

</p>

</div>

<div class="row g-4">

<div

v-for="item in stats"

:key="item.label"

class="col-lg-3 col-md-6"

>

<div class="stat-card">

<div class="stat-icon">

<span :class="item.icon"></span>

</div>

<h3>

{{ item.value }}

</h3>

<p>

{{ item.label }}

</p>

</div>

</div>

</div>

</div>

</section>

</template>
<style scoped>

.stats-section{

padding:80px 0;

/* Fondo oscuro principal para asegurar contraste general */
background: #0b1220;

color: #f8fafc;

}

.stats-badge{

display:inline-block;

padding:8px 18px;

background:rgba(30,41,59,.75);

border:1px solid rgba(56,189,248,.25);

border-radius:30px;

color:#38bdf8;

font-weight:700;

margin-bottom:20px;

backdrop-filter:blur(10px);

}

.stats-section h2{

font-size:2.5rem;

font-weight:800;

color:#f8fafc;

margin-bottom:20px;

}

.stats-section p{

color:#94a3b8;

line-height:1.8;

}

.stat-card{

background:#1e293b;

padding:45px 30px;

border-radius:20px;

text-align:center;

height:100%;

border:1px solid rgba(255,255,255,.08);

box-shadow:0 12px 35px rgba(0,0,0,.35);

transition:.35s;

}

.stat-card:hover{

transform:translateY(-8px);

border-color:rgba(56,189,248,.3);

box-shadow:0 20px 50px rgba(56,189,248,.18);

}

.stat-icon{

width:75px;

height:75px;

margin:auto;

margin-bottom:25px;

display:flex;

align-items:center;

justify-content:center;

border-radius:18px;

background:rgba(56,189,248,.12);

color:#38bdf8;

font-size:34px;

border:1px solid rgba(56,189,248,.2);

}

.stat-card h3{

font-size:3rem;

font-weight:800;

color:#38bdf8;

margin-bottom:10px;

}

.stat-card p{

font-size:16px;

margin:0;

font-weight:600;

color:#cbd5e1;

}

@media(max-width:991px){

.stats-section{

text-align:center;

}

}

</style>