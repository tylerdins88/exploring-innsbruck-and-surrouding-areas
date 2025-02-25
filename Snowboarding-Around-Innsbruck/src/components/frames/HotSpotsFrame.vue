<template>
  <div class="max-w-5xl mx-auto p-6">
    <!-- Card -->
    <div class="bg-white shadow-lg rounded-lg p-6 mb-6">
      <h1 class="text-2xl font-bold text-center text-gray-800 mb-4">
        {{ hotspot.name }}
      </h1>

      <p v-if="hotspot.description" class="text-lg text-gray-700 mb-4">
        {{ hotspot.description }}
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <p v-if="hotspot.operatinghours" class="text-lg text-gray-800">
          <strong>Operating Hours:</strong> {{ hotspot.operatinghours }}
        </p>
        <p v-if="hotspot.reservation" class="text-lg text-gray-800">
          <strong>Reservation Required:</strong> {{ hotspot.reservation }}
        </p>
        <p v-if="hotspot.type" class="text-lg text-gray-800">
          <strong>Type:</strong> {{ hotspot.type }}
        </p>
      </div>

      <!-- "Read More Here" Button -->
      <div class="text-center mt-3">
        <button
          @click="openModal"
          class="bg-red-600 text-white px-2 py-1 rounded-md hover:bg-red-700 transition"
        >
          Read More Here
        </button>
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="isModalOpen"
      class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <div class="bg-white max-w-2xl w-full p-6 rounded-lg shadow-lg relative">
        <!-- Close Button -->
        <button
          @click="closeModal"
          class="absolute top-2 right-2 text-gray-700 hover:text-gray-900 text-lg w-6 h-6 flex items-center justify-center p-1 rounded-md"
        >
          &times;
        </button>

        <!-- Modal Content -->
        <h1 class="text-2xl font-bold text-center text-gray-800 mb-4">
          {{ hotspot.name }}
        </h1>

        <p v-if="hotspot.description" class="text-lg text-gray-700 mb-4">
          {{ hotspot.description }}
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <p v-if="hotspot.operatinghours" class="text-lg text-gray-800">
            <strong>Operating Hours:</strong> {{ hotspot.operatinghours }}
          </p>
          <p v-if="hotspot.reservation" class="text-lg text-gray-800">
            <strong>Reservation Required:</strong> {{ hotspot.reservation }}
          </p>
          <p v-if="hotspot.type" class="text-lg text-gray-800">
            <strong>Type:</strong> {{ hotspot.type }}
          </p>
          <p v-if="hotspot.location" class="text-lg text-gray-800">
            <strong>Location:</strong> {{ hotspot.location }}
          </p>
        </div>

        <p class="text-xl text-center text-gray-800 mt-6">
          <a
            v-if="hotspot.website"
            :href="
              hotspot.website.startsWith('http')
                ? hotspot.website
                : `https://${hotspot.website}`
            "
            target="_blank"
            class="text-blue-600 hover:underline"
          >
            Visit Website
          </a>
        </p>

        <!-- Google Maps Embed -->
        <div v-if="hotspot.map" class="mt-6">
          <iframe
            :src="hotspot.map"
            width="100%"
            height="300"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hotspot: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isModalOpen: false, // Controls modal visibility
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>
