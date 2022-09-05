<template>
  <div :class="$vuetify.breakpoint.lgAndDown ? 'pr-3 pl-3' : ''">
    <PartnerDialog ref="openPartnerDialog"></PartnerDialog>
    <v-col cols="12" align="center">
      <v-col cols="12" align="left" xl="8" lg="10" md="12" sm="12" xs="12" :class="$vuetify.breakpoint.smAndDown ? 'mt-0' : 'mt-15'">
        <v-row>
          <v-col cols="12" xl="10" lg="10" md="10" sm="12" xs="12" class="mt-12">
            <!-- <v-card class="ma-0 pa-0 box" flat> -->
            <p class="ma-0 pa-0 caHeadline">Partners</p>
            <!-- </v-card> -->
          </v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12" v-for="(item, index) in projectPartners" :key="index">
            <v-card class="cardBorder ma-2 pa-2 px-2" height="100%">
              <v-row>
                <v-col cols="12">
                  <v-card height="90px" flat class="d-flex" :href="item.link" target="_blank" v-if="item.title == 'PRIOS KOMPETANSE'">
                    <v-img class="mt-5" :src="item.image" contain />
                  </v-card>
                  <v-card height="120px" flat class="d-flex" :href="item.link" target="_blank" v-else>
                    <v-img class="mt-5" :src="item.image" contain />
                  </v-card>
                </v-col>
                <v-col class="pb-0 mb-0" cols="12">
                  <p class="pl-3 partnerTitle text-center mb-0" style="min-height:70px;">
                    {{ item.title }}
                    <span>
                      <v-btn icon :href="item.link" target="_blank">
                        <v-icon>mdi-open-in-new</v-icon>
                      </v-btn>
                    </span>
                  </p>
                </v-col>
                
              </v-row>
              <!-- <p class="text-center mb-0 mt-0 pt-0" v-if="selectedIndex !== index">read more</p> -->
              <v-card-actions class="pt-0 pb-0">
                <v-spacer></v-spacer>
                <v-btn block color="#BBDEFB" @click="$refs.openPartnerDialog.openDialog(item)" class="mt-5">Read More</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-col>
  </div>
</template>

<script>
import PartnerDialog from "@/components/Partners/PartnerDialog.vue"
export default {
  components: {
    PartnerDialog
  },
  data() {
    return {
      selectedIndex: null,
      projectPartners: [
        { 
          title: "Partner 1", 
          image: "img/logo.png",
          link: "https://developer.mozilla.org/en-US/",
          description: `
            <p>hello</p>
            <br>
            <p>world</p>
          `
        },
        { 
          title: "Partner 2", 
          image: "img/logo.png", 
          link: "https://developer.mozilla.org/en-US/",
          description: "Description of Partner here"
        },
        { 
          title: "Partner 3", 
          image: "", 
          link: "",
          description: "Description of Partner here"
        },
        { 
          title: "Partner 4", 
          image: "",
          link: "",
          description: ""
        },
        { 
          title: "Partner 5", 
          image: "", 
          link: "",
          description: `
            <p>hello</p>
            <br>
            <p>world</p>
          `
        },
      ]
    };
  },
  methods: {
    openingPartnerExpand(index) {
      this.selectedIndex = index;
    },

    closingPartnerExpand() {
      this.selectedIndex = null;
    },
  },
};
</script>

<style scoped>
/* Card CSS */
/* .box {
  border-bottom: 3px solid transparent;
  border-image: linear-gradient(to right, #dd9a30 5%, transparent 5%);
  border-image-slice: 1;
} */
.cardBorder {
  border: 3px var(--brand-color-main) solid;
  border-radius: 7px;
  transition: 0.2s ease;
}
.cardBorder:hover {
  border: 3px var(--brand-color-secondary) solid;
}

/* Text styling */
.partnerChapterTitle {
  font-family: "Barlow", sans-serif;
  font-weight: bold;
  font-size: 46px;
  color: #434343;
}
.partnerTitle {
  font-family: var(--subtitle-font);
  font-weight: var(--subtitle-weight);
  font-size: 20px;
  color: var(--subtitle-color);
}
.partnerDescriptionPre {
  font-family: var(--body-font);
  font-weight: var(--body-weight);
  color: var(--body-color);
  font-size: var(--body-size);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.partnerDescriptionPost {
  font-family: var(--body-font);
  font-weight: var(--body-weight);
  font-size: var(--body-size);
  color: var(--body-color);
  line-height: var(--body-height);
}
</style>
