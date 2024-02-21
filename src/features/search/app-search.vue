<script setup lang="ts">
import { Input } from '@/shared/ui';
</script>

<template>
  <Input
    :type="'text'"
    :placeholder="$t('search')"
    class="px-3 py-1 rounded-full outline-none placeholder:text-center"
  />
</template>
