<template>
  <div class="max-w-5xl mx-auto p-6">
    <h1 class="text-2xl font-bold text-center text-gray-800 mb-4">
      {{ hotspot.name }}
    </h1>

    <div class="bg-white shadow-lg rounded-lg p-6 mb-6">
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
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>
