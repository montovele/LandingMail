<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const visible = ref(false);

const toggleVisibility = () => {
  visible.value = window.scrollY > 500;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", toggleVisibility);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", toggleVisibility);
});
</script>

<template>
  <Transition name="back-top">
    <button
      v-if="visible"
      class="back-to-top"
      @click="scrollToTop"
      aria-label="Volver arriba"
    >
      <span class="icon-keyboard_arrow_up"></span>
    </button>
  </Transition>
</template>

<style scoped>

.back-to-top{

position:fixed;

right:30px;

bottom:30px;

width:58px;

height:58px;

border:none;

border-radius:18px;

background:linear-gradient(135deg,#0d6efd,#2563eb);

color:white;

font-size:24px;

cursor:pointer;

box-shadow:0 15px 35px rgba(13,110,253,.35);

display:flex;

align-items:center;

justify-content:center;

z-index:9999;

transition:.35s;

}

.back-to-top:hover{

transform:translateY(-6px);

box-shadow:0 20px 45px rgba(13,110,253,.45);

}

.back-top-enter-active,
.back-top-leave-active{

transition:.35s;

}

.back-top-enter-from,
.back-top-leave-to{

opacity:0;

transform:translateY(20px);

}

@media(max-width:768px){

.back-to-top{

width:52px;

height:52px;

right:18px;

bottom:18px;

}

}

</style>