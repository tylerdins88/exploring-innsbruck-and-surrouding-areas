<template>
  <div class="max-w-7xl mx-auto p-6">
    <h1 class="text-4xl font-bold text-center text-gray-800 mb-6">
      {{ resortData.name }}
    </h1>

    <div class="bg-white shadow-lg rounded-lg p-6 mb-6">
      <p v-if="resortData.description" class="text-lg text-gray-700 mb-4">
        {{ resortData.description }}
      </p>

      <div v-if="resortData.resortmap" class="mb-6">
        <img
          :src="resortData.resortmap"
          :alt="`Map of ${resortData.name}`"
          class="w-full h-auto rounded-lg shadow-md cursor-pointer"
          style="height: 400px; width: auto"
          @click="showModal = true"
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

      <p v-if="resortData.explaination" class="text-lg text-gray-700 mb-4">
        <strong>Getting There:</strong> {{ resortData.explaination }}
      </p>
      <div class="resortTravel">
        <div v-if="resortData.routemap" class="mb-6">
          <img
            :src="resortData.routemap"
            :alt="`Map of ${resortData.name}`"
            class="w-full h-auto rounded-lg shadow-md cursor-pointer"
            style="height: 400px; width: auto"
          />
        </div>
        <div v-if="resortData.directions" class="mb-6">
          <img
            :src="resortData.directions"
            :alt="`Map of ${resortData.name}`"
            class="w-full h-auto rounded-lg shadow-md cursor-pointer"
            style="height: 400px; width: auto"
          />
        </div>
      </div>

      <!-- need to make a hyperlink -->
      <p class="text-xl text-center text-gray-800 mb-6">
        {{ resortData.website }}
      </p>
    </div>

    <!-- Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-lg shadow-lg p-4 max-w-3xl w-full relative">
        <button
          class="absolute top-2 right-2 bg-gray-300 text-gray-800 rounded-full p-2 focus:outline-none"
          @click="showModal = false"
        >
          ✕
        </button>
        <img
          :src="resortData.resortmap"
          :alt="`Map of ${resortData.name}`"
          class="w-full h-auto rounded-lg"
        />
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
      showModal: false, // State to control modal visibility
    };
  },
};
</script>

<style scoped>
/* Modal styles for smoother transitions */
.fixed {
  transition: all 0.3s ease-in-out;
}

.resortTravel {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
</style>
