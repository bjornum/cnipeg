<template>
   <div class="homePageWidth">
    <NewsModuleDialog ref="openingNewsDialog"></NewsModuleDialog>
    <v-row>
      <v-col cols="12" class="mt-15"></v-col>
      <v-col cols="12" xl="2" lg="2" md="2" sm="12" xs="12"></v-col>
      <v-col cols="12" xl="8" lg="8" md="8" sm="12" xs="12" class="mb-15">
        <v-row>
          <!-- Headliner -->
          <v-col cols="12">
            <p class="mainHeader newsHeaderTitle">News</p>
          </v-col>
          <!-- Description -->
          <v-col cols="12" class="mb-15">
            <p class="mainSubHeader">Keep up to date about the projectTemplate</p>
          </v-col>
          <!-- If no content -->
          <v-col cols="12" v-if="allTheNews == ''">
            <p class="text-center title">No news made public yet.</p>
          </v-col>
          <!-- If there are content -->
          <v-col v-else cols="12" xl="4" lg="4" md="4" sm="12" xs="12" v-for="(newsData, newsDataIndex) in allTheNews" :key="newsDataIndex">
            <v-card height="100%" @click="getNewsContent(newsData)">
              <v-row>
                <v-col cols="12" class="pb-0">
                  <v-row>
                    <v-col cols="12">
                      <v-img v-if="newsData.media_url" :src="newsData.media_url" alt="News Image" width="auto" height="200px" cover class="ml-2 mr-2"></v-img>
                      <div v-else class="missingImageBlock"></div>
                    </v-col>
                    <v-col cols="12" style="height:120px;" class="mb-0 ml-2 pb-0">
                      <p class="pl-2 mb-0 mainTitle newsCardTitle">{{newsData.title}}</p>
                      <p class="pa-2 mb-0 pb-0 mainDescription textLimiter">{{newsData.description}}</p>
                    </v-col>
                    <v-col cols="12" class="pt-0 mt-0 pt-7">
                      <v-card-actions class="pt-0">
                        <p class="cardTextButton mr-2 pt-3">Read article</p>
                        <v-icon class="arrowButton">mdi-arrow-right</v-icon>
                      </v-card-actions>
                    </v-col>
                  </v-row>
                  <v-divider class="dividerPositioning" width="98%" style="padding: 2px;" :style="`background-color:${colorArr[newsDataIndex]}`"></v-divider>
                </v-col>
                <v-col cols="12"></v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import NewsModuleDialog from "./NewsModuleDialog.vue"
export default {
  components: {
    NewsModuleDialog
  },
  data(){
    return {
      // Crypt the access key within the .env file
      accessKey:window.btoa('bac436b32a36431bb437b9509b6d3495'),

       // Test is 106 or 107 - default 999
      tenant: 106,
      allTheNews: [],
      theNewsContent: [],
      colorArr:[ "#205072", "#329D9C", "#D83636", "#DD9A30", "#205072", "#329D9C" ],
    }
  },
  mounted(){
    this.getAllNews();
  },
  methods: {
    // Get all news made for this tenant
    getAllNews(){
      this.$http.get(`https://app.followup.prios.no/api/resource_management/news?mode=getpublicnews&tenant_id=${this.tenant}`,{headers:{Tempaccess:this.accessKey}}).then(response =>{
        this.allTheNews = response.data;
        console.log("Responsen", response.data);
      })
    },

    // Get all the content of the clicked news and open the dialog
    getNewsContent(data){
      this.$http.get(`https://app.followup.prios.no/api/resource_management/news_content?mode=getpublicnews&news_id=${data.id}`,{headers:{Tempaccess:this.accessKey}}).then(response =>{
        this.theNewsContent = response.data;
        console.log("Responsen", response.data);
      }).then(responsen => {
        this.openTheDialog(data, this.theNewsContent);
      })
    },

    // Open the Dialog while passing the correct data
    openTheDialog(originalData, contentData){
      this.$refs.openingNewsDialog.openNewsDialog(originalData, contentData);
    },
  }
}
</script>