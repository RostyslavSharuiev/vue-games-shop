<script setup lang="ts">
import { Button } from '@/shared/ui';

interface Props {
  disabled: boolean;
}

const { disabled } = defineProps<Props>();

const emit = defineEmits(['makeOrder']);
</script>

<template>
  <Button
    :type="'button'"
    :disabled="disabled"
    class="w-full py-3 mt-4 text-white transition opacity-80 bg-button-purple hover:opacity-90 active:opacity-100 disabled:opacity-50"
    @click="() => emit('makeOrder')"
  >
    {{ $t('order') }}
  </Button>
</template>
