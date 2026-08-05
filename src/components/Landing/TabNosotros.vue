<script setup>
import ServiceCard from "./ServiceCard.vue";
import StatsSection from "./StatsSection.vue";

const advantages = [
  {
    icon: "icon-award",
    title: "Experiencia Comprobada",
    description:
      "Participamos en proyectos tecnológicos para empresas, integrando soluciones modernas y escalables.",
    color: "#0d6efd",
  },
  {
    icon: "icon-puzzle-piece",
    title: "Soluciones Personalizadas",
    description:
      "Cada proyecto es diseñado considerando las necesidades específicas de nuestros clientes.",
    color: "#20c997",
  },
  {
    icon: "icon-cpu",
    title: "Tecnología de Última Generación",
    description:
      "Trabajamos con herramientas y plataformas modernas para garantizar resultados confiables.",
    color: "#6610f2",
  },
  {
    icon: "icon-headset",
    title: "Soporte Especializado",
    description:
      "Nuestro equipo brinda acompañamiento antes, durante y después de cada implementación.",
    color: "#fd7e14",
  },
  {
    icon: "icon-building",
    title: "Enfoque Empresarial",
    description:
      "Atendemos PyMES, comercios y empresas que buscan optimizar su operación mediante tecnología.",
    color: "#198754",
  },
  {
    icon: "icon-rocket",
    title: "Transformación Digital",
    description:
      "Impulsamos la innovación mediante soluciones que mejoran la productividad y competitividad.",
    color: "#dc3545",
  },
];
</script>

<template>
  <section class="about-section">

    <div class="row justify-content-center mb-5">

      <div class="col-lg-8 text-center">

        <span class="section-tag">
          Sobre Nosotros
        </span>

        <h2>
          ¿Por qué elegir HENCOM?
        </h2>

        <p>
          Somos un aliado tecnológico comprometido con el crecimiento de
          nuestros clientes. Diseñamos soluciones innovadoras que integran
          consultoría, infraestructura, desarrollo de software y soporte
          especializado para impulsar la transformación digital de las
          empresas.
        </p>

      </div>

    </div>

    <div class="row g-4">

      <div
        v-for="item in advantages"
        :key="item.title"
        class="col-lg-4 col-md-6"
      >

        <ServiceCard
          :icon="item.icon"
          :title="item.title"
          :description="item.description"
          :color="item.color"
          button-text="Más información"
        />

      </div>

    </div>

    <StatsSection />

  </section>
</template>

<style scoped>

.about-section{

    padding-top:20px;

}

.section-tag{

    display:inline-block;

    padding:8px 18px;

    border-radius:30px;

    background:#eef5ff;

    color:#0d6efd;

    font-weight:700;

    margin-bottom:20px;

}

.about-section h2{

    font-size:2.5rem;

    font-weight:800;

    color:#1b2940;

    margin-bottom:25px;

}

.about-section p{

    color:#667085;

    line-height:1.9;

    font-size:17px;

    max-width:900px;

    margin:auto;

}

</style>