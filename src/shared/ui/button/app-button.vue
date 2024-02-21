<script setup lang="ts">
interface Props {
  type: 'button';
  disabled?: boolean;
}

const { type, disabled } = defineProps<Props>();
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    class="p-1 font-bold rounded-xl"
  >
    <slot />
  </button>
</template>
