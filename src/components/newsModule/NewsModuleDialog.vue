<template>
  <div>
    <v-dialog v-model="newsDialog" fullscreen>
      <v-card>
        <v-card-title>
          <v-spacer></v-spacer>
          <span v-if="$vuetify.breakpoint.mdAndDown" class="mainHeaderPhone" >{{newsCardData.title}}</span>
          <span v-else class="mainHeader newsHeaderTitle" >{{newsCardData.title}}</span>
          <v-spacer />
          <v-btn large class="floatingCloseDialogButton" color="error" icon @click="closeNewsDialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <div style="min-height:180px;" class="pb-10">
          <v-img v-if="newsCardData.media_url" :src="newsCardData.media_url" alt="News Image" max-height="300px" contain ></v-img>
          <div v-else style="height:200px; width:auto; background-color:#D1D1D1; margin:0px 15px 0px 15px;"></div>
        </div>
        <v-divider></v-divider>
        <v-divider></v-divider>
        <v-divider></v-divider>
        <v-row class="ma-0 pa-0">
          <!-- News Content -->
          <v-col cols="12" sm="12" xs="12" :xl="item.class_list.split('xs')[1]" :lg="item.class_list.split('xs')[1]" :md="item.class_list.split('xs')[1]" class="ma-0 pa-0 pa-5" v-for="(item, index) in newsCardContentData" :key="index">
            <!-- Image Content -->
            <div v-if="item.type == 'image'">
              <v-img v-if="item.content" :src="item.content" alt="News Image" max-height="600" contain></v-img>
            </div>
            <!-- Text Content -->
            <div v-else-if="item.type == 'text'">
              <p v-html="item.content" class="pl-5 pb-5 mb-0 mainSubHeader"></p>
            </div>
            <!-- Youtube Content -->
            <div v-else-if="item.type == 'youtube_video'">
              <iframe :src="item.content" width="90%" style="min-height:600px;" ></iframe>
            </div>
            <!-- Link Content -->
            <div v-else-if="item.type == 'embededLink'">
              <iframe :src="item.content" width="90%" style="min-height:600px;" ></iframe>
            </div>
            <!-- Divider Content -->
            <div v-else-if="item.type == 'rowDivider'">
              <v-divider style="border:1px solid lightgrey;"></v-divider>
            </div>
            <!-- Unknown type -->
            <div v-else>
              <p>{{item}}</p>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data(){
    return {
      // Save this key within the .env file  - FIX
      accessKey:window.btoa('bac436b32a36431bb437b9509b6d3495'),
      newsDialog: false,
      newsCardData: [],
      newsCardData: [],
      newsCardContentData: []
    }
  },
  methods: {

    // Open Dialog
    openNewsDialog(originalData, contentData){
      this.newsDialog = true;
      this.newsCardData = originalData;
      this.newsCardContentData = contentData;
    },

    // Close Dialog
    closeNewsDialog(){
      this.newsDialog = false;
      this.resetDialogData();
    },

    // Reset Dialog
    resetDialogData(){
      this.newsCardData = [];
      this.newsCardContentData = [];
    },
  }
}
</script>