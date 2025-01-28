<template>
  <div class="flex justify-center items-center">
    <!-- Container for the flag and navbar -->
    <div class="relative w-full max-w-xl">
      <!-- Austrian Flag -->
      <img
        src="@/assets/austria-flag-map.jpg"
        alt="Austrian Flag"
        class="w-full h-auto object-cover rounded-md shadow-md"
      />

      <!-- Navbar -->
      <div class="absolute inset-0 flex items-center justify-center">
        <fwb-navbar class="p-2 bg-white bg-opacity-80 backdrop-blur-md rounded-lg shadow-md">
          <template #default="{ isShowMenu }">
            <!-- Navbar Links -->
            <fwb-navbar-collapse
              :is-show-menu="isShowMenu"
              class="flex flex-col md:flex-row md:space-x-4 items-center"
            >
              <fwb-navbar-link
                v-for="link in navLinks"
                :key="link.path"
                :style="{ color: isActive(link.path) ? 'blue' : '#333' }"
                :link="link.path"
                class="hover:text-blue-500 text-center py-1 md:py-0 text-sm font-medium"
              >
                {{ link.label }}
              </fwb-navbar-link>
            </fwb-navbar-collapse>
          </template>
        </fwb-navbar>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FwbNavbar, FwbNavbarCollapse, FwbNavbarLink } from "flowbite-vue";
import { useRoute } from "vue-router";

const route = useRoute();

const isActive = (path) => route.path === path;

// Navigation links
const navLinks = [
  { path: "/", label: "Home" },
  { path: "/travel", label: "Travel" },
  { path: "/resorts", label: "Snow Resorts" },
  { path: "/places", label: "Hotspots" },
  { path: "/accommodations", label: "Accommodations" },
];
</script>

<style scoped>

.fwb-navbar {
  padding: 0.5rem; 
}

.fwb-navbar-link {
  font-size: 0.875rem; 
  transition: color 0.2s ease;
}

.fwb-navbar-link:hover {
  color: #007bff; 
}

img {
  border-radius: 0.375rem; 
  max-height: 300px; 
  object-fit: cover;
}

.fwb-navbar {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px); 
  border-radius: 0.5rem; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
}

@media (max-width: 768px) {
  .fwb-navbar-collapse {
    flex-direction: column; /* Stack links vertically on small screens */
  }
}
</style>
