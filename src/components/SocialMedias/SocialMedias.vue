<template>
  <v-col cols="12" class="mb-15" v-if="
      mySocialMedias.linkedIn != '' || 
      mySocialMedias.facebook != '' || 
      mySocialMedias.instagram != '' || 
      mySocialMedias.youtube != '' || 
      mySocialMedias.twitter != ''
    "> 
    <v-row class="ma-0 pa-0">
      <v-col cols="1"></v-col>
      <v-col cols="2" v-if="mySocialMedias.linkedIn" >
        <a :href="mySocialMedias.linkedIn" target="_blank">
          <v-img src="img/linkedin.png" contain height="90px"></v-img>
        </a>
      </v-col>
      <v-col cols="2" v-if="mySocialMedias.facebook">
        <a :href="mySocialMedias.facebook" target="_blank">
          <v-img src="img/facebookk.png" contain height="90px"></v-img>
        </a>
      </v-col>
      <v-col cols="2" v-if="mySocialMedias.instagram">
        <a :href="mySocialMedias.instagram" target="_blank">
          <v-img src="img/instagram.png" contain height="90px"></v-img>
        </a> 
      </v-col>
      <v-col cols="2" v-if="mySocialMedias.youtube">
        <a :href="mySocialMedias.youtube" target="_blank">
          <v-img src="img/youtube.png" contain height="90px"></v-img>
        </a>
      </v-col>
      <v-col cols="2" v-if="mySocialMedias.twitter">
        <a :href="mySocialMedias.twitter" target="_blank">
          <v-img src="img/Twitter2.png" contain height="90px"></v-img>
        </a>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
  export default {
    data() {
      return {
        // companyData: {},
        mySocialMedias: {
          linkedIn: "",
          facebook: "",
          instagram: "",
          youtube: "",
          twitter: ""
        }
      }
    },
    mounted(){
      // this.getCompanyData();
    },
    methods: {
      // Get Localstorage Company Data
      // getCompanyData(){
      //   this.companyData = JSON.parse(localStorage.getItem('key'));
      // }
    }
  }
</script>