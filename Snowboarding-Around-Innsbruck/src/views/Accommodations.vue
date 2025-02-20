<template>
  <div class="max-w-5xl mx-auto p-6">
    <h1 class="text-2xl font-bold text-center text-gray-800 mb-4">
      Accommodations
    </h1>
    <p>
      Accommodations will have reviews of places I personally stayed. I will
      have pricing, description of unit, parking, and more.
    </p>

    <AccommodationsFrame
      v-for="(accommodation, key) in accommodations"
      :key="key"
      :accommodation="accommodation"
    />
  </div>
</template>

<script>
import accommodations from "@/data/accommodations.js";
import AccommodationsFrame from "../components/frames/AccommodationsFrame.vue";

export default {
  components: {
    AccommodationsFrame,
  },
  data() {
    return {
      accommodations,
    };
  },
};
</script>
