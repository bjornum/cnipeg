<template>
  <div class="homePageWidth">
    <v-row>
      <v-col cols="12" xl="2" lg="2" md="2" sm="12" xs="12"></v-col>
      <v-col cols="12" xl="10" lg="10" md="10" sm="12" xs="12" class="ma-0 pa-0 pt-16 mt-16">
        <v-card class="ma-0 pa-0 lineBelowHeader" flat>
          <p class="ma-0 pa-0 mainTitle titleChapterFontSize">Partners</p>
        </v-card>
      </v-col>
      <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12" v-for="(item, index) in projectPartners" :key="index">
        <v-card class="cardBorder ma-2 pa-7 px-2"  height="100%">
          <v-row>
            <v-col cols="12">
              <v-card height="90px" flat class="d-flex" :href="item.link" target="_blank">
                <v-img class="mt-5" :src="item.image" contain />
              </v-card>
            </v-col>
            <v-col class="pb-0 mb-0" cols="12">
              <p class="pl-3 mainTitle titleFontSize">{{item.title}} 
                <span> 
                  <v-btn icon :href="item.link" target="_blank">
                    <v-icon color="green">mdi-open-in-new</v-icon>
                  </v-btn>
                </span>
              </p>
            </v-col>
            <v-col v-if="selectedIndex !== index" cols="12" class="ma-0 pa-0 pl-3 pr-3">
              <p class="pl-3 pr-3 partnerDescriptionPre textLimiter">{{item.description}}</p>
            </v-col>
          </v-row>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon v-if="selectedIndex !== index" @click="openingPartnerExpand(index)">
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
            <v-btn icon v-else @click="closingPartnerExpand()">
              <v-icon large color="black">mdi-chevron-up</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="index === selectedIndex">
              <v-divider></v-divider>
              <v-card-text>
                <p class="partnerDescriptionPost">{{item.description}}</p>
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedIndex: null,
      projectPartners: [
        { title: "Partner 1", image: "img/logo.png", description: "", link: "https://developer.mozilla.org/en-US/" },
        { title: "Partner 2", image: "img/logo.png", description: "Description of Partner here", link: "https://developer.mozilla.org/en-US/" },
        { title: "Partner 3", image: "", description: "Description of Partner here", link: "" },
        { title: "Partner 4", image: "", description: "", link: "" },
        { title: "Partner 5", image: "", description: "", link: "" },
      ]
    }
  },
  methods: {
    openingPartnerExpand(index){
      this.selectedIndex = index;
    },

    closingPartnerExpand(){
      this.selectedIndex = null;
    },

  }
}
</script>

<style scoped>

/* Border around the cards */
.cardBorder{ border: 3px #329D9C solid; }


/* Text styling */
.partnerDescriptionPre {
  font-family: 'Lato', sans-serif;
  font-weight: normal;
  text-align: left;
  color: #6A6A6A;
  opacity: 1;
  letter-spacing: 0px;
}
.partnerDescriptionPost {
  font-family: 'Lato', sans-serif;
  font-weight: normal;
  text-align: left;
  color: #6A6A6A;
  opacity: 1;
  letter-spacing: 0px;
}


</style>