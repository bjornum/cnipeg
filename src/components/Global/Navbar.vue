O
<template>
  <v-app-bar app class="navbarStyling" flat>
    <ContactForm ref="OpenContactForm"></ContactForm>
    <!-- Logo -->
    <!-- <div class="d-flex align-center">
      <v-img alt="Vuetify Logo" class="shrink mr-2" contain src="img/DIGI_logo.png" transition="scale-transition" width="40"/>
      <v-img alt="Vuetify Name" class="shrink mt-1 hidden-sm-and-down" contain min-width="100" src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png" width="100"/>
    </div> -->
    <v-spacer></v-spacer>
    <!-- <v-img class="mt-15 ml-10" src="img/EVOLVE.png"  max-height="130" max-width="130" contain></v-img> -->
    <p class="pt-15" style="font-weight: bold; font-size: 20px; color: blue">
      CNIPEG
    </p>
    <v-spacer></v-spacer>
    <div class="mt-10">
      <a href="/">{{ $t("navbar.home") }}</a>
      <a href="/about">{{ $t("navbar.about") }}</a>
      <a href="/partners">{{ $t("navbar.partners") }}</a>
      <a href="/news">{{ $t("navbar.news") }}</a>
      <a href="/trainingmodules">{{ $t("navbar.training modules") }}</a>
      <a href="/resources" class="mr-2">{{ $t("navbar.resources") }}</a>
      <span
        class="contactButton"
        @click="$refs.OpenContactForm.openContactDialog()"
        >{{ $t("navbar.contact") }}</span
      >
    </div>
    <div class="mt-10 ml-3">
      <LanguageSelection></LanguageSelection>
    </div>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
import ContactForm from "@/components/Global/ContactUs.vue";
import LanguageSelection from "@/components/LanguageControll/SelectLocale.vue";

export default {
  components: {
    ContactForm,
    LanguageSelection,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.navbarStyling {
  height: 6em !important;
  width: 90vw !important;
  margin: auto auto !important;
  background-color: #ffffff !important;
  border-bottom: 5px solid #205072 !important;
}
a {
  padding: 14px;
  color: #6a6a6a;
  text-decoration: none;
  font-size: 16px;
  font-family: "Lato", sans-serif;
}
a:visited {
  color: #6a6a6a;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
/* a:active {
  background-color:black;
  color: orangered;
} */

/* Contact Button */
.contactButton {
  font-family: "Lato", sans-serif;
  font-weight: regular;
  color: #6a6a6a;
  line-height: 1em;
  font-size: 16px;
}

.contactButton:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
