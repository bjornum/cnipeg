<template>
  <v-app>
    <Navbar></Navbar>
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

export default {
  name: 'App',
  components:{
    Navbar,
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
