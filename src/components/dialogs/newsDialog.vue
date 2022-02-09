<template>
  <div>
    <v-dialog v-model="newsDialog" width="50vw">
      <v-card class="red lighten-5">
        <v-card-title>
          <v-spacer></v-spacer>
          <span class="headline">{{newsContent.title}}</span>
          <v-spacer />
          <v-btn color="error" icon @click="closeNewsDialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <div style="min-height:180px;">
          <v-img v-if="newsContent.image" :src="newsContent.image" alt="News Image" max-height="300px" contain class="ml-1"></v-img>
        </div>
        <div>
          <p class="text-left pl-5 pt-15" style="font-size:20px">{{newsContent.article}}</p>
        </div>
        <v-divider></v-divider>
        <v-card-actions class="pb-5">
          <v-btn style="background-color:aqua;">Go to external Page</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data(){
    return {
      newsDialog: false,
      newsContent: [],
    }
  },
  methods: {

    // Open Dialog
    openNewsDialog(data){
      this.newsDialog = true;
      this.newsContent = data;
    },

    // Close Dialog
    closeNewsDialog(){
      this.newsDialog = false;
      this.resetDialogData();
    },

    // Reset Dialog
    resetDialogData(){
      this.newsContent = [];
    },

  }
}
</script>