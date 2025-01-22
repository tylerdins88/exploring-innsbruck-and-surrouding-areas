<template>
  <div class="max-w-7xl mx-auto p-6">
    <h1 class="text-4xl font-bold text-center text-gray-800 mb-6">{{ resortData.name }}</h1>
    
    <div class="bg-white shadow-lg rounded-lg p-6 mb-6">
      <p v-if="resortData.description" class="text-lg text-gray-700 mb-4">
        {{ resortData.description }}
      </p>

      <div v-if="resortData.map" class="mb-6">
        <img 
          :src="resortData.map" 
          :alt="`Map of ${resortData.name}`" 
          class="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <p v-if="resortData.price" class="text-lg text-gray-800">
          <strong>Price:</strong> {{ resortData.price }}
        </p>
        <p v-if="resortData.openinghours" class="text-lg text-gray-800">
          <strong>Opening Hours:</strong> {{ resortData.openinghours }}
        </p>
        <p v-if="resortData.nightski" class="text-lg text-gray-800">
          <strong>Night Skiing:</strong> {{ resortData.nightski }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import resorts from "@/data/resorts.js";

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      resortData: resorts[this.name] || {}, // Fallback to empty object if not found
    };
  },
};
</script>

<style scoped>
/* Additional styling space */
</style>
