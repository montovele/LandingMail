<script setup>
import { computed } from "vue";

const props = defineProps({
  icon: {
    type: String,
    default: "icon-layers",
  },

  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  color: {
    type: String,
    default: "#0d6efd",
  },

  buttonText: {
    type: String,
    default: "Conocer más",
  },

  href: {
    type: String,
    default: "#contact-section",
  },

  badge: {
    type: String,
    default: "",
  },

  delay: {
    type: Number,
    default: 0,
  },

  hover: {
    type: Boolean,
    default: true,
  },
});

const cardStyle = computed(() => ({
  "--card-color": props.color,
}));
</script>

<template>
  <div
    class="service-card"
    :class="{ 'service-card-hover': hover }"
    :style="cardStyle"
    data-aos="fade-up"
    :data-aos-delay="delay"
  >
    <!-- Badge -->

    <div
      v-if="badge"
      class="service-badge"
    >
      {{ badge }}
    </div>

    <!-- Icono -->

    <div class="service-icon">

      <span :class="icon"></span>

    </div>

    <!-- Contenido -->

    <div class="service-content">

      <h3>

        {{ title }}

      </h3>

      <p>

        {{ description }}

      </p>

    </div>

    <!-- Footer -->

    <div class="service-footer">

      <a :href="href">

        {{ buttonText }}

        <span class="ml-2">

            →

        </span>

      </a>

    </div>

  </div>
</template>
<style scoped>

.service-card{

    position:relative;

    display:flex;

    flex-direction:column;

    justify-content:space-between;

    background:#1e293b;

    border-radius:20px;

    padding:35px;

    height:100%;

    border:1px solid rgba(255,255,255,.08);

    box-shadow:0 10px 35px rgba(0,0,0,.35);

    transition:all .35s ease;

    overflow:hidden;

}

.service-card-hover:hover{

    transform:translateY(-8px);

    border-color:rgba(56,189,248,.3);

    box-shadow:0 20px 60px rgba(0,0,0,.5);

}

.service-card::before{

    content:"";

    position:absolute;

    top:0;

    left:0;

    width:100%;

    height:5px;

    background:var(--card-color);

}

.service-badge{

    position:absolute;

    right:20px;

    top:20px;

    background:rgba(56,189,248,.12);

    color:var(--card-color);

    padding:5px 12px;

    border-radius:30px;

    font-size:.75rem;

    font-weight:700;

    border:1px solid rgba(56,189,248,.2);

}

.service-icon{

    width:72px;

    height:72px;

    border-radius:18px;

    display:flex;

    justify-content:center;

    align-items:center;

    background:rgba(56,189,248,.12);

    color:var(--card-color);

    font-size:32px;

    margin-bottom:30px;

    border:1px solid rgba(56,189,248,.15);

}

.service-content{

    flex:1;

}

.service-content h3{

    font-size:1.45rem;

    font-weight:800;

    color:#f8fafc;

    margin-bottom:18px;

}

.service-content p{

    color:#94a3b8;

    line-height:1.8;

    margin-bottom:35px;

}

.service-footer{

    margin-top:auto;

}

.service-footer a{

    display:inline-flex;

    align-items:center;

    text-decoration:none;

    color:var(--card-color);

    font-weight:700;

    transition:.3s;

}

.service-footer a:hover{

    letter-spacing:.5px;

}

@media(max-width:991px){

.service-card{

padding:30px;

}

}

@media(max-width:576px){

.service-card{

padding:25px;

}

.service-content h3{

font-size:1.25rem;

}

}

</style>