import { autoAnimatePlugin } from '@formkit/auto-animate/vue';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import Toast, { POSITION, type PluginOptions } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

import App from '@/app/App.vue';
import { defaultLocale, languages } from '@/app/i18n';
import router from '@/app/router';

import '@/app/main.css';

const messages = Object.assign(languages);

const i18n = createI18n({
  legacy: false,
  fallbackLocale: 'en',
  locale: defaultLocale,
  messages,
});

const toastOptions: PluginOptions = {
  position: POSITION.BOTTOM_LEFT,
  timeout: 5000,
  closeOnClick: true,
  pauseOnHover: true,
  pauseOnFocusLoss: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: true,
  hideProgressBar: false,
  closeButton: 'button',
  icon: true,
  maxToasts: 10,
  newestOnTop: true,
  transition: 'Vue-Toastification__bounce',
};

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);
app.use(autoAnimatePlugin);
app.use(Toast, toastOptions);

app.mount('#app');
