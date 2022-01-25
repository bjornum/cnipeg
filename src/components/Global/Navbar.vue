<template>
    <!-- 
      1. Logo
      2. Home Button
      3. News
      4. Training Modules
      5. Digital Learning Design
      6. Digital Pedagogical Strategy
      7. Contact (dialog)
      8. Login (Link to followup? OR same as valuable creativity) 
    -->


  <!--Sidebar-->

  <!--Navbar-->
  <v-app-bar app color="mainColor">
    <v-app-bar-nav-icon v-if="$vuetify.breakpoint.mdAndDown" @click="navDrawer = !navDrawer"/>
    <nuxt-link to="/" class="text-decoration-none white--text" style="padding-left:7.5%;">
      <v-img src="QUBAST_png.png" height="40" width="260px" contain/>
    </nuxt-link>
    <!-- <nuxt-link to="/" class="text-decoration-none " style="color:black;">
      <v-toolbar-title :class=" ($vuetify.breakpoint.mdAndUp ? 'headline' : '') || ($vuetify.breakpoint.smAndDown ? 'title' : '')">
        {{ $vuetify.breakpoint.xsOnly ? 'QUBAST' : 'Qualified Basic Skills Training - QUBAST Project'}}
      </v-toolbar-title>
    </nuxt-link> -->
    <v-spacer></v-spacer>
    <v-toolbar-items v-if="$vuetify.breakpoint.lgAndUp">
      <v-btn v-for="btn in mainMenu" :key="btn.label" :to="btn.path" text> {{ btn.label }} </v-btn>
      <v-btn text href="https://app.followup.prios.no/" target="_blank">
        Login
      </v-btn>
      <v-btn icon @click="$refs.contactForm.openContact()">
        <v-icon>mdi-email-outline</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>