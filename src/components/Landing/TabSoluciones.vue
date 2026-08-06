<script setup>
import ServiceCard from "./ServiceCard.vue";

const software = [
  {
    icon: "icon-layers",
    title: "ERP Empresarial",
    description:
      "Centraliza ventas, compras, inventarios y clientes en una única plataforma.",
    color: "#0d6efd",
  },
  {
    icon: "icon-shopping-cart",
    title: "Punto de Venta",
    description:
      "Controla ventas, cajas, productos y existencias en tiempo real.",
    color: "#198754",
  },
  {
    icon: "icon-archive",
    title: "Inventarios",
    description:
      "Administra existencias, almacenes y movimientos de productos.",
    color: "#6f42c1",
  },
  {
    icon: "icon-file-text",
    title: "Facturación Electrónica",
    description:
      "Emite CFDI 4.0 y administra comprobantes fiscales de forma sencilla.",
    color: "#fd7e14",
  },
];

const desarrollo = [
  {
    icon: "icon-monitor",
    title: "Sitios Web",
    description:
      "Diseño y desarrollo de páginas web modernas y adaptables.",
    color: "#20c997",
  },
  {
    icon: "icon-shopping-bag",
    title: "E-Commerce",
    description:
      "Tiendas en línea integradas con inventarios, pagos y logística.",
    color: "#0dcaf0",
  },
  {
    icon: "icon-bar-chart",
    title: "SEO",
    description:
      "Optimización para buscadores que mejora la visibilidad de tu empresa.",
    color: "#ffc107",
  },
  {
    icon: "icon-code",
    title: "Sistemas Web",
    description:
      "Desarrollamos plataformas empresariales totalmente personalizadas.",
    color: "#6610f2",
  },
];

const infraestructura = [
  {
    icon: "icon-camera",
    title: "Videovigilancia CCTV",
    description:
      "Implementación de cámaras IP, monitoreo remoto y grabación.",
    color: "#dc3545",
  },
  {
    icon: "icon-wifi",
    title: "Redes Empresariales",
    description:
      "Infraestructura LAN, WiFi y enlaces para empresas.",
    color: "#198754",
  },
  {
    icon: "icon-server",
    title: "Servidores",
    description:
      "Implementación y administración de servidores empresariales.",
    color: "#0d6efd",
  },
  {
    icon: "icon-database",
    title: "Respaldos",
    description:
      "Estrategias de respaldo y recuperación de información crítica.",
    color: "#6f42c1",
  },
];
</script>

<template>

<section class="solutions">

    <div class="text-center mb-5">

        <span class="section-tag">

            Soluciones Empresariales

        </span>

        <h2>

            Tecnología diseñada para impulsar tu empresa

        </h2>

        <p>

            Integramos soluciones tecnológicas completas que optimizan
            procesos, incrementan la productividad y fortalecen
            la infraestructura de tu organización.

        </p>

    </div>

    <!-- Software -->

    <div class="category">

        <h3>Software Empresarial</h3>

        <div class="row g-4">

            <div
                class="col-lg-3 col-md-6"
                v-for="item in software"
                :key="item.title"
            >

                <ServiceCard v-bind="item"/>

            </div>

        </div>

    </div>

    <!-- Desarrollo -->

    <div class="category">

        <h3>Desarrollo Web</h3>

        <div class="row g-4">

            <div
                class="col-lg-3 col-md-6"
                v-for="item in desarrollo"
                :key="item.title"
            >

                <ServiceCard v-bind="item"/>

            </div>

        </div>

    </div>

    <!-- Infraestructura -->

    <div class="category">

        <h3>Infraestructura Tecnológica</h3>

        <div class="row g-4">

            <div
                class="col-lg-3 col-md-6"
                v-for="item in infraestructura"
                :key="item.title"
            >

                <ServiceCard v-bind="item"/>

            </div>

        </div>

    </div>

    <div class="solution-banner">

        <div class="row align-items-center">

            <div class="col-lg-8">

                <h3>

                    Soluciones integrales para empresas modernas

                </h3>

                <p>

                    Diseñamos proyectos tecnológicos a la medida,
                    integrando software, infraestructura y soporte
                    especializado para acompañar el crecimiento de tu empresa.

                </p>

            </div>

            <div class="col-lg-4 text-lg-end">

                <a
                    href="#contact-section"
                    class="btn btn-light btn-lg"
                >

                    Solicitar Proyecto

                </a>

            </div>

        </div>

    </div>

</section>

</template>
<style scoped>

.solutions{

padding-top:20px;

/* Añadido fondo oscuro para dar contraste a los textos claros */
background: #0b1220;

/* Aseguramos relleno adecuado y color base */
padding-bottom: 50px;

color: #f8fafc;

}

.category{

margin-bottom:70px;

}

.category h3{

font-size:2rem;

font-weight:800;

margin-bottom:35px;

color:#f8fafc;

padding-left:15px;

border-left:5px solid #38bdf8;

}

.section-tag{

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

.solution-banner{

margin-top:70px;

padding:50px;

border-radius:20px;

background:linear-gradient(

    135deg,

    #0f172a 0%,

    #1e293b 100%

);

border:1px solid rgba(56,189,248,.25);

box-shadow:0 20px 50px rgba(0,0,0,.4);

color:#f8fafc;

}

.solution-banner h3{

font-weight:700;

margin-bottom:20px;

color:#ffffff;

}

.solution-banner p{

color:#94a3b8;

}

</style>