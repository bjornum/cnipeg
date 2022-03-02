<template>
  <div class="homePageWidth">
    <v-row>
      <v-col cols="12" class="mt-5"></v-col>
      <v-col cols="12">This is About</v-col>
    </v-row>
  </div>
</template>

<script>
import LanguageTest from "@/components/TestAndDevelopment/LanguageTest.vue"
import SelectLocale from "@/components/TestAndDevelopment/SelectLocale.vue"
export default {
  name: 'About',
  components:{
    LanguageTest,
    SelectLocale
  },
  data(){
    return {
      
    }
  }
}
</script>

<style scoped>
/* General Page */
.homePageWidth {
  width: 90vw; 
  margin:auto auto;
}

</style>