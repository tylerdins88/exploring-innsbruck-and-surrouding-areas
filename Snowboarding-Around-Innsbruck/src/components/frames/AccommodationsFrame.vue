<template>
  <div class="bg-white shadow-lg rounded-lg p-6 mb-6">
    <!-- Image Section -->
    <div v-if="accommodation.image" class="mb-4">
      <img
        :src="accommodation.image"
        :alt="accommodation.name"
        class="w-full h-64 object-cover rounded-lg"
      />
    </div>

    <!-- Accommodation Name -->
    <h2 class="text-xl font-semibold text-gray-800 mb-2">
      {{ accommodation.name }}
    </h2>
    <p class="text-lg text-gray-700 mb-2">
      <strong>Location:</strong> {{ accommodation.location }}
    </p>

    <!-- Accommodation Details -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <p v-if="accommodation.pricing" class="text-lg text-gray-800">
        <strong>Pricing:</strong> {{ accommodation.pricing }}
      </p>
      <p v-if="accommodation.parking" class="text-lg text-gray-800">
        <strong>Parking:</strong> {{ accommodation.parking }}
      </p>
      <p v-if="accommodation.checkinout" class="text-lg text-gray-800">
        <strong>Check-in/Check-out:</strong> {{ accommodation.checkinout }}
      </p>
      <p v-if="accommodation.perks" class="text-lg text-gray-800">
        <strong>Perks:</strong> {{ accommodation.perks }}
      </p>
      <p v-if="accommodation.cons" class="text-lg text-gray-800">
        <strong>Cons:</strong> {{ accommodation.cons }}
      </p>
    </div>

    <!-- Website Link -->
    <p class="text-xl text-center text-gray-800 mt-6">
      <a
        v-if="accommodation.website"
        :href="accommodation.website"
        target="_blank"
        class="text-blue-600 hover:underline"
      >
        Visit Website
      </a>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    accommodation: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Image Styling */
img {
  max-height: 200px;
  max-width: 300px;
  object-fit: cover;
}
</style>
