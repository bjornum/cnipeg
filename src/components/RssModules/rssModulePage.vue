<template>
<!-- Add Moment, for this list through ** npm i moment **  -->
  <div class="mb-10">
    <v-row>
      <v-col cols="12" class="pt-15 mt-15 pb-0">
        <p class="rssHeadlinerTitle text-center" v-if="rssEntryContent != ''">External News</p>
      </v-col>
      <!-- Display RSS cards -->
      <v-col cols="12" xl="4" lg="4" md="4" sm="12" xs="12" v-for="(item, index) in randomList" :key="index">
        <v-hover v-slot:default="{ hover }">
          <v-card class="pa-5 pb-1" :elevation="hover ? 12 : 2" :href="item.link" target="_blank" height="100%">
            <v-row>
              <v-col cols="12" class="pb-0">
                <p class="rssCardTitle" style="font-size: 16px; height:20px;" v-if="$vuetify.breakpoint.width <= 959">{{item.title[0]}}</p>
                <p class="rssCardTitle" style="font-size: 14px; height:80px;" v-else-if="$vuetify.breakpoint.width <= 1366 && $vuetify.breakpoint.width >= 960">{{item.title[0]}}</p>
                <p class="rssCardTitle" style="font-size: 18px; height:90px;" v-else>{{item.title[0]}}</p>
                <p class="rssDescriptionPre" v-html="item.description[0].replace(/<img[^>]*>/, '')"></p>
              </v-col>
              <v-col cols="12" class="pt-0 mt-0 pb-0">
                <v-card-actions class="pt-0">
                  <p class="rssCardButton mr-2 pt-3">Read article</p>
                  <v-icon class="rssCardButtonArrow">mdi-arrow-right</v-icon>
                </v-card-actions>
              </v-col>
              <v-col cols="12" class="pt-0">
                <p style="font-size: 12px">{{item.link[0]}}</p>
              </v-col>
            </v-row>
            <v-divider class="newsCardDividerPositioning" width="98%" style="padding: 2px;" :style="`background-color:${colorArr[rssCardIndex]}`"></v-divider>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </div>
</template>

<script>
const moment = require("moment");
export default {
  data(){
    return {
      accessKey:window.btoa('bac436b32a36431bb437b9509b6d3495'),
      rssEntryContent: [],
      colorArr:[
        "#0E3196",
        "#249ebe",
        "#FF7E26",
        "#FFD43D"
      ],
    }
  },
  mounted(){
    this.getAllRSSEntries();
  },
  methods: {

    // #1. Get ALL entries of type RSS and pass them to the iterator
    getAllRSSEntries(){
      this.$http.get(`https://app.followup.prios.no/api/resource_management/content?tenant_id=1`,{headers:{Tempaccess:this.accessKey}}).then((response) => {
        let allRssEntriesFromFollowup = response.data;
        this.getRssSources(allRssEntriesFromFollowup);
      })
    },

    // #2. Get the entries from Follow-Up and run a for loop getting the Source URL to each RSS
    getRssSources(rssEntries){
      for(let index = 0; index < rssEntries.length; index++){
        this.getRssContent(rssEntries[index].content);  
      }
    },

    /* #3. Get the actual data, to implement into the html
      - Run a query utilising the parameter from the parent function.
        - Get all RSS Content of each RSS feed.
        - If successful, push to the Main RSS Array, as a new entry.
        - Else, display custom error message.
    */
    getRssContent(rssSource){
      this.$http.get(`https://app.followup.prios.no/api/resource_management/content?mode=getrssdata&url=${rssSource}&rss_count=8`,{headers:{Tempaccess:this.accessKey}}).then((response) => {
        this.rssEntryContent.push(response.data);
      }).catch(function (error) {
        console.log("%cError", "color: red; display: block; width: 100%; font-size:36px; font-weight: bold; border:solid black 2px; padding:5px; background-color: lightblue;",error.toJSON());
      });
    },
  },
  computed: {

    // Get RSS randomised and sorted by date using moment.
    randomList: function(){
      let compiledRSSEntryContent = [];
      // Get the arrays down to items (the rss posts themself)
       this.rssEntryContent.forEach(element => {
          element.items.forEach(item => {
            compiledRSSEntryContent.push(item);
          })
       });
       // Sort the content, based upon date - Utilise moment to change their format into an uniform one
       return compiledRSSEntryContent.sort((a, b) => {
        if (moment(a.pubDate[0]).isBefore(moment(b.pubDate[0]))) return 1;
        if (moment(a.pubDate[0]).isAfter(moment(b.pubDate[0]))) return -1;
        return 0;
      }).slice(0,6);
    }
  }
}
</script>

<style scoped>
.mainTitle{
  font-weight: bold; 
}

.rssCardTitle {
  font-family: 'Barlow', sans-serif;
  font-weight: bold;
  color: #434343;
  letter-spacing: 0px;
  text-align: left;
  opacity: 1;
  letter-spacing: 0px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3; 
  -webkit-box-orient: vertical;
  height: 90px; 
}
.rssDescriptionPre {
  font-family: 'Lato', sans-serif;
  font-weight: normal;
  text-align: left;
  color: #6A6A6A;
  opacity: 1;
  letter-spacing: 0px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3; 
  -webkit-box-orient: vertical;
  height: 70px;
}

.rssCardButton {
  font-family: 'Lato', sans-serif;
  font-weight: regular;
  font-size: 16px;
  text-align: left;
  color: #205072;
  opacity: 1;
  letter-spacing: 0px;
  text-decoration: underline;
}

.rssCardButtonArrow {
  color: #205072;
  opacity: 1;
}

.newsCardDividerPositioning {
  margin-left:1%; 
  margin-bottom:2%;
}

.rssHeadlinerTitle {
  font-family: 'Barlow', sans-serif;
  font-weight: bold;
  font-size: 26px;
  color: #434343;
  opacity: 1;
  letter-spacing: 0px;
  text-align: left;
}
</style>