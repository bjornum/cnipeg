<template>
  <v-col cols="12">
    <v-card flat>

      <!-- First Page - List of all the companies -->
      <template>
        <v-btn v-if="currentRouter == '/evisittool'" class="pa-2" text style="margin-top:-4px;">E-Visit Tool</v-btn>
        <v-btn v-else class="pa-2" text to="/evisittool" style="margin-top:-4px; color:lightgrey;">E-Visit Tool</v-btn>
      </template>

      <!-- Second Page - Selected a specific Company -->
      <template v-if="currentRouter == '/evisittoolCompany'">
        <span class="title">></span>
        <!-- <v-btn class="pa-2" text style="margin-top:-4px;">{{companyData.title}}</v-btn> -->
        <v-btn class="pa-2" text style="margin-top:-4px;">Company Name</v-btn>
      </template>

      <!-- When on a Third page, displaying the correct version of the button -->
      <template v-if="currentRouter != '/evisittoolCompany' && currentRouter != '/evisittool' ">
        <span class="title">></span>
        <!-- <v-btn class="pa-2" text to="/evisittoolCompany" style="margin-top:-4px; color:lightgrey;">{{companyData.title}}</v-btn> -->
        <v-btn class="pa-2" text to="/evisittoolCompany" style="margin-top:-4px; color:lightgrey;">Company Name</v-btn>
      </template>

      <!-- Third page v1 - Contact Us Page -->
      <template v-if="currentRouter == '/evisittoolCompanyContact'">
        <span class="title">></span>
        <v-btn class="pa-2" text style="margin-top:-4px;">Contact Us</v-btn>
      </template>

      <!-- Third page v2 - About Page -->
      <template v-if="currentRouter == '/evisittoolCompanyAbout'">
        <span class="title">></span>
        <v-btn class="pa-2" text style="margin-top:-4px;">About</v-btn>
      </template>
    </v-card>
  </v-col>
</template>

<script>
  export default {
    data(){
      return {
        currentRouter: this.$router.currentRoute.path,
        // companyData: {},
      }
    },
    mounted(){
      // this.getCompanyData()
    },
    methods: {
      // getCompanyData(){
      //   this.companyData = JSON.parse(localStorage.getItem('key'));
      // }
    }
  }
</script>