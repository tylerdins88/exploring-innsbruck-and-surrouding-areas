<template>
    <fwb-navbar class="bg-gray-400 text-black">
      <template #default="{ isShowMenu }">
        <fwb-navbar-collapse :is-show-menu="isShowMenu" class="text-black">
          <fwb-navbar-link :style="{ color: isActive('/') ? 'blue' : 'black' }" link="/" class="text-black hover:text-gray-700">
            Home
          </fwb-navbar-link>
          <fwb-navbar-link :style="{ color: isActive('/travel') ? 'blue' : 'black' }" link="/travel" class="text-black hover:text-gray-700">
            Travel
          </fwb-navbar-link>
          <fwb-navbar-link :style="{ color: isActive('/resorts') ? 'blue' : 'black' }" link="/resorts" class="text-black hover:text-gray-700">
            Snow Resorts
          </fwb-navbar-link>
          <fwb-navbar-link :style="{ color: isActive('/places') ? 'blue' : 'black' }" link="/places" class="text-black hover:text-gray-700">
            Hotspots
          </fwb-navbar-link>
          <fwb-navbar-link :style="{ color: isActive('/accommdations') ? 'blue' : 'black' }" link="/accommdations" class="text-black hover:text-gray-700">
            Accommodations
          </fwb-navbar-link>
        </fwb-navbar-collapse>
      </template>
    </fwb-navbar>
  </template>
  
  
  <script setup>
  import { FwbNavbar, FwbNavbarCollapse, FwbNavbarLink } from 'flowbite-vue';
  import { useRoute } from 'vue-router';
  // import austriaFlag from "./assets/austria-flag-map.jpg";
  
  const route = useRoute();
  
  const isActive = (path) => {
    return route.path === path;
  }
  </script>
  
  <style scoped>

  /* Further emphasize hover states as well */
  .fwb-navbar-link[aria-current="page"]:hover {
    color: #690500; 
  }
  </style>