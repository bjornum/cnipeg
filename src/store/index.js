import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     /*
      Define the i18n state (from 1, down to 3)
        1. Check if localstorage got a language set (user already set an language)
        2. Check if Variable are set
        3. Simply set it to english
    */
    appLanguage: localStorage.getItem("appLanguage") || process.env.VUE_APP_I18N_LOCALE || 'en'
  },
  getters: {
    // Get and set the language based on the state
    getAppLanguage: (state) => state.appLanguage
  },
  mutations: {
    // When changing the language, we save it to the localstorage
    setAppLanguage(state, language) {
      state.appLanguage = language;
      localStorage.setItem("language", language);
    }
  },
  actions: {
  },
  modules: {
  }
})
