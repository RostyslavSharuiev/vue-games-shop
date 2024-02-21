<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const switchLanguage = (event: Event) => {
  locale.value = (event.target as HTMLSelectElement).value;
};
</script>

<template>
  <select
    id="select language"
    aria-label="select language"
    class="text-black uppercase border-none rounded-md outline-none cursor-pointer text-md dark:text-mid-gray bg-light-gray dark:bg-dark"
    @change="switchLanguage"
  >
    <option value="en">
      {{ $t('languageSwitcher.en') }}
    </option>
    <option value="ua">
      {{ $t('languageSwitcher.ua') }}
    </option>
  </select>
</template>
