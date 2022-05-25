<template>
  <v-app>
    <Sidebar v-if="$vuetify.breakpoint.mdAndDown"></Sidebar>
    <Navbar v-else></Navbar>
    <v-main>
      <router-view/>
    </v-main>

    <Footer></Footer>
  </v-app>
</template>

<script>
import Navbar from "@/components/Global/Navbar.vue"
import LanguageTest from "@/components/LanguageControll/LanguageTest.vue"
import SelectLocale from "@/components/LanguageControll/SelectLocale.vue"
import Sidebar from "@/components/Global/Sidebar.vue"
import Footer from "@/components/Global/Footer.vue"

export default {
  name: 'App',
  components:{
    Navbar,
    Sidebar,
    LanguageTest,
    SelectLocale,
    Footer
  },
  data(){
    return {
      
    }
  }
};
</script>

<style>
  /* Global Project CSS */
  @import './assets/styles/GlobalStyling.css';


  /* @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@700&family=Lato:wght@400;700&display=swap'); */
  /* @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@700&family=Josefin+Sans&family=Lato:wght@400;700&display=swap'); */

  /* Pros-sans 700 - carousel title  Heboo thin - description */
  @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@700&family=Heebo:wght@100&family=Josefin+Sans&family=Lato:wght@400;700&family=Source+Sans+Pro:wght@700&display=swap');
</style>