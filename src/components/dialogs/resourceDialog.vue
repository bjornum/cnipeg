<template>
  <v-dialog v-model="resourceDialog" width="auto">
    <v-card class="ma-0 pa-0 pa-5" style="overflow:hidden;">
      <v-row>
        <v-col cols="12" class="ma-0 pa-0"> 
          <!-- Images -->
          <v-img v-if="resourceContent.type == 'image'" :src="resourceContent.content" contain max-width="auto"></v-img>
          <!-- Youtube Videos -->
          <template  v-else-if="resourceContent.type == 'youtube_video'">
            <iframe v-if="$vuetify.breakpoint.mdAndDown" width="300" height="300" :src="resourceContent.content" :title="resourceContent.title" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe v-else width="560" height="315" :src="resourceContent.content" :title="resourceContent.title" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </template>
          <!-- Files -->
          <template v-else-if="resourceContent.type == 'files'">
            <iframe v-if="$vuetify.breakpoint.mdAndDown" width="300" height="600" :src="resourceContent.content" :title="resourceContent.title" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe v-else width="600" height="800" :src="resourceContent.content" :title="resourceContent.title" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </template>
          <!-- External Content -->
          <template  v-else-if="resourceContent.type == 'external_content'">
            <iframe v-if="$vuetify.breakpoint.mdAndDown" width="300" height="600" :src="resourceContent.content" :title="resourceContent.title" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe v-else width="600" height="800" :src="resourceContent.content" :title="resourceContent.title" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </template>
          <!-- Courses -->

          <!-- Podcast -->
          
          <!-- If nothing are found -->
          <pre v-else class="pa-10">{{resourceContent}}</pre>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data(){
    return {
      resourceDialog: false,
      resourceType: "",
      resourceContent: []
    }
  },
  methods: {

    // Open Dialog
    openDialog(resourceData){
      console.log("resourceData from Parent", resourceData);
      this.resourceContent = resourceData;
      this.resourceDialog = true;
    },

    // Close Dialog
    closeDialog(){
      this.resetDialog();
      this.resourceDialog = false;
    },

    // Reset Dialog
    resetDialog(){
      this.resourceType = "",
      this.resourceContent = []
    }

  }
}
</script>

<style scoped>
.removingOverflow {
  overflow-y: hidden !important;
}

.closeButtonStyling {
  position:fixed; 
  top:30px; 
  right:30px; 
  z-index: 5; 
  border:1px solid black; 
  background-color:rgba(255, 0, 0, 0.2);
}
</style>