<template>
  <v-app-bar app color="light-blue lighten-5" style="height:6em;">
    <ContactForm ref="OpenContactForm"></ContactForm>
    
    <!-- <p v-if="$i18n.locale == 'en'">asd</p> -->
    <!-- Logo -->
    <!-- <div class="d-flex align-center">
      <v-img alt="Vuetify Logo" class="shrink mr-2" contain src="img/DIGI_logo.png" transition="scale-transition" width="40"/>
      <v-img alt="Vuetify Name" class="shrink mt-1 hidden-sm-and-down" contain min-width="100" src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png" width="100"/>
    </div> -->
    <!-- <v-img src="img/DIGI_logo.png" height="40" width="260px" contain/> -->

    <v-img class="mt-8 ml-10" src="img/DIGI_logo.png"  max-height="80" max-width="80" contain></v-img>
    <v-spacer></v-spacer>
    <!-- Links -->
    <!-- 
      1. Logo
      2. Home Button
      3. About
      4. News
      5. Training Modules
      6. Digital Learning Design
      7. Digital Pedagogical Strategy
      8. Contact (dialog)
      9. Login (Link to followup? OR same as valuable creativity) 
    -->
    <div class="mt-6">

      <v-btn text to="/">{{ $t('navbar.home') }}</v-btn>
      <v-btn text to="/about">{{ $t('navbar.about') }}</v-btn>
      <v-btn text to="/news">{{ $t('navbar.news') }}</v-btn>
      <v-btn text to="/trainingmodules">Training Modules</v-btn>
      <v-btn text to="/resources">Resources</v-btn>
      <!-- <v-btn text to="/digitallearningdesign">Digital Learning Design</v-btn> -->
      <!-- <v-btn text to="/digitalpedagogicalstrategy">Digital Pedagogical Strategy</v-btn> -->
      <v-btn text @click="$refs.OpenContactForm.openContactDialog()">Contact</v-btn>
      <v-btn icon @click="$refs.OpenContactForm.openContactDialog()">
        <v-icon>mdi-email-outline</v-icon>
      </v-btn>
    </div>
    <div class="mt-10">
      <LanguageSelection></LanguageSelection>
    </div>


    <v-spacer></v-spacer>
    <!-- Login -->
    <div class="mt-5">
      <v-btn text href="https://app.followup.prios.no/#/login" target="_blank">Login</v-btn>
    </div>
  </v-app-bar>
</template>

<script>
import ContactForm from "@/components/Global/ContactUs.vue"
import LanguageSelection from "@/components/TestAndDevelopment/SelectLocale.vue"

export default {
  components:{
    ContactForm,
    LanguageSelection
  },
  data(){
    return {

    }
  }
}
</script>