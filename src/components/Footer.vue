<script setup>

const company = {

    name: "HENCOM",

    slogan: "Transformamos la tecnología en resultados.",

    phone: "+52 (664) 331-3817",

    email: "contacto@frontierexpertise.com",

    location: "Tijuana, Baja California"

}

const companyLinks = [

    {
        label:"Inicio",
        href:"#home-section"
    },

    {
        label:"Consultoría",
        href:"#services-section"
    },

    {
        label:"Soluciones",
        href:"#services-section"
    },

    {
        label:"Nosotros",
        href:"#services-section"
    },

    {
        label:"Contacto",
        href:"#contact-section"
    }

]

const services = [

    "Consultoría TI",

    "ERP Empresarial",

    "Punto de Venta",

    "Facturación Electrónica",

    "Desarrollo Web",

    "E-Commerce",

    "Videovigilancia",

    "Infraestructura"

]

const social = [

{

icon:"icon-facebook",

href:"#"

},

{

icon:"icon-linkedin",

href:"#"

},

{

icon:"icon-whatsapp",

href:"#"

},

{

icon:"icon-instagram",

href:"#"

}

]

const year = new Date().getFullYear()

</script>

<template>

<footer class="footer">

<div class="container">

<div class="row gy-5">

<!-- Empresa -->

<div class="col-lg-4">

<h3>

{{ company.name }}

</h3>

<p>

{{ company.slogan }}

</p>

<div class="social">

<a

v-for="item in social"

:key="item.icon"

:href="item.href"

>

<span :class="item.icon"></span>

</a>

</div>

</div>

<!-- Navegación -->

<div class="col-lg-3">

<h5>

Empresa

</h5>

<ul>

<li

v-for="item in companyLinks"

:key="item.label"

>

<a :href="item.href">

{{ item.label }}

</a>

</li>

</ul>

</div>

<!-- Servicios -->

<div class="col-lg-3">

<h5>

Soluciones

</h5>

<ul>

<li

v-for="item in services"

:key="item"

>

{{ item }}

</li>

</ul>

</div>

<!-- Contacto -->

<div class="col-lg-2">

<h5>

Contacto

</h5>

<ul class="contact-list">

<li>

<span class="icon-phone"></span>

{{ company.phone }}

</li>

<li>

<span class="icon-envelope"></span>

{{ company.email }}

</li>

<li>

<span class="icon-location-pin"></span>

{{ company.location }}

</li>

</ul>

</div>

</div>

<hr>

<div class="footer-bottom">

<p>

© {{ year }}

<strong>

{{ company.name }}

</strong>

Todos los derechos reservados.

</p>

</div>

</div>

</footer>

</template>

<style scoped>
.footer{

    background:#f5f9fc;

    color:#23354d;

    padding:90px 0 40px;

    border-top:1px solid #dbe6f2;

}

.footer h3{

    color:#183153;

    font-weight:800;

    margin-bottom:20px;

}

.footer h5{

    color:#183153;

    font-weight:700;

    margin-bottom:25px;

}

.footer p{

    color:#60758d;

    line-height:1.8;

}

.footer ul{

    list-style:none;

    padding:0;

    margin:0;

}

.footer li{

    margin-bottom:14px;

    color:#60758d;

}

.footer a{

    color:#60758d;

    text-decoration:none;

    transition:.30s;

}

.footer a:hover{

    color:#0d6efd;

}

.contact-list span{

    color:#0d6efd;

    width:24px;

    display:inline-block;

    margin-right:10px;

}
hr{

    border:none;

    height:1px;

    background:#d9e5f1;

    margin:60px 0 30px;

}

.footer-bottom{

text-align:center;

}

.footer-bottom p{

margin:0;

font-size:15px;

color:rgba(255,255,255,.65);

}

@media(max-width:991px){

.footer{

text-align:center;

}

.social{

    display:flex;

    gap:15px;

    margin-top:30px;

}

.social a{

    width:48px;

    height:48px;

    border-radius:14px;

    background:white;

    color:#0d6efd;

    display:flex;

    justify-content:center;

    align-items:center;

    font-size:20px;

    border:1px solid #dce7f3;

    transition:.30s;

    box-shadow:0 8px 18px rgba(13,110,253,.08);

}

.social a:hover{

    background:#0d6efd;

    color:white;

    transform:translateY(-5px);

}

}

</style>