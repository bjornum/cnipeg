<template>
  <div>
    <NewsDialog ref="openingNewsDialog"></NewsDialog>
    <v-row>
      <!-- Define the News -->
      <v-col cols="12" class="pt-15">
        <p class="newsChapterTitle text-center">News</p>
        <v-divider
          class="newsCardDividerPositioning"
          width="98%"
          style="padding: 2px"
        ></v-divider>
      </v-col>

      <!-- Description -->
      <v-col cols="12" class="mb-15">
        <p class="newsChapterDescription">Keep up to date about the CNIPEG</p>
      </v-col>

      <!-- Implement once gotten News -->
      <v-col
        cols="12"
        xl="4"
        lg="4"
        md="4"
        sm="12"
        xs="12"
        v-for="(newsData, newsDataIndex) in allTheNews.slice(0, 3)"
        :key="newsDataIndex"
        class="mb-10"
      >
        <v-card height="100%" @click="getNewsContent(newsData)" class="pa-2">
          <v-row>
            <v-col cols="12" class="pb-0">
              <v-row>
                <!-- Image -->
                <v-col cols="12">
                  <v-img
                    v-if="newsData.media_url"
                    :src="newsData.media_url"
                    alt="News Image"
                    width="auto"
                    height="250px"
                    cover
                    class="ml-2 mr-2"
                  ></v-img>
                  <div
                    v-else
                    style="
                      height: 200px;
                      width: auto;
                      background-color: #d1d1d1;
                      margin: 0px 15px 0px 15px;
                    "
                  ></div>
                </v-col>

                <!-- Title and Description -->
                <v-col cols="12">
                  <!-- Title -->
                  <p
                    class="newsCardTitle"
                    style="font-size: 16px; height: 40px"
                    v-if="$vuetify.breakpoint.width <= 959"
                  >
                    {{ newsData.title }}
                  </p>
                  <p
                    class="newsCardTitle"
                    style="font-size: 16px; height: 80px"
                    v-else-if="
                      $vuetify.breakpoint.width <= 1300 &&
                      $vuetify.breakpoint.width >= 960
                    "
                  >
                    {{ newsData.title }}
                  </p>
                  <p
                    class="newsCardTitle"
                    style="font-size: 18px; height: 80px"
                    v-else
                  >
                    {{ newsData.title }}
                  </p>
                  <!-- Description -->
                  <p class="newsCardDescription" style="font-size: 16px">
                    {{ newsData.description }}
                  </p>
                </v-col>

                <!-- Read more -->
                <v-col cols="12" class="pt-0 mt-0">
                  <v-card-actions class="pt-0">
                    <p class="newsCardButton mr-2 pt-3">Read article</p>
                    <v-icon class="newsCardButtonArrow">mdi-arrow-right</v-icon>
                  </v-card-actions>
                </v-col>
              </v-row>

              <!-- Custom Divider -->
              <v-divider
                class="newsCardDividerPositioning"
                width="98%"
                style="padding: 2px"
                :style="`background-color:${colorArr[newsDataIndex]}`"
              ></v-divider>
            </v-col>
            <v-col cols="12"></v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <!-- <v-btn @click="Test()">test</v-btn> -->
  </div>
</template>

<script>
import NewsDialog from "@/components/NewsComp/NewsDialog.vue";
export default {
  components: {
    NewsDialog,
  },
  data() {
    return {
      /*
        .env
          - Be sure to have the .env file imported, as it normaly lies within .gitignore for safety reasons
          - Localy the .env file works well.
          - Buildwise and on netlify you will have to create the key there, or within the .toml file
      */
      // accessKey: process.env.VUE_APP_API_KEY_Two,
      accessKey: window.btoa("bac436b32a36431bb437b9509b6d3495"),
      tenant: 109,
      allTheNews: [],
      theNewsContent: [],
      colorArr: ["#1b1b61", "#387b9d", "#47b5b0", "#2a4b7f"],

      envTestOne: process.env.VUE_APP_TEST_ME,
      envTestTwo: process.env.TEST_ME,
      // envTestThree: VUE_APP_TEST_ME,
      // envTestFour: TEST_ME,
      envTestFive: "This should show no matter what",
      envTestSix: process.env.VUE_APP_CONTEXT_TEST_ME,
      envTestSeven: process.env.VUE_APP_CONTEXT,
    };
  },
  mounted() {
    this.getAllNews();
  },
  methods: {
    // Attempting to get netlify env variable to work, with the build
    Test() {
      console.log("test 1", process.env.VUE_APP_API_KEY_Two);
      // console.log('test 2', process.env.VUE_APP_A);
      console.log("test 3", this.envTestOne);
      console.log("test 4", this.envTestTwo);
      // console.log('test 5', envTestThree);
      // console.log('test 6', envTestFour);
      console.log("test 7", this.envTestFive);
      console.log("test 8", this.envTestSix);
      console.log("test 9", this.envTestSeven);

      console.log("Testing 10", myTest);
      console.log("Testing 11", myTestTwo);
      console.log("Testing 12", process.env);

      const myTest = process.env.TEST_ME;
      const myTestTwo = process.env.VUE_APP_TEST_ME;
      console.log("Testing 13", process.env.VUE_APP);
      console.log("Testing 14", process.env.CONTEXT);
    },
    // Get all news made for this tenant
    getAllNews() {
      this.$http
        .get(
          `https://app.followup.prios.no/api/resource_management/news?mode=getpublicnews&tenant_id=${this.tenant}`,
          { headers: { Tempaccess: this.accessKey } }
        )
        .then((response) => {
          this.allTheNews = response.data;
          console.log("Responsen", response.data);
        });
    },

    // Get all the content of the clicked news
    getNewsContent(data) {
      this.$http
        .get(
          `https://app.followup.prios.no/api/resource_management/news_content?mode=getpublicnews&news_id=${data.id}`,
          { headers: { Tempaccess: this.accessKey } }
        )
        .then((response) => {
          this.theNewsContent = response.data;
          console.log("Responsen", response.data);
        })
        .then((responsen) => {
          this.openTheDialog(data, this.theNewsContent);
        });
    },

    // Open the Dialog while passing the correct data
    openTheDialog(originalData, contentData) {
      this.$refs.openingNewsDialog.openNewsDialog(originalData, contentData);
    },
  },
};
</script>

<style scoped>
/* NEWS */
.newsChapterTitle {
  font-family: "Barlow", sans-serif;
  font-weight: bold;
  font-size: 26px;
  color: #434343;
  opacity: 1;
  letter-spacing: 0px;
  text-align: left;
}
.newsCardTitle {
  font-family: "Barlow", sans-serif;
  font-weight: bold;
  color: #434343;
  letter-spacing: 0px;
  text-align: left;
}
.newsCardDescription {
  font-family: "Lato", sans-serif;
  font-weight: regular;
  text-align: left;
  color: #6a6a6a;
  opacity: 1;
  letter-spacing: 0px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.newsCardButton {
  font-family: "Lato", sans-serif;
  font-weight: regular;
  font-size: 18px;
  text-align: left;
  color: #205072;
  opacity: 1;
  letter-spacing: 0px;
  text-decoration: underline;
}
.newsCardButtonArrow {
  color: #205072;
  opacity: 1;
}
.newsCardDividerPositioning {
  margin-left: 1%;
  margin-bottom: 2%;
}

/* See All News / RSS Button */
.seeAllButtonText {
  font-family: "Lato", sans-serif;
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
  font-family: "Lato", sans-serif;
  opacity: 1;
  border-radius: 52px;
}
.seeAllButtonBorder:after {
  border: 3px solid #d6d2d24d;
  content: "";
  position: absolute;
  top: -9px;
  right: -9px;
  bottom: -9px;
  left: -9px;
  border-radius: 4em;
  box-shadow: 0px 2px 12px #00000033;
}

.newsChapterDescription {
  font-family: "Lato", sans-serif;
  font-weight: normal;
  font-size: 14px;
  color: #6a6a6a;
  opacity: 1;
  letter-spacing: 0px;
  text-align: left;
}
</style>
