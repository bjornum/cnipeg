<template>
  <div>
    <ContactUs ref="OpenContactForm"></ContactUs>
    <!-- Navbar -->
    <v-app-bar app color="light-blue lighten-5" style="height:6em;">
      <v-spacer></v-spacer>
      <v-btn icon @click="toggleNavbar()">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-btn icon @click="$refs.OpenContactForm.openContactDialog()">
        <v-icon>mdi-email-outline</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- Navbar -->
    <v-navigation-drawer v-model="navDrawer" app >
      <a href="/">
        <v-img  class="mt-2 mb-2" src="img/DIGI_logo.png"  height="60" contain></v-img>
      </a>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item >
          <v-list-item-icon>
            <v-icon>mdi-arrow-right</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>yes</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="$refs.OpenContactForm.openContactDialog()">
          <v-list-item-icon>
            <v-icon>mdi-email-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>

import ContactUs from "@/components/Global/ContactUs.vue"
export default {
  components:{
    ContactUs
  },
  data(){
    return {
      navDrawer: true,
      expand: false,
    }
  },

  methods:{
    // Toggles the sidebar on and offs
    toggleNavbar(){
      if(this.navDrawer == true){
        this.navDrawer = false;
      } else {
        this.navDrawer = true;
      }
    }
  },
}
</script>


<style>
 @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

 .fontTitle{
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
}
.fontSubTitle{
font-family: 'Poppins', sans-serif;
  font-size: 19px;
}
.fontContent{
font-size:19px;
font-family: 'Source Sans Pro', sans-serif;
}
p{
  font-family: 'Source Sans Pro', sans-serif;
}
</style>