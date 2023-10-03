 
<script setup>
 import Navbar from './components/Navbar.vue';
 </script>

<template>
  <div class="container mx-auto">
    <div class="flex items-center h-[70px]">
      <Navbar />
    </div>
    <div>
      <router-view />
    </div>
  </div>
 </template>
 
 <style scoped>
 </style>
 