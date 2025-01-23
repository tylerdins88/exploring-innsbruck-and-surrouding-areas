<template>
  <router-link
    :to="{ name: 'ResortDetails', params: { name: resort.name } }"
    class="resortFrame block border border-red-700 rounded-xl p-4 w-4/5 mx-5 mb-5 flex items-center justify-center text-center text-black hover:shadow-lg hover:scale-105 transition-transform"
    :aria-label="`View details about ${resort.name}`"
  >
    <div class="resortContent">
      <h1 class="text-2xl font-bold mb-2" v-html="resort.name"></h1>
      <p class="text-gray-600 text-sm mb-4" v-html="resort.description"></p>
      <img
        class="resortMap h-72 w-auto border border-red-700"
        :src="resort.resortmap"
        :alt="`${resort.name} map`"
      />
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    resort: {
      type: Object,
      required: true,
    },
  },
};
</script>
