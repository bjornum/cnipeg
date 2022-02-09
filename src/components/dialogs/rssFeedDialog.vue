<template>
  <div>
    <v-dialog v-model="openRssDialog" width="50vw">
      <v-card class="red lighten-5">
        <v-card-title>
          <v-spacer></v-spacer>
          <!-- <span class="headline">{{rssContent.title}}</span> -->
          <v-spacer />
          <v-btn color="error" icon @click="closeRssDialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data(){
    return {
      openRssDialog: false,
      rssContent: [],

    }
  },
  methods:{

    // Open Dialog
    openRssDialog(data){
      this.openRssDialog = true;
      this.resetRssDialog();
      this.rssContent = data;
    },

    // Close Dialog
    closeRssDialog(){
      this.openRssDialog = false;
      this.resetRssDialog();
    },

    // Reset Dialog
    resetRssDialog(){
      this.rssContent
    }

  }
}
</script>