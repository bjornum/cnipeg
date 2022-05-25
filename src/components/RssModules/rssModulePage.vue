<template>
  <div class="homePageWidth">
    <v-row>
      <v-col cols="12" class="mt-15"></v-col>
      <v-col cols="12" xl="2" lg="2" md="2" sm="12" xs="12"></v-col>
      <!-- RSS feed Chapter info -->
      <v-col cols="12" xl="8" lg="8" md="8" sm="12" xs="12" class="mb-15">
        <v-row> 
          <v-col cols="12">
            <p class="mainHeader rssHeaderTitle">RSS feed</p>
            <p class="mainSubHeader">Keep up to date about the projectTemplate</p>
          </v-col>
        </v-row>
      </v-col>

      <!-- Display RSS cards -->
      <v-col cols="6" v-for="(item, index) in rssEntryContent" :key="index">
        <p class="text-center">
          <span>Source: </span> 
          <span>{{item.link[0]}}</span>
        </p>
        <v-row>
          <v-col cols="12" v-for="(rssCard, rssCardIndex) in item.items" :key="rssCardIndex">
            <v-card :href="rssCard.link" target="_blank" height="100%" class="pa-3 blue lighten-4">
              <p class="mainTitle text-center pb-0 mb-0 pa-1">{{rssCard.title[0]}}</p>
              <p class="mainDescription rssCardDescription mb-0 pt-0 pa-1">{{rssCard.description[0]}}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

    </v-row>
  </div>
</template>

<script>
export default {
  components: {
    
  },
  data(){
    return {
      accessKey:window.btoa('bac436b32a36431bb437b9509b6d3495'),
      mainRssEntries: [],
      rssEntryContent: [],

      // Testing Purposes
      rssUrl: "https://www.nrk.no/trondelag/toppsaker.rss",
      rssCount: 10,
    }
  },
  mounted(){
    this.getAllRSSEntries();
  },
  methods: {

    // #1. Get ALL entries of type RSS and pass them to the iterator
    getAllRSSEntries(){
      this.$http.get(`https://app.followup.prios.no/api/resource_management/content?type=rss`,{headers:{Tempaccess:this.accessKey}}).then((response) => {
        // this.mainRssEntries = response.data;
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
      this.$http.get(`https://app.followup.prios.no/api/resource_management/content?mode=getrssdata&url=${rssSource}&rss_count=10`,{headers:{Tempaccess:this.accessKey}}).then((response) => {
        this.rssEntryContent.push(response.data);
      }).catch(function (error) {
        console.log("%cError", "color: red; display: block; width: 100%; font-size:36px; font-weight: bold; border:solid black 2px; padding:5px; background-color: lightblue;",error.toJSON());
      });
    },

  }
}
</script>