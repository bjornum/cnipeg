<template>
  <div>
    <ContactUs ref="OpenContactForm"></ContactUs>
    <!-- Navbar -->
    <v-app-bar app color="light-blue lighten-5" style="height: 6em">
      <!-- <v-img class="mt-8 ml-10" src="img/EVOLVE.png"  max-height="80" max-width="80" contain></v-img> -->
      <p class="pt-15" style="font-weight: bold; font-size: 20px; color: blue">
        CNIPEG
      </p>
      <v-spacer></v-spacer>
      <v-btn icon @click="toggleNavbar()">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-btn icon @click="$refs.OpenContactForm.openContactDialog()">
        <v-icon>mdi-email-outline</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- Navbar -->
    <v-navigation-drawer v-model="navDrawer" app>
      <a href="/">
        <!-- <v-img  class="mt-2 mb-2" src="img/EVOLVE.png"  height="60" contain></v-img> -->
        <p
          class="pt-5 pl-10"
          style="font-weight: bold; font-size: 20px; color: blue"
        >
          CNIPEG
        </p>
      </a>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item
          v-for="(item, index) in pageNavigation"
          :key="index"
          :to="item.location"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- ===== Contact Form - Remove if not used within the sidebar ===== -->

        <!-- <v-list-item @click="$refs.OpenContactForm.openContactDialog()">
          <v-list-item-icon>
            <v-icon>mdi-email-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->

        <v-list-item
          href="https://app.followup.prios.no/#/login"
          target="_blank"
        >
          <!-- v-list-item-icon added to push login to correct position -->
          <v-list-item-icon></v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import ContactUs from "@/components/Global/ContactUs.vue";
export default {
  components: {
    ContactUs,
  },
  data() {
    return {
      navDrawer: false,
      pageNavigation: [
        { name: "Home", location: "/", icon: "" },
        { name: "About", location: "/about", icon: "" },
        { name: "Partners", location: "/partners", icon: "" },
        { name: "News", location: "/news", icon: "" },
        { name: "Training Modules", location: "/trainingmodules", icon: "" },
        { name: "Resources", location: "/resources", icon: "" },
      ],
    };
  },

  methods: {
    // Toggles the sidebar on and offs
    toggleNavbar() {
      if (this.navDrawer == true) {
        this.navDrawer = false;
      } else {
        this.navDrawer = true;
      }
    },
  },
};
</script>

<style>
/* Import of fonts from google fonts */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");

/* Element styling */
p {
  font-family: "Source Sans Pro", sans-serif;
}
</style>
