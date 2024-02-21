<script setup lang="ts">
interface Props {
  imageUrl: string;
}

const { imageUrl } = defineProps<Props>();
</script>

<template>
  <div
    class="w-full bg-center bg-cover"
    :style="`background-image: url(${imageUrl})`"
  />
</template>
