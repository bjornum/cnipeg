import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueI18n from 'vue-i18n';
import messages from "./locales/export.js"

Vue.use(VueI18n);
Vue.prototype.$http = axios;
const i18n = new VueI18n({
  locale: (localStorage.getItem('language') || 'en'),
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
