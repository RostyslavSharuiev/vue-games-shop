<script setup lang="ts">
interface Props {
  title: string;
  imageUrl: string;
  description: string;
}

const { title, description, imageUrl } = defineProps<Props>();
</script>

<template>
  <div class="flex flex-col items-center mx-auto text-center w-72">
    <img
      height="80"
      width="80"
      :src="imageUrl"
      alt="Info image"
    >
    <h2 class="mt-4 text-2xl font-medium text-black dark:text-white">
      {{ title }}
    </h2>
    <p class="mt-2 text-black dark:text-white">
      {{ description }}
    </p>
  </div>
</template>
