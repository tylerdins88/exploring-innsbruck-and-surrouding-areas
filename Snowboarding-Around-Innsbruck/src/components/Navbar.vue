<template>
  <div class="flex justify-center items-center bg-neutral-50">
    <!-- Container for the flag and navbar -->
    <div class="relative w-3/4 max-w-4xl">
      <!-- Austrian Flag -->
      <img
        src="@/assets/austria-flag-map.jpg"
        alt="Austrian Flag"
        class="w-full h-auto object-cover rounded-lg shadow-lg"
      />

      <!-- Navbar -->
      <div class="absolute inset-0 flex items-center justify-center ">
        <fwb-navbar class="bg-gray-100 bg-opacity-80 p-4">
          <template #default="{ isShowMenu }">
            <fwb-navbar-collapse :is-show-menu="isShowMenu" class="flex space-x-4">
              <fwb-navbar-link
                :style="{ color: isActive('/') ? 'blue' : 'white' }"
                link="/"
                class="hover:text-gray-300 font-bold"
              >
                Home
              </fwb-navbar-link>
              <fwb-navbar-link
                :style="{ color: isActive('/travel') ? 'blue' : 'white' }"
                link="/travel"
                class="hover:text-gray-300 font-bold"
              >
                Travel
              </fwb-navbar-link>
              <fwb-navbar-link
                :style="{ color: isActive('/resorts') ? 'blue' : 'white' }"
                link="/resorts"
                class="hover:text-gray-300 font-bold"
              >
                Snow Resorts
              </fwb-navbar-link>
              <fwb-navbar-link
                :style="{ color: isActive('/places') ? 'blue' : 'white' }"
                link="/places"
                class="hover:text-gray-300 font-bold"
              >
                Hotspots
              </fwb-navbar-link>
              <fwb-navbar-link
                :style="{ color: isActive('/accommdations') ? 'blue' : 'white' }"
                link="/accommdations"
                class="hover:text-gray-300 font-bold"
              >
                Accommodations
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

const isActive = (path) => {
  return route.path === path;
};
</script>

<style scoped>
/* Ensure navbar text is always visible */
.fwb-navbar-link {
  font-weight: bold;
}

.fwb-navbar-link:hover {
  color: #eaeaea;
}

img {
  border-radius: 0.5rem; /* Rounded edges for the flag */
}

/* Transparent navbar background */
.fwb-navbar {
  background: transparent;
}
</style>
