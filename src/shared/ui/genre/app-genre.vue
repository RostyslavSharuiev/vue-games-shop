<script setup lang="ts">
interface Props {
  genre: string;
}

const { genre } = defineProps<Props>();
</script>

<template>
  <span class="p-1 font-bold text-black rounded-xl bg-light-gray">{{ genre }}</span>
</template>
