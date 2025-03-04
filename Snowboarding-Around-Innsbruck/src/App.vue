<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navbar -->
    <header class="w-full text-white shadow">
      <CustomNavbar />
    </header>

    <!-- Content -->
    <main class="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="w-full bg-gray-800 text-white py-4 text-center text-sm">
      &copy; {{ new Date().getFullYear() }} Your Company. All rights reserved.
    </footer>
  </div>
</template>

<script setup>
import CustomNavbar from "@/components/Navbar.vue";
import { watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

watch(route, () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
</script>

<style scoped>
/* Add global overrides or additional styles here if needed */
</style>
