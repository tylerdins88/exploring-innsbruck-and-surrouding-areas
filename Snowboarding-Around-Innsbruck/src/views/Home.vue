<!-- <template>
  <div>
    <h1 class="background-title">Snowboarding in Austria</h1>
    <p>
      Welcome to Innsbruck Austria. Innsbruck is the capitol of the federal
      state of Tyrol. With a population of 136k this city is a top destination
      for sports enthusiasts. Especially in the winters for all things snow
      related. Whether you are a snowboarder, skier, or cross-country skiing
      this is your dream place.
    </p>

    <h3>
      This website is your unofficial guide to making the best of your winter
      trip to Austria. You'll find here the best tips for travel, resorts to
      visit, and enjoying your trip. All information will be based out of
      Innsbruck. My main place of residence is near Tivoli Stadium and routes
      will be based out of there.
    </h3>
    <p>
      In the travel section will be information regarding transportation to and
      from Innsbruck. The city has a massive transit center connecting buses,
      trains, and city trams. Munich is one of the largest & closest
      international airports. I will explain flying into here, getting a train
      to Innsbruck, and explaining the main Innsbruck transportation hub.
    </p>
    <p>
      Snow Resorts features a short review on different resorts in the area. A
      short description about the terrain. A insert about a warming hut or food
      I tried. Ill also give a route of how to get there. A majority of resorts
      reviewed will be on the Tirol snow card and there will be information on
      that too.
    </p>
    <p>
      Hot spots are recommendations of places to check out in the city. You'll
      find listed here restaurants, pubs, and some music venues. I'll have a
      review of what I ordered, pricing, and overall atmosphere detail. There
      will also be a variety of businesses listed here I used, some historical
      sites to check, and art galleries.
    </p>
    <p>
      Accommodations will have reviews of places I personally stayed. I will
      have pricing, description of unit, parking, and more.
    </p>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script> -->

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

    <!-- Feature Sections -->
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

