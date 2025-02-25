<template>
  <div class="max-w-5xl mx-auto p-6">
<!-- Card Header -->
<div class="bg-gray-100 p-4 border-b">
  <h1 class="text-2xl font-bold text-center text-gray-800">
    {{ hotspot.name }}
  </h1>
  <div class="flex justify-center items-center space-x-4 mt-2">
    <!-- Rating Stars -->
    <div class="flex items-center space-x-1">
      <span v-for="star in 5" :key="star">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          :class="star <= hotspot.rating ? 'text-yellow-500' : 'text-gray-400'"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            d="M3.612 15.442c-.398.234-.876-.124-.768-.609l.786-3.02L1.17 8.63c-.329-.319-.158-.866.283-.94l3.17-.456 1.415-3.07c.195-.421.735-.421.93 0l1.415 3.07 3.17.456c.44.074.612.621.283.94l-2.46 2.183.786 3.02c.108.485-.37.843-.768.609l-2.556-1.68-2.557 1.68z"
          />
        </svg>
      </span>
    </div>
    <!-- Cost Indicators -->
    <div class="flex items-center space-x-1">
      <span v-for="dollar in hotspot.cost" :key="dollar">
        <span class="text-green-500 font-bold">$</span>
      </span>
    </div>
  </div>

      <!-- Card Content -->
      <div class="p-6">
        <p v-if="hotspot.shortdescription" class="text-lg text-gray-700 mb-4">
          {{ hotspot.shortdescription }}
        </p>
        <hr class="my-4 border-gray-200" />

      <!-- Attributes Section -->
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
  <div
    v-if="hotspot.operatinghours"
    class="p-4 bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
  >
    <strong class="block text-gray-900 mb-1">Operating Hours:</strong>
    <span class="text-gray-700">{{ hotspot.operatinghours }}</span>
  </div>
  <div
    v-if="hotspot.reservation"
    class="p-4 bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
  >
    <strong class="block text-gray-900 mb-1">Reservation Required:</strong>
    <span class="text-gray-700">{{ hotspot.reservation }}</span>
  </div>
  <div
    v-if="hotspot.type"
    class="p-4 bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
  >
    <strong class="block text-gray-900 mb-1">Type:</strong>
    <span class="text-gray-700">{{ hotspot.type }}</span>
  </div>
  <div
    v-if="hotspot.location"
    class="p-4 bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
  >
    <strong class="block text-gray-900 mb-1">Location:</strong>
    <span class="text-gray-700">{{ hotspot.location }}</span>
  </div>
</div>

      </div>

      <!-- Card Footer -->
      <div class="bg-gray-100 p-4 border-t text-center">
        <button
          @click="openModal"
          class="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300 focus:outline-none"
        >
          Read More Here
        </button>
      </div>
    </div>

<!-- Modal -->
<transition name="modal">
  <div
    v-if="isModalOpen"
    class="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50"
  >
    <div class="bg-white max-w-2xl w-full rounded-lg shadow-xl relative animate-slideDown">
      <!-- Close Button -->
      <button
        @click="closeModal"
        class="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl w-8 h-8 flex items-center justify-center p-1 rounded-full focus:outline-none"
      >
        &times;
      </button>

      <!-- Modal Header -->
      <div class="border-b p-4">
        <h1 class="text-2xl font-semibold text-gray-800 text-center">
          {{ hotspot.name }}
        </h1>
      </div>

      <!-- Modal Body -->
      <div class="p-6 space-y-4">
        <p v-if="hotspot.description" class="text-gray-700 text-base">
          {{ hotspot.description }}
        </p>
        <hr class="border-gray-200" />
        <!-- Personal Review Section -->
        <div v-if="hotspot.review">
          <h2 class="text-xl font-medium text-gray-800 mb-2">Personal Review</h2>
          <p class="text-gray-600">{{ hotspot.review }}</p>
        </div>
      </div>

      <!-- Modal Footer -->
      <div class="border-t p-4 flex flex-col sm:flex-row justify-between items-center">
        <div>
          <a
            v-if="hotspot.website"
            :href="hotspot.website.startsWith('http') ? hotspot.website : `https://${hotspot.website}`"
            target="_blank"
            class="text-blue-600 hover:underline text-sm"
          >
            Visit Website
          </a>
        </div>
        <div class="mt-2 sm:mt-0 flex space-x-2">
          <a
            v-if="hotspot.phone"
            :href="`tel:${hotspot.phone}`"
            class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md shadow text-sm"
          >
            Call Now
          </a>
          <a
            v-if="hotspot.booking"
            :href="hotspot.booking.startsWith('http') ? hotspot.booking : `https://${hotspot.booking}`"
            target="_blank"
            class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow text-sm"
          >
            Make a Reservation
          </a>
        </div>
      </div>

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
</transition>
</div>
</template>

<script>
export default {
  props: {
    hotspot: {
      type: Object,
      rating: Number,
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
/* Modal fade transition */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter,
.modal-leave-to {
  opacity: 0;
}

/* Slide down animation for modal content */
@keyframes slideDown {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.animate-slideDown {
  animation: slideDown 0.3s ease-out;
}
</style>
