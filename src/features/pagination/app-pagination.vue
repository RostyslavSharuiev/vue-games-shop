<script setup lang="ts">
interface Props {
  paginationPages: number;
}

const { paginationPages } = defineProps<Props>();

defineEmits(['onChangePaginationPage']);
</script>

<template>
  <div class="flex items-center gap-5 flex-frap">
    <div
      v-for="page in paginationPages"
      :key="page"
      class="relative w-10 h-10 border border-gray-400 rounded-full shadow-md cursor-pointer"
      @click="$emit('onChangePaginationPage', page)"
    >
      <span
        class="absolute text-black transform -translate-x-1/2 -translate-y-1/2 dark:text-mid-gray top-1/2 left-1/2"
      >
        {{ page }}
      </span>
    </div>
  </div>
</template>
