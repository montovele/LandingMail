<script setup>

import { computed } from "vue"

/* ============================================================
 * EMPRESA
 * ============================================================ */

const company = {

    name: "HENCOM",

    slogan: "Transformamos la tecnología en resultados.",

    phone: "+52 664 331 3817",

    whatsapp: "526643313817",

    email: "contacto@frontierexpertise.com"

}

/* ============================================================
 * HERO
 * ============================================================ */

const hero = {

    badge: "Soluciones Tecnológicas Empresariales",

    title: "Impulsamos la transformación digital de empresas mediante soluciones tecnológicas inteligentes.",

    subtitle:
        "Diseñamos, desarrollamos e implementamos soluciones de software, infraestructura y consultoría tecnológica que ayudan a las empresas a crecer, automatizar procesos y mejorar su competitividad.",

    primaryButton: {

        label: "Solicitar Asesoría",

        href: "#contact-section"

    },

    // secondaryButton: {

    //     label: "Explorar Soluciones",

    //     href: "#services-section"

    // }

}

/* ============================================================
 * SERVICIOS DESTACADOS
 * ============================================================ */

const services = [

    {

        title: "Consultoría TI",

        icon: "icon-briefcase",

        description:
            "Estrategias tecnológicas para impulsar el crecimiento empresarial."

    },

    {

        title: "Software Empresarial",

        icon: "icon-screen-desktop",

        description:
            "ERP, CRM, Punto de Venta y sistemas personalizados."

    },

    {

        title: "Comercio Electrónico",

        icon: "icon-globe",

        description:
            "Tiendas en línea, portales empresariales y plataformas B2B."

    },

    {

        title: "Infraestructura",

        icon: "icon-layers",

        description:
            "Redes, servidores, nube y virtualización."

    },

    {

        title: "Videovigilancia",

        icon: "icon-camrecorder",

        description:
            "CCTV profesional con monitoreo inteligente."

    },

    {

        title: "Ciberseguridad",

        icon: "icon-shield",

        description:
            "Protección de información e infraestructura crítica."

    }

]

/* ============================================================
 * INDICADORES
 * ============================================================ */

const stats = [

    {

        value: "100%",

        label: "Soluciones Personalizadas"

    },

    {

        value: "24/7",

        label: "Soporte Técnico"

    },

    {

        value: "360°",

        label: "Servicios Integrales"

    },

    {

        value: "ROI",

        label: "Enfoque en Resultados"

    }

]

/* ============================================================
 * TARJETAS TECNOLÓGICAS
 * ============================================================ */

const techCards = [

    {

        title: "ERP Empresarial",

        icon: "icon-grid",

        text: "Automatización de procesos"

    },

    {

        title: "Cloud Computing",

        icon: "icon-cloud",

        text: "Infraestructura escalable"

    },

    {

        title: "Business Intelligence",

        icon: "icon-graph",

        text: "Información para decisiones"

    },

    {

        title: "Redes Corporativas",

        icon: "icon-feed",

        text: "Conectividad segura"

    }

]

/* ============================================================
 * BENEFICIOS
 * ============================================================ */

const benefits = [

    "Automatización de procesos",

    "Incremento de productividad",

    "Reducción de costos operativos",

    "Infraestructura escalable",

    "Mayor seguridad informática",

    "Transformación digital"

]

/* ============================================================
 * MENSAJE WHATSAPP
 * ============================================================ */

const whatsappMessage = computed(() => {

    return encodeURIComponent(

`Hola ${company.name}.

Visité su sitio web y me interesa conocer más acerca de sus soluciones tecnológicas.

Me gustaría recibir asesoría personalizada.

Gracias.`

    )

})

/* ============================================================
 * ENLACE WHATSAPP
 * ============================================================ */

const whatsappUrl = computed(() => {

    return `https://wa.me/${company.whatsapp}?text=${whatsappMessage.value}`

})

/* ============================================================
 * CTA SECUNDARIOS
 * ============================================================ */

const quickActions = [

   

    // {

    //     title: "Nuestros Servicios",

    //     icon: "icon-grid",

    //     href: "#services-section"

    // }

]

/* ============================================================
 * FRASES ROTATIVAS (Preparado para futura animación)
 * ============================================================ */

const keywords = [

    "Software Empresarial",

    "Transformación Digital",

    "Infraestructura TI",

    "Cloud Computing",

    "Ciberseguridad",

    "Redes Corporativas",

    "ERP",

    "Desarrollo Web",

    "Consultoría"

]

</script>

<template>

<section
    id="home-section"
    class="hero-section"
>

    <!-- Fondo decorativo -->

    <div class="hero-background">

        <div class="hero-glow glow-left"></div>

        <div class="hero-glow glow-right"></div>

        <div class="hero-grid"></div>

    </div>

    <div class="container">

        <div class="row align-items-center">

            <!-- ===================================================== -->
            <!-- INFORMACIÓN -->
            <!-- ===================================================== -->

            <div class="col-lg-6">

                <div class="hero-content">

                    <!-- Badge -->

                    <div class="hero-badge">

                        <span class="icon-badge"></span>

                        {{ hero.badge }}

                    </div>

                    <!-- Título -->

                    <h1 class="hero-title">

                        {{ hero.title }}

                    </h1>

                    <!-- Descripción -->

                    <p class="hero-description">

                        {{ hero.subtitle }}

                    </p>

                    <!-- Beneficios -->

                    <div class="hero-benefits">

                        <div
                            v-for="benefit in benefits"
                            :key="benefit"
                            class="benefit-item"
                        >

                            <span class="icon-check-circle"></span>

                            {{ benefit }}

                        </div>

                    </div>

                    <!-- Botones -->

                    <div class="hero-buttons">

                        <a
                            :href="hero.primaryButton.href"
                            class="btn btn-primary btn-lg"
                        >

                            {{ hero.primaryButton.label }}

                        </a>

                        <!-- <a
                            :href="hero.secondaryButton.href"
                            class="btn btn-outline-primary btn-lg"
                        >

                            {{ hero.secondaryButton.label }}

                        </a> -->

                    </div>

                    <!-- Acciones rápidas -->

                    <div class="quick-actions">

                        <a
                            v-for="action in quickActions"
                            :key="action.title"
                            :href="action.href"
                            class="quick-action"
                            target="_blank"
                        >

                            <span :class="action.icon"></span>

                            {{ action.title }}

                        </a>

                    </div>

                    <!-- Estadísticas -->

                    <div class="hero-stats">

                        <div
                            v-for="stat in stats"
                            :key="stat.label"
                            class="stat-card"
                        >

                            <h3>

                                {{ stat.value }}

                            </h3>

                            <span>

                                {{ stat.label }}

                            </span>

                        </div>

                    </div>

                </div>

            </div>

            <!-- ===================================================== -->
            <!-- ILUSTRACIÓN -->
            <!-- ===================================================== -->

            <div class="col-lg-6">

                <div class="hero-visual">

                    <!-- Marca -->

                    <div class="brand-watermark">

                        <span>

                            FRONTIER

                        </span>

                    </div>

                    <!-- Imagen principal -->

                    <div class="hero-image">

                        <img
                            src="/images/hero-tech.png"
                            alt="HENCOM"
                            class="img-fluid"
                        >

                    </div>

                    <!-- Tarjeta -->

                    <div class="floating-card card-erp">

                        <div class="floating-icon">

                            <span class="icon-grid"></span>

                        </div>

                        <div>

                            <strong>

                                ERP Empresarial

                            </strong>

                            <p>

                                Automatización de procesos

                            </p>

                        </div>

                    </div>

                    <!-- Tarjeta -->

                    <div class="floating-card card-cloud">

                        <div class="floating-icon">

                            <span class="icon-cloud"></span>

                        </div>

                        <div>

                            <strong>

                                Cloud Computing

                            </strong>

                            <p>

                                Infraestructura escalable

                            </p>

                        </div>

                    </div>

                    <!-- Tarjeta -->

                    <div class="floating-card card-network">

                        <div class="floating-icon">

                            <span class="icon-feed"></span>

                        </div>

                        <div>

                            <strong>

                                Redes Empresariales

                            </strong>

                            <p>

                                Alta disponibilidad

                            </p>

                        </div>

                    </div>

                    <!-- Tarjeta -->

                    <div class="floating-card card-security">

                        <div class="floating-icon">

                            <span class="icon-shield"></span>

                        </div>

                        <div>

                            <strong>

                                Ciberseguridad

                            </strong>

                            <p>

                                Protección de la información

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

        <!-- ===================================================== -->
        <!-- SERVICIOS -->
        <!-- ===================================================== -->

        <div class="hero-services">

            <div
                v-for="service in services"
                :key="service.title"
                class="service-card"
            >

                <div class="service-icon">

                    <span :class="service.icon"></span>

                </div>

                <div class="service-info">

                    <h4>

                        {{ service.title }}

                    </h4>

                    <p>

                        {{ service.description }}

                    </p>

                </div>

            </div>

        </div>

    </div>

</section>

</template>

<style scoped>

/* ==========================================================
   HERO
========================================================== */

.hero-section{

    position:relative;

    overflow:hidden;

    padding:140px 0 80px;

    background:
        linear-gradient(
            180deg,
            #fbfdff 0%,
            #f5f9fd 45%,
            #edf4fb 100%
        );

}

/* ==========================================================
   FONDO
========================================================== */

.hero-background{

    position:absolute;

    inset:0;

    overflow:hidden;

    pointer-events:none;

    z-index:0;

}

/* Glow */

.hero-glow{

    position:absolute;

    border-radius:50%;

    filter:blur(90px);

    opacity:.65;

}

.glow-left{

    width:520px;

    height:520px;

    background:#5ab4ff;

    top:-180px;

    left:-180px;

}

.glow-right{

    width:600px;

    height:600px;

    background:#c7e5ff;

    bottom:-220px;

    right:-180px;

}

/* Grid */

.hero-grid{

    position:absolute;

    inset:0;

    background-image:

        linear-gradient(rgba(13,110,253,.04) 1px, transparent 1px),

        linear-gradient(90deg, rgba(13,110,253,.04) 1px, transparent 1px);

    background-size:40px 40px;

    mask-image:linear-gradient(to bottom,black,transparent);

}

/* ==========================================================
   CONTAINER
========================================================== */

.container{

    position:relative;

    z-index:5;

}

.hero-content{

    position:relative;

}

/* ==========================================================
   BADGE
========================================================== */

.hero-badge{

    display:inline-flex;

    align-items:center;

    gap:10px;

    padding:12px 22px;

    border-radius:999px;

    background:rgba(255,255,255,.85);

    border:1px solid rgba(13,110,253,.12);

    box-shadow:

        0 15px 35px rgba(13,110,253,.08);

    backdrop-filter:blur(12px);

    color:#0d6efd;

    font-weight:700;

    font-size:.92rem;

    margin-bottom:30px;

}

.hero-badge span{

    font-size:18px;

}

/* ==========================================================
   TITULO
========================================================== */

.hero-title{

    font-size:3.9rem;

    line-height:1.08;

    font-weight:900;

    color:#17324d;

    letter-spacing:-1.5px;

    margin-bottom:28px;

}

.hero-description{

    max-width:620px;

    font-size:1.18rem;

    line-height:1.9;

    color:#637487;

    margin-bottom:40px;

}

/* ==========================================================
   BENEFICIOS
========================================================== */

.hero-benefits{

    display:grid;

    grid-template-columns:repeat(2,1fr);

    gap:18px;

    margin-bottom:45px;

}

.benefit-item{

    display:flex;

    align-items:center;

    gap:14px;

    padding:14px 18px;

    background:white;

    border-radius:18px;

    border:1px solid #e7eef7;

    box-shadow:

        0 15px 35px rgba(23,50,77,.05);

    font-weight:600;

    color:#31465c;

    transition:.35s;

}

.benefit-item:hover{

    transform:translateY(-5px);

    border-color:#0d6efd;

    box-shadow:

        0 20px 40px rgba(13,110,253,.12);

}

.benefit-item span{

    font-size:22px;

    color:#0d6efd;

}

/* ==========================================================
   BOTONES
========================================================== */

.hero-buttons{

    display:flex;

    align-items:center;

    flex-wrap:wrap;

    gap:18px;

    margin-top:10px;

}

.hero-buttons .btn{

    padding:15px 32px;

    border-radius:14px;

    font-weight:700;

    font-size:1rem;

    transition:.35s;

}

.hero-buttons .btn-primary{

    box-shadow:

        0 20px 45px rgba(13,110,253,.28);

}

.hero-buttons .btn-primary:hover{

    transform:translateY(-4px);

}

.hero-buttons .btn-outline-primary{

    border-width:2px;

}

.hero-buttons .btn-outline-primary:hover{

    transform:translateY(-4px);

}

/* ==========================================================
   ACCIONES
========================================================== */

.quick-actions{

    display:flex;

    flex-wrap:wrap;

    gap:15px;

    margin-top:35px;

}

.quick-action{

    display:flex;

    align-items:center;

    gap:10px;

    padding:12px 18px;

    border-radius:14px;

    text-decoration:none;

    color:#4b6178;

    background:rgba(255,255,255,.85);

    border:1px solid #e6edf7;

    transition:.30s;

}

.quick-action:hover{

    color:#0d6efd;

    transform:translateY(-4px);

    border-color:#0d6efd;

    box-shadow:

        0 15px 35px rgba(13,110,253,.12);

}

.quick-action span{

    font-size:18px;

}

/* ==========================================================
   ESTADISTICAS
========================================================== */

.hero-stats{

    display:grid;

    grid-template-columns:repeat(4,1fr);

    gap:22px;

    margin-top:65px;

}

.stat-card{

    background:white;

    border-radius:22px;

    padding:28px 22px;

    text-align:center;

    border:1px solid #e7eef7;

    box-shadow:

        0 18px 40px rgba(20,45,75,.06);

    transition:.35s;

}

.stat-card:hover{

    transform:translateY(-8px);

    border-color:#0d6efd;

    box-shadow:

        0 25px 55px rgba(13,110,253,.15);

}

.stat-card h3{

    margin:0;

    font-size:2.3rem;

    font-weight:900;

    color:#0d6efd;

}

.stat-card span{

    display:block;

    margin-top:12px;

    color:#6b7c8e;

    line-height:1.5;

    font-size:.95rem;

}

/* ==========================================================
   VISUAL HERO
========================================================== */

.hero-visual{

    position:relative;

    min-height:720px;

    display:flex;

    align-items:center;

    justify-content:center;

}

/* ==========================================================
   MARCA DE AGUA
========================================================== */

.brand-watermark{

    position:absolute;

    inset:0;

    display:flex;

    justify-content:center;

    align-items:center;

    pointer-events:none;

    user-select:none;

}

.brand-watermark span{

    font-size:8rem;

    font-weight:900;

    letter-spacing:12px;

    color:#0d6efd;

    opacity:.035;

    white-space:nowrap;

}

/* ==========================================================
   IMAGEN PRINCIPAL
========================================================== */

.hero-image{

    position:relative;

    z-index:5;

    width:100%;

    max-width:650px;

    animation:heroFloat 8s ease-in-out infinite;


}

.hero-image img{

    width:100%;

    display:block;

    filter:

        drop-shadow(0 35px 60px rgba(13,110,253,.18));
            border-radius: 20px;

}

/* ==========================================================
   TARJETAS FLOTANTES
========================================================== */

.floating-card{

    position:absolute;

    display:flex;

    align-items:center;

    gap:18px;

    padding:18px 22px;

    min-width:250px;

    background:rgba(255,255,255,.82);

    backdrop-filter:blur(18px);

    border:1px solid rgba(255,255,255,.55);

    border-radius:22px;

    box-shadow:

        0 25px 60px rgba(15,45,75,.10);

    z-index:20;

    transition:.35s;

}

.floating-card:hover{

    transform:translateY(-8px);

    box-shadow:

        0 35px 70px rgba(13,110,253,.18);

}

.floating-icon{

    width:58px;

    height:58px;

    border-radius:18px;

    background:linear-gradient(
        135deg,
        #0d6efd,
        #5cb6ff
    );

    color:white;

    display:flex;

    align-items:center;

    justify-content:center;

    font-size:24px;

    flex-shrink:0;

}

.floating-card strong{

    display:block;

    color:#183153;

    font-size:1rem;

    margin-bottom:5px;

}

.floating-card p{

    margin:0;

    color:#718397;

    font-size:.90rem;

    line-height:1.5;

}

/* ==========================================================
   POSICIONES
========================================================== */

.card-erp{

    top:30px;

    left:-30px;

    animation:cardFloat1 7s ease-in-out infinite;

}

.card-cloud{

    top:120px;

    right:-40px;

    animation:cardFloat2 9s ease-in-out infinite;

}

.card-network{

    bottom:130px;

    left:-10px;

    animation:cardFloat3 8s ease-in-out infinite;

}

.card-security{

    bottom:25px;

    right:-30px;

    animation:cardFloat4 10s ease-in-out infinite;

}

/* ==========================================================
   SERVICIOS
========================================================== */

.hero-services{

    display:grid;

    grid-template-columns:repeat(3,1fr);

    gap:25px;

    margin-top:90px;

}

.service-card{

    display:flex;

    gap:22px;

    align-items:flex-start;

    background:white;

    border-radius:24px;

    padding:28px;

    border:1px solid #e7eef7;

    transition:.35s;

    box-shadow:

        0 18px 45px rgba(25,45,75,.05);

}

.service-card:hover{

    transform:translateY(-10px);

    border-color:#0d6efd;

    box-shadow:

        0 30px 65px rgba(13,110,253,.12);

}

.service-icon{

    width:70px;

    height:70px;

    border-radius:20px;

    background:linear-gradient(
        135deg,
        #0d6efd,
        #65b9ff
    );

    display:flex;

    justify-content:center;

    align-items:center;

    color:white;

    font-size:30px;

    flex-shrink:0;

}

.service-info h4{

    margin:0 0 12px;

    color:#183153;

    font-size:1.15rem;

    font-weight:800;

}

.service-info p{

    margin:0;

    color:#708295;

    line-height:1.7;

}

/* ==========================================================
   ANIMACIONES
========================================================== */

@keyframes heroFloat{

    0%{

        transform:translateY(0);

    }

    50%{

        transform:translateY(-15px);

    }

    100%{

        transform:translateY(0);

    }

}

@keyframes cardFloat1{

    0%,100%{

        transform:translateY(0);

    }

    50%{

        transform:translateY(-12px);

    }

}

@keyframes cardFloat2{

    0%,100%{

        transform:translateY(0);

    }

    50%{

        transform:translateY(10px);

    }

}

@keyframes cardFloat3{

    0%,100%{

        transform:translateY(0);

    }

    50%{

        transform:translateY(-10px);

    }

}

@keyframes cardFloat4{

    0%,100%{

        transform:translateY(0);

    }

    50%{

        transform:translateY(14px);

    }

}

/* ==========================================================
   RESPONSIVE
========================================================== */

@media(max-width:1400px){

    .hero-title{

        font-size:3.4rem;

    }

}

@media(max-width:1199px){

    .hero-services{

        grid-template-columns:repeat(2,1fr);

    }

    .hero-stats{

        grid-template-columns:repeat(2,1fr);

    }

    .floating-card{

        transform:scale(.92);

    }

}

@media(max-width:991px){

    .hero-section{

        padding:100px 0 70px;

    }

    .hero-content{

        text-align:center;

    }

    .hero-title{

        font-size:2.8rem;

    }

    .hero-description{

        margin-left:auto;

        margin-right:auto;

    }

    .hero-benefits{

        grid-template-columns:1fr;

    }

    .hero-buttons{

        justify-content:center;

    }

    .quick-actions{

        justify-content:center;

    }

    .hero-stats{

        margin-top:50px;

    }

    .hero-visual{

        margin-top:80px;

        min-height:580px;

    }

    .floating-card{

        position:relative;

        left:auto;

        right:auto;

        top:auto;

        bottom:auto;

        margin:18px auto;

        width:90%;

        animation:none;

    }

    .brand-watermark span{

        font-size:5rem;

    }

    .hero-services{

        grid-template-columns:1fr;

        margin-top:70px;

    }

}

@media(max-width:576px){

    .hero-title{

        font-size:2.2rem;

    }

    .hero-badge{

        font-size:.85rem;

    }

    .hero-buttons .btn{

        width:100%;

    }

    .quick-action{

        width:100%;

        justify-content:center;

    }

    .hero-stats{

        grid-template-columns:1fr;

    }

    .stat-card{

        padding:24px;

    }

    .service-card{

        flex-direction:column;

        text-align:center;

        align-items:center;

    }

    .service-icon{

        margin-bottom:10px;

    }

}

</style>

