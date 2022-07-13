<template>
  <div class="homePageWidth">
    <v-row>
      <v-col cols="12" class="mt-15"></v-col>
      <v-col cols="2"></v-col>
      <v-col cols="8">
        <p class="mainHeader trainingHeaderTitle">Training Modules</p>
        <p class="mainSubHeader">This page will be designed when the content is decided</p>
      </v-col>

      <v-col cols="12">
        <TrainingPage></TrainingPage>
      </v-col>

    </v-row>
  </div>
</template>

<script>
import TrainingPage from "@/components/TrainingModules/TrainingPage.vue"
export default {
  name: 'Training-Modules',
  components: {
    TrainingPage
  },
  data(){
    return {
      
    }
  }
}
</script>