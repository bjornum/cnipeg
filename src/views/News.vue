<template>
  <div class="homePageWidth">
    <v-row>
      <v-col cols="12" xl="2" lg="2" md="2" sm="12" xs="12" class="pt-0"></v-col>
      <v-col cols="12" xl="8" lg="8" md="8" sm="12" xs="12">
        <NewsPage></NewsPage>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import NewsPage from "@/components/NewsComp/NewsPage.vue"
export default {
  name: 'News',
  components: {
    NewsPage
  },
  data(){
    return {
     
    }
  },
}
</script>

<style scoped>
/* General Page */
.homePageWidth {
  width: 90vw; 
  margin:auto auto;
}
</style>