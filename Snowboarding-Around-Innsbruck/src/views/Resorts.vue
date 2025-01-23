<template>
  <div class="max-w-7xl mx-auto p-6">
    <h1 class="text-4xl font-bold text-center mb-6 text-gray-800">
      Snow Resorts
    </h1>

    <p class="text-lg text-gray-700 mb-4">
      This page will describe the different snow resorts I have visited in
      Austria. I purchased a Tirol Snow card which gives you access to over 90
      places to visit! We call them snow resorts because of the various
      activities you can do at them. Snowboarding, Skiing, Tobogganing, and
      more!
    </p>
    <p class="text-lg text-gray-700 mb-6">
      Discussed here will be the best ways to access them. Prices of the places.
      A map of the resorts and an explanation of the terrain. I'll give a review
      of the food that I tried and which hut you can find it at. Lastly, there
      will be an overall synopsis of the resort including recommended skill
      levels.
    </p>
    <p class="text-lg text-gray-700 mb-8">
      My starting point for my routes is described at the end of the travel
      section. Please be sure to understand this and adjust accordingly to where
      you are located. I will try to include the Innsbruck Hauptbahnhof in as
      many routes as possible. Or add a tidbit of how to get from there
      Hauptbahnhof to where I am going.
    </p>
    <p class="text-lg text-gray-700 mb-8">
      All prices listed will be for an Adult Full Day lift ticket. All times
      listed will be in the 24:00 hour clock. This is standard in many parts of
      Austria.
    </p>

    <!-- Dynamically generate ResortFrame for each resort -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
      <div v-for="resort in resortList" :key="resort.name">
        <resort-frame :resort="resort" />
      </div>
    </div>
  </div>
</template>

<script>
import ResortFrame from "../components/frames/ResortsFrame.vue";
import resorts from "@/data/resorts.js"; // Import the resorts data

export default {
  name: "Resorts",
  components: {
    ResortFrame,
  },
  data() {
    return {
      resortList: Object.values(resorts), // Convert the object into an array
    };
  },
};
</script>

<style scoped>
/* Additional styling space */
</style>
