<script setup>
import {RouterView} from 'vue-router';
import NavbarVue from '@/components/NavbarVue.vue';
import Footer from "@/components/Footer.vue";


</script>


<template>
  <div>
    <NavbarVue/>
    <RouterView/>
    <Footer/>
  </div>
</template>


<style scoped>

</style>
