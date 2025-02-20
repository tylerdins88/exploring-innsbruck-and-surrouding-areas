<template>
  <div>
    <h1 class="text-4xl font-bold text-gray-800 mb-4">Places to Check Out</h1>
    <p class="text-lg text-gray-600 mb-6">
      Hot spots are recommendations of places to check out in the city. You'll
      find listed here restaurants, pubs, and some music venues. I'll have a
      review of what I ordered, pricing, and overall atmosphere detail. There
      will also be a variety of businesses listed here I used, some historical
      sites to check, and art galleries.
    </p>

    <!-- Dynamically generate HotSpotFrame for each hotspot -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
      <HotSpotFrame
        v-for="hotspot in hotspotsList"
        :key="hotspot.name"
        :hotspot="hotspot"
      />
    </div>
  </div>
</template>

<script>
import HotSpotFrame from "../components/frames/HotSpotsFrame.vue";
import hotspots from "@/data/hotspots.js"; // Import the hotspots data

export default {
  name: "HotSpots",
  components: {
    HotSpotFrame,
  },
  data() {
    return {
      hotspotsList: Object.values(hotspots), // Convert the object to an array
    };
  },
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>
