<template>
  <v-app>
    <Sidebar v-if="$vuetify.breakpoint.mdAndDown"></Sidebar>
    <Navbar v-else></Navbar>
    
    <!-- <NavbarPhone></NavbarPhone> -->
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Global/Navbar.vue"
import NavbarPhone from "@/components/Global/NavbarPhone.vue"
import LanguageTest from "@/components/TestAndDevelopment/LanguageTest.vue"
import SelectLocale from "@/components/TestAndDevelopment/SelectLocale.vue"
import Sidebar from "@/components/Global/Sidebar.vue"

export default {
  name: 'App',
  components:{
    Navbar,
    Sidebar,
    NavbarPhone,
    LanguageTest,
    SelectLocale
  },
  data(){
    return {
      
    }
  }
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@700&family=Lato:wght@400;700&display=swap');
</style>