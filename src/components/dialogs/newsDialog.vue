<template>
  <div>

    <!-- There is an error message within the console. that comes up.   -  Check this one out -->
    <v-dialog v-model="newsDialog" width="50vw">
      <v-card>
         <!-- <p>{{theNewsContent[0]}}</p>
        <p>{{newsContent}}</p> -->
        <v-card-title>
          <v-spacer></v-spacer>
          <span class="newsDialogTitle">{{newsContent.title}}</span>
          <v-spacer />
          <v-btn color="error" icon @click="closeNewsDialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <div style="min-height:180px;">
          <v-img v-if="newsContent.media_url" :src="newsContent.media_url" alt="News Image" max-height="300px" contain class="ml-1"></v-img>
          <div v-else style="height:200px; width:auto; background-color:#D1D1D1; margin:0px 15px 0px 15px;"></div>
        </div>
        <div v-if="theNewsContent != ''">
          <p v-html="theNewsContent[0].content" class="pl-5 pt-15 pb-5 mb-0 newsDialogDescription" style="font-size:20px"></p>
        </div>
        <div v-else></div>
        <!-- <v-divider></v-divider>
        <v-card-actions class="pb-5">
          <v-btn class="seeAllButtonBorder seeAllButtonText" rounded to="/news">
            Go to External Page
          </v-btn>
        </v-card-actions> -->
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
      newsContent: {},
      theNewsContent: {}
    }
  },
  methods: {

    // Open Dialog
    openNewsDialog(data){
      this.newsDialog = true;
      this.newsContent = data;
      this.getNewsContent(data.id);
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

    // Get the content of the news, based on the newsID
    getNewsContent(newsID){
       this.$http.get(`https://app.followup.prios.no/api/resource_management/news_content?mode=getpublicnews&news_id=${newsID}`,{headers:{Tempaccess:this.accessKey}}).then(response =>{
        this.theNewsContent = response.data;
      })
    }

  }
}
</script>

<style scoped>
.newsDialogTitle {
  font-family: 'Barlow', sans-serif;
  font-weight: bold;
  font-size: 46px;
  color: #434343;
  opacity: 1;
  letter-spacing: 0px;
  text-align: left;
}
.newsDialogDescription {
  font-family: 'Lato', sans-serif;
  font-weight: normal;
  font-size: 14px;
  color: #6A6A6A;
  opacity: 1;
  letter-spacing: 0px;
  text-align: left;
}
.newsDialogDate {
  font-family: 'Lato', sans-serif;
  font-weight: normal;
  font-size: 11px;
  color: #6A6A6A;
  opacity: 1;
  letter-spacing: 0px;
  text-align: left;
}

.seeAllButtonText {
  font-family: 'Lato', sans-serif;
  font-weight: normal;
  font-size: 18px;
  color: #205072;
  opacity: 1;
  text-align: center;
  letter-spacing: 0px;
  text-transform: initial;
}
.seeAllButtonBorder {
  border: 3px solid #205072;
  font-family: 'Lato', sans-serif;
  opacity: 1;
  border-radius: 52px;
}
.seeAllButtonBorder:after {
  border: 3px solid #d6d2d24d;
  content: '';
  position: absolute;
  top: -9px;
  right: -9px;
  bottom: -9px;
  left: -9px;
  border-radius: 4em;
  box-shadow: 0px 2px 12px #00000033;
}
</style>