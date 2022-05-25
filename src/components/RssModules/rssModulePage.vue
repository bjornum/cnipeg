<template>
  <div class="homePageWidth">
  <!-- <RssDialog ref="openingRssDialog"></RssDialog> -->
    <v-row>
      <v-col cols="12" class="mt-15"></v-col>
      <v-col cols="12" xl="2" lg="2" md="2" sm="12" xs="12"></v-col>
      <v-col cols="12" xl="8" lg="8" md="8" sm="12" xs="12" class="mb-15">
        <v-row> 
          <!-- RSS feed Chapter info -->
          <v-col cols="12">
            <p class="rssChapterTitle">RSS feed</p>
            <p class="rssChapterDescription">Keep up to date about the projectTemplate</p>
          </v-col>
        </v-row>
      </v-col>

      <!-- <v-col cols="12">
        <pre>{{rssEntries}}</pre>
      </v-col> -->

      <v-col cols="6" v-for="(rssFeedItem, rssFeedItemIndex) in rssEntries" :key="rssFeedItemIndex">
        <!-- <pre>{{rssFeedItem[0].title}}</pre> -->
        <!-- <p class="title">{{rssEntries[rssFeedItemIndex].title}}</p> -->
        <!-- <p class="text-center title">{{rssFeedItem}}</p> -->
        <!-- <v-card>
          <pre>{{rssFeedItem}}</pre>
        </v-card> -->

        <v-row>
          <v-col cols="6" v-for="(rssFeed, rssFeedIndex) in rssFeedItem" :key="rssFeedIndex">
            <v-card height="100%">
              <p class="text-center pb-0 mb-0" style="font-size: 16px; color: #212121;">{{rssFeed.title}}</p>
              <p class="mb-0 pt-0" style="font-size: 14px; color:#424242;">{{rssFeed.description}}</p>
              <!-- <pre>{{rssFeed}}</pre> -->
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <!-- RSS feed Cards - Test 1 -->
      <!-- <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12" class="mb-3" v-for="(rssFeed, rssFeedIndex) in rssEntries" :key="rssFeedIndex">
        <v-card height="100%" :style="`border-right:3px solid ${colorArr[rssFeedIndex]}`" @click="$refs.openingRssDialog.openRssDialog(rssFeed)">
          <v-row>
            <v-col cols="3" style="height: 100px;" class="ma-0 pa-0">
              <v-img v-if="rssFeed.image" :src="rssFeed.image" alt="News Image" max-height="50px" contain></v-img>
              <div v-else style="height:85px; width:100px; background-color:#D1D1D1; margin:5px 15px 15px 15px;"></div>
            </v-col>
            <v-col cols="8">
              <p class="rssCardTitle">{{rssFeed.title}}</p>
              <p class="rssCardDescription">{{rssFeed.content}}</p>
            </v-col>
            <v-col cols="12" xl="1" lg="1" md="1" sm="12" xs="12" class="pb-10">
              <p class="rssCardDate">{{rssFeed.date}}</p>
              <v-icon class="ml-5 rssCardArrow">mdi-arrow-right</v-icon>
            </v-col>
          </v-row>
        </v-card>
      </v-col> -->
      <!-- RSS feed Cards - Test 2 -->
      <!-- <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
        <pre>{{rssEntries}}</pre>
        <p class="title text-center">{{testTitle}}</p>
        <v-row class="mb-10">
          <template v-for="(item, index) in rssEntries" >
            <v-col cols="12" xl="4" lg="4" md="4" sm="12" xs="12" v-if="item.description[0] !== ''" :key="index">
              <v-card :href="item.link[0]" target="_blank" height="100%" class="pa-3 blue lighten-4">
                <p class="text-center pb-0 mb-0" style="font-size: 16px; color: #212121;">{{item.title[0]}}</p>
                <p class="mb-0 pt-0" style="font-size: 14px; color:#424242;">{{item.description[0]}}</p>
              </v-card>
            </v-col>
          </template>
        </v-row>
      </v-col> -->
        <!-- <p>{{item.link[0]}}</p> -->
        <!-- <p>{{item.category}}</p> -->
        <!-- <p>{{item.pubDate[0]}}</p> -->
        <!-- <v-chip class="ma-1" v-for="(chip, chipIndex) in item.category" :key="chipIndex">
          <span style="font-size: 12px;">{{chip}}</span>
        </v-chip> -->

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
      // rssEntries: [],
      rssEntries: [],

      // Testing Purposes
      rssUrl: "https://www.nrk.no/trondelag/toppsaker.rss",
      rssCount: 10,
      testTitle: "",

      // Delete after
      colorArr:[
        "#205072",
        "#329D9C",
        "#D83636",
        "#DD9A30",
        "#205072",
      ],
    }
  },
  mounted(){
    // this.getAllRSSEntries();
    this.getAllRSSEntriesTest();
  },
  methods: {
    getAllRSSEntriesTest(){
      this.$http.get(`https://app.followup.prios.no/api/resource_management/content?type=rss`,{headers:{Tempaccess:this.accessKey}}).then((response) => {
        console.log("test two", response.data);
        // response.data.forEach(element => this.rssEntries.push(element));

        // this.rssEntries = response.data;
        response.data.forEach(element => this.getRssEntry(element));
        
      })
    },

    getRssEntry(rssData){
      // console.log("RSS DATA ENTRY", rssData);
      
      this.$http.get(`https://app.followup.prios.no/api/resource_management/content?mode=getrssdata&url=${rssData.content}&rss_count=10`,{headers:{Tempaccess:this.accessKey}}).then((response) => {
        // console.log("Response", response.data);
        // this.rssEntries = response.data.items;
        // if(response.data) {
        //   let responseObject = response.data.items;
        //   // this.rssEntries = this.rssEntries.push(response.data.items);
        //   console.log(responseObject)
        // } else {
        //   console.log("something went wrong");
        // }
        // this.testTitle = response.data.title[0];

        let queryData = response.data;
        console.log("queryData", queryData);

        let parentData = rssData;
        console.log("rssData", parentData);

        let combined = queryData + parentData;
        console.log("combined test 1", combined);

        let combinedTwo = {...queryData, ...parentData }
        console.log("combined test 2", combinedTwo);



        this.rssEntries = queryData;
      })
    },

    /*
      1. Ask a query, where you specify to get all entries of type rss.
      2. These saved into an empty array
      3. Iterate these in, based on type or source (twitter, nrk, other)
      4. Display a max number of these.
    */

   getAllRSSEntries(){
      // this.$http.get("https://newsapi.org/v2/top-headlines/sources?apiKey=30f48b58e1744751ae853194c0d9ebb1").then((response) => {
      //   console.log("works", response.data)
      // })

      // this.$http.get("https://www.enterprisedigi.com/rss/articles", {headers: {"Access-Control-Allow-Origin": "*"}}).then((response) => {
      //   console.log("test", response.data)
      // })

      // this.$http.get(`api/resource_management/content?mode=getrssdata&url=${this.targetRss.url}&rss_count=${this.targetRss.rss_count}`).then((response) => {
      //   console.log("test two", response.data)
      // })

      // this.$http.get(`api/resource_management/content?mode=getrssdata&url=${this.rssUrl}&rss_count=${this.rssCount}`,{headers:{Tempaccess:this.accessKey}}).then((response) => {
      //   console.log("test two", response.data);
      //   this.rssEntries = response.data;
      // })
 

      // this.$http.get(`https://app.followup.prios.no/api/resource_management/content?mode=getrssdata&url=https://www.nrk.no/trondelag/toppsaker.rss&rss_count=5`,{headers:{Tempaccess:this.accessKey}}).then((response) => {
      //   console.log("test two", response.data);
      //   this.rssEntries = response.data;
      // })

      this.$http.get(`https://app.followup.prios.no/api/resource_management/content?mode=getrssdata&url=${this.rssUrl}&rss_count=${this.rssCount}`,{headers:{Tempaccess:this.accessKey}}).then((response) => {
        console.log("test two", response.data);
        this.rssEntries = response.data.items;
        this.testTitle = response.data.title[0];
      })
    },
  }
}
</script>

<style scoped>
/* General Page */
.homePageWidth {
  width: 90vw; 
  margin:auto auto;
}
.rssChapterTitle {
  font-family: 'Barlow', sans-serif;
  font-weight: bold;
  font-size: 46px;
  color: #434343;
  opacity: 1;
  letter-spacing: 0px;
  text-align: left;
}
.rssChapterDescription {
  font-family: 'Lato', sans-serif;
  font-weight: normal;
  font-size: 14px;
  color: #6A6A6A;
  opacity: 1;
  letter-spacing: 0px;
  text-align: left;
}
.rssCard {
  box-shadow: 0px 2px 16px #00000033;
}
.rssCardTitle {
  font-family: 'Barlow', sans-serif;
  font-weight: bold;
  font-size: 28px;
  color: #434343;
  opacity: 1;
  letter-spacing: 0px;
  text-align: left;
}
.rssCardDescription {
  font-family: 'Lato', sans-serif;
  font-weight: normal;
  font-size: 14px;
  color: #6A6A6A;
  opacity: 1;
  letter-spacing: 0px;
  text-align: left;
}
.rssCardDate {
  font-family: 'Lato', sans-serif;
  font-weight: normal;
  font-size: 11px;
  color: #6A6A6A;
  opacity: 1;
  letter-spacing: 0px;
  text-align: left;
}
.rssCardArrow {
  color: #205072;
  opacity: 1;
}
</style>