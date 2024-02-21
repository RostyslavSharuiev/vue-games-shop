<script setup lang="ts">
interface Props {
  type: 'text';
  placeholder?: string;
}

const { type, placeholder } = defineProps<Props>();
</script>

<template>
  <input
    :type="type"
    :placeholder="placeholder"
    class="text-white bg-dark dark:bg-light-gray placeholder:text-white dark:placeholder:text-black dark:text-black"
  >
</template>
