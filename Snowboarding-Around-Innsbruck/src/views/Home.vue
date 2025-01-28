<template>
   <div class="bg-gray-50 min-h-screen">
    <!-- Hero Section -->
    <div
      class="relative bg-cover bg-center h-96 flex items-center justify-center"
      style="background-image: url('@/assets/austria-snow.jpg');"
    >
      <!-- Text Content -->
      <div class="text-center text-white bg-opacity-80 bg-black py-8 px-6 rounded-lg shadow-lg max-w-3xl">
        <h1 class="text-4xl font-extrabold sm:text-5xl md:text-6xl mb-4 tracking-tight">
          Snowboarding in Austria
        </h1>
        <p class="text-lg sm:text-xl md:text-2xl font-light mb-6">
          Your ultimate guide to winter adventures in Innsbruck and beyond.
        </p>
        <router-link
          to="/travel"
          class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md font-medium text-lg transition duration-300"
        >
          Plan Your Adventure
        </router-link>
      </div>
    </div>

    <!-- Welcome Section -->
    <section class="max-w-5xl mx-auto px-6 py-12">
      <div class="relative text-center mb-8">
        <div class="absolute -top-10 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-gradient-to-r from-blue-100 to-blue-300 rounded-full opacity-50"></div>
        <h2 class="relative text-3xl font-bold text-gray-800 mb-4">
          Welcome to Innsbruck
        </h2>
        <p class="relative text-gray-600 text-lg">
          A winter paradise for snow enthusiasts. Discover the best places to snowboard, ski, or enjoy the beauty of the Tyrolean Alps.
        </p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
        <div class="text-center">
          <i class="fas fa-mountain text-blue-500 text-3xl"></i>
          <p class="mt-2 text-gray-600 font-medium">Majestic Alps</p>
        </div>
        <div class="text-center">
          <i class="fas fa-skiing text-green-500 text-3xl"></i>
          <p class="mt-2 text-gray-600 font-medium">World-Class Skiing</p>
        </div>
        <div class="text-center">
          <i class="fas fa-city text-red-500 text-3xl"></i>
          <p class="mt-2 text-gray-600 font-medium">Rich Culture</p>
        </div>
      </div>
    </section>

    <!-- Feature Sections -->
    <section class="bg-white py-12">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Travel Card -->
        <router-link
          to="/travel"
          class="group flex flex-col items-center text-center bg-white rounded-lg shadow-lg p-6 transform transition hover:scale-105 hover:shadow-xl"
        >
          <div class="bg-blue-500 w-full py-4 rounded-t-lg">
            <h3 class="text-xl font-bold text-white">Travel</h3>
          </div>
          <div class="px-4 py-6">
            <p class="text-gray-600">
              Learn about transportation to and from Innsbruck. From Munich
              Airport to local transit hubs, we'll guide you.
            </p>
          </div>
        </router-link>

        <!-- Resorts Card -->
        <router-link
          to="/resorts"
          class="group flex flex-col items-center text-center bg-white rounded-lg shadow-lg p-6 transform transition hover:scale-105 hover:shadow-xl"
        >
          <div class="bg-green-500 w-full py-4 rounded-t-lg">
            <h3 class="text-xl font-bold text-white">Snow Resorts</h3>
          </div>
          <div class="px-4 py-6">
            <p class="text-gray-600">
              Reviews and tips for the best ski resorts, including terrain
              details and the Tirol Snow Card information.
            </p>
          </div>
        </router-link>

        <!-- Hot Spots Card -->
        <router-link
          to="/places"
          class="group flex flex-col items-center text-center bg-white rounded-lg shadow-lg p-6 transform transition hover:scale-105 hover:shadow-xl"
        >
          <div class="bg-red-500 w-full py-4 rounded-t-lg">
            <h3 class="text-xl font-bold text-white">Hot Spots</h3>
          </div>
          <div class="px-4 py-6">
            <p class="text-gray-600">
              Discover the best restaurants, pubs, music venues, and more. Explore
              the vibrant culture of Innsbruck.
            </p>
          </div>
        </router-link>

        <!-- Accommodations Card -->
        <router-link
          to="/accommodations"
          class="group flex flex-col items-center text-center bg-white rounded-lg shadow-lg p-6 transform transition hover:scale-105 hover:shadow-xl"
        >
          <div class="bg-yellow-500 w-full py-4 rounded-t-lg">
            <h3 class="text-xl font-bold text-white">Accommodations</h3>
          </div>
          <div class="px-4 py-6">
            <p class="text-gray-600">
              Honest reviews of places to stay, including pricing, amenities, and
              parking details.
            </p>
          </div>
        </router-link>
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
/* Hover effect for scaling cards */
.group:hover h3 {
  text-decoration: underline;
}
</style>
