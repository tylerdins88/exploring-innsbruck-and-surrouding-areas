<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Hero Section -->
    <div class="relative bg-cover bg-center h-96" style="background-image: url('@/assets/austria-snow.jpg');">
      <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center p-4">
        <h1 class="text-4xl font-extrabold sm:text-5xl md:text-6xl mb-4">
          Snowboarding in Austria
        </h1>
        <p class="text-lg sm:text-xl md:text-2xl font-light">
          Your ultimate guide to winter adventures in Innsbruck and beyond.
        </p>
      </div>
    </div>

    <!-- Welcome Section -->
    <section class="max-w-5xl mx-auto px-6 py-12">
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">
          Welcome to Innsbruck
        </h2>
        <p class="text-gray-600 text-lg">
          A winter paradise for snow enthusiasts. Discover the best places to
          snowboard, ski, or enjoy the beauty of the Tyrolean Alps.
        </p>
      </div>
    </section>

    <!-- Feature Sections    THESE WILL BECOME LINKS EVENTUALLY --> 
    <section class="bg-white py-12">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Travel Section -->
        <div class="flex flex-col items-center text-center">
          <div class="bg-blue-100 p-6 rounded-lg shadow-lg mb-4">
            <i class="fas fa-bus text-blue-500 text-3xl"></i>
          </div>
          <h3 class="text-2xl font-bold text-gray-800 mb-2">
            Travel
          </h3>
          <p class="text-gray-600">
            Learn about transportation to and from Innsbruck. From Munich
            Airport to local transit hubs, we'll guide you.
          </p>
        </div>

        <!-- Resorts Section -->
        <div class="flex flex-col items-center text-center">
          <div class="bg-green-100 p-6 rounded-lg shadow-lg mb-4">
            <i class="fas fa-skiing text-green-500 text-3xl"></i>
          </div>
          <h3 class="text-2xl font-bold text-gray-800 mb-2">
            Snow Resorts
          </h3>
          <p class="text-gray-600">
            Reviews and tips for the best ski resorts, including terrain
            details and the Tirol Snow Card information.
          </p>
        </div>

        <!-- Hot Spots Section -->
        <div class="flex flex-col items-center text-center">
          <div class="bg-red-100 p-6 rounded-lg shadow-lg mb-4">
            <i class="fas fa-map-marker-alt text-red-500 text-3xl"></i>
          </div>
          <h3 class="text-2xl font-bold text-gray-800 mb-2">
            Hot Spots
          </h3>
          <p class="text-gray-600">
            Discover the best restaurants, pubs, music venues, and more. Explore
            the vibrant culture of Innsbruck.
          </p>
        </div>

        <!-- Accommodations Section -->
        <div class="flex flex-col items-center text-center">
          <div class="bg-yellow-100 p-6 rounded-lg shadow-lg mb-4">
            <i class="fas fa-hotel text-yellow-500 text-3xl"></i>
          </div>
          <h3 class="text-2xl font-bold text-gray-800 mb-2">
            Accommodations
          </h3>
          <p class="text-gray-600">
            Honest reviews of places to stay, including pricing, amenities, and
            parking details.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
/* Additional Styling */
</style>

<script setup>
import CustomNavbar from "@/components/Navbar.vue";
</script>
