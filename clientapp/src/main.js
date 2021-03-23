import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueI18n from 'vue-i18n'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import router from "./router";

window.axios = require('axios');

Vue.use(VueI18n);

Vue.config.productionTip = false

function loadLocalMessages() {
  const locales = require.context(
      "../src/locales",
      true,
      /[A-za-z0-9-_,\s]+\.json$/i
  );
  const messages = {};

  locales.keys().forEach(key => {
    const matched = key.match(/([A-za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });

  return messages;
}

const i18n = new VueI18n({
  locale: process.env.MIX_VUE_APP_I18N_LOCALE || "en", //Set locale
  fallbackLocale: process.env.MIX_VUE_APP_I18N_FALLBACK_LOCALE || "en", //Set fallback locale
  messages: loadLocalMessages() //Set locale messages
});

new Vue({
  store,
  i18n,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
