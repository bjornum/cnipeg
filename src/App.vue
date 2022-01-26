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
export default {
  name: 'App',
  components:{
    Navbar,
    NavbarPhone
  },
  data(){
    return {
      
    }
  }
};
</script>
