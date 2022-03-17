<template>
  <div class="pageWidth">
    <v-row>
      <v-col cols="12" class="mt-5"></v-col>
      <!-- Headliner, Tab with the files -->
      <v-col cols="9">
        <p>Resources</p>
        <v-tabs active-class="tabsActive">

          <v-tab>Videos</v-tab>
          <v-tab>Files</v-tab>
          <v-tab>Courses</v-tab>
          <v-tab>Podcast</v-tab>
          <v-tab>Sound</v-tab>
          <v-tab>Other</v-tab>

          <v-tab-item class="pt-6 mt-5">
            Videos
          </v-tab-item>

          <v-tab-item class="pt-6 mt-5">
            Files
          </v-tab-item>

          <v-tab-item class="pt-6 mt-5">
            Courses
          </v-tab-item>

          <v-tab-item class="pt-6 mt-5">
            Podcast
          </v-tab-item>

          <v-tab-item class="pt-6 mt-5">
            Sound
          </v-tab-item>

          <v-tab-item class="pt-6 mt-5">
            Other stuff 
          </v-tab-item>


        </v-tabs>
      </v-col>
      <!-- Display content clicked -->
      <v-col cols="3">

      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return{

    }
  }
}
</script>

<style scoped>
  @import '../../assets/styles/styleSMAB.css';
</style>