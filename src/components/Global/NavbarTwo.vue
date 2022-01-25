<template>
  <v-app-bar app color="primary">
    <!-- Logo -->
    <div class="d-flex align-center">
      <v-img alt="Vuetify Logo" class="shrink mr-2" contain src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" transition="scale-transition" width="40"/>
      <v-img alt="Vuetify Name" class="shrink mt-1 hidden-sm-and-down" contain min-width="100" src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png" width="100"/>
    </div>
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
    <v-btn text to="/">Home</v-btn>
    <v-btn text to="/about">About</v-btn>
    <v-btn text to="/news">News</v-btn>
    <v-btn text to="/trainingmodules">Training Modules</v-btn>
    <v-btn text to="/digitallearningdesign">Digital Learning Design</v-btn>
    <v-btn text to="/digitalpedagogicalstrategy">Digital Pedagogical Strategy</v-btn>


    <v-spacer></v-spacer>
    <!-- Login and contact -->
    <v-btn>Contact</v-btn>
    <v-btn>Login</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data(){
    return {

    }
  }
}
</script>