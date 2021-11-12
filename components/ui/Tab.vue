<template>
  <div>
    <div v-for="tab in tabs" :key="tab.id" class="flex">
      <span class="text-gray-700">{{ tab.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
    },
  },
}
</script>

<style scoped></style>
