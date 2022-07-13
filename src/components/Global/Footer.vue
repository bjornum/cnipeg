<template>
  <v-footer color="#FFFFFF" elevation="10">
    <v-row  no-gutters>
      <v-col cols="12">
        <v-divider class="dividerStyling"></v-divider>
      </v-col>
      <!-- EU Logo -->
      <v-col cols="12" xl="2" lg="2" md="2" sm="12" xs="12" v-if="$vuetify.breakpoint.mdAndDown">
        <v-img src="img/EU_POS.png" contain max-width="300"></v-img>
      </v-col>
      <v-col v-else cols="12" xl="2" lg="2" md="2" sm="12" xs="12">
        <v-img src="img/EU_POS.png" contain height="100"></v-img>
      </v-col>
      <!-- Text -->
      <v-col v-if="$vuetify.breakpoint.mdAndDown" cols="12" xl="8" lg="8" md="8" sm="12" xs="12" class="pl-0 pt-3" >
        <p class="footerText">Footer design will change depending on content</p>
        <p class="footerText">Contact info</p>
      </v-col>
      <v-col v-else cols="12" xl="8" lg="8" md="8" sm="12" xs="12" class="pl-15 pt-3">
        <p class="footerText">Footer design will change depending on content</p>
        <p class="footerText">Contact info</p>
      </v-col>
      <!-- Image -->
      <v-col cols="12" xl="2" lg="2" md="2" sm="12" xs="12">
        <!-- <v-img class="mt-5" src="img/EVOLVE.png"  max-height="130" max-width="130" contain></v-img> -->
        <p class="pt-7" style="font-weight: bold; font-size: 20px; color: blue;">projectTemplate</p>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data(){
    return {

    }
  }
}
</script>

<style scoped>
a:link { text-decoration: none; }
a:visited { text-decoration: none; }
a:hover { text-decoration: underline; }

.dividerStyling {
  background-color:#329d9c;
  border-radius: 4px;
  opacity: 1;
  padding: 2px;
  margin-bottom: 20px;
  margin-top: 5px;
}

.footerText {
  font-family: 'Lato', sans-serif;
  text-align: left;
  letter-spacing: 0px;
  color: #6A6A6A;
  opacity: 1;
  font-size: 14px;
}

</style>