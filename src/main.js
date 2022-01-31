import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import VueI18n from 'vue-i18n';
import messages from "./locales/export.js"

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en',
  messages
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: function (h) { return h(App) }
}).$mount('#app');
