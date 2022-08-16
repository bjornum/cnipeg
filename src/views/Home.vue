<template>
  <div class="homePageWidth">

    <!-- Home Page Content -->
    <v-row>
      <v-col cols="12" class="mt-5"></v-col>
      <!-- Intro Image -->
      <v-col cols="12" class="pb-0">
        <v-card class="pt-15 pb-3 introImage">
          <p v-if="$vuetify.breakpoint.mdAndDown" class="introTitlePhone">Welcome to Yss Project</p>
          <p v-else class="introTitle">Welcome to Yss Project</p>
          <p v-if="$vuetify.breakpoint.mdAndDown" class="introDescriptionPhone">Train the trainers in Lifeskills</p>
          <p v-else class="introDescription">Train the trainers in Lifeskills</p>
        </v-card>
      </v-col>

      <!-- 3 Cards in center of cards -->
      <v-col cols="12" xl="2" lg="2" md="2" sm="12" xs="12" class="pt-0"></v-col>
      <v-col cols="12" xl="8" lg="8" md="8" sm="12" xs="12" class="pt-0">
        <v-row>
          <v-col cols="12" xl="4" lg="4" md="4" sm="12" xs="12" v-for="(pageCard, pageCardIndex) in pageCards" :key="pageCardIndex">
            <v-card class="pageCardPositioning" :to="pageCard.link" style="position:relative;">
              <v-divider v-if="pageCardIndex == 0" class="pageCardDividerBlue"></v-divider>
              <v-divider v-if="pageCardIndex == 1" class="pageCardDividerGreen"></v-divider>
              <v-divider v-if="pageCardIndex == 2" class="pageCardDividerRed"></v-divider>
              <v-row>
                <v-col cols="10">
                  <p class="pt-2 pageCardTitle">{{pageCard.name}}</p>
                </v-col>
                <v-col cols="2">
                  <v-icon large class="pt-2 pageCardArrow">mdi-arrow-right</v-icon>
                </v-col>
              </v-row>
              <p class="pageCardDescription">{{pageCard.description}}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <!-- Info Text -->
      <v-col cols="12">
        <v-row>
          <v-col cols="12" xl="4" lg="4" md="4" sm="12" xs="12"></v-col>
          <v-col cols="12" xl="4" lg="4" md="4" sm="12" xs="12">
            <p class="shortInfoTitle">Some short info</p>
            <p class="shortInfoDescription">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident voluptas asperiores dolores aspernatur, inventore blanditiis mollitia harum quo adipisci quisquam, quod odit ad explicabo consequuntur eos saepe animi quasi maiores.</p>
          </v-col>
        </v-row>
      </v-col>

      <!-- Twitter displayed through vue-twitter package -->
      <!-- <twitter>
        <a class="twitter-timeline" data-width="270" data-height="300" data-link-color="#000" data-theme="dark"  href="https://twitter.com/TwitterDev/lists/national-parks?ref_src=twsrc%5Etfw"> A Twitter List by TwitterDev </a>
      </twitter> -->

      <!-- News -->
      <v-col cols="12" xl="2" lg="2" md="2" sm="12" xs="12" class="pt-0"></v-col>
      <v-col cols="12" xl="8" lg="8" md="8" sm="12" xs="12" class="pt-0">
        <NewsPage></NewsPage>
      </v-col>
      
      <!-- See all news button - go to page -->
      <v-col cols="12" align="center">
        <v-btn class="seeAllButtonBorder seeAllButtonText" rounded to="/news">
          See all news
        </v-btn>
      </v-col>

      <!-- To keep the structure -->
      <v-col cols="12"></v-col>

      <!-- RSS -->
      <v-col cols="12" xl="2" lg="2" md="2" sm="12" xs="12" class="pt-0"></v-col>
      <v-col cols="12" xl="8" lg="8" md="8" sm="12" xs="12" class="pt-0">
        <RssForHome></RssForHome>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import NewsPage from "@/components/NewsComp/NewsPage.vue"
import RssForHome from "@/components/RssModules/rssModulePage.vue"
  export default {
    name: 'Home',
    components:{
      NewsPage,
      RssForHome
    },
    data(){
      return {
        colorArr:[ "#205072", "#329D9C", "#D83636", "#DD9A30" ],
        // In Page Pages Cards
        pageCards:[
          { name: "Available resources", color: "", link: "/resources",  description: "Here you will find different resources made in the project" },
          { name: "About the project", color: "", link: "/about",  description: "Read about the project, aims and the result it will produce" },
          { name: "Partners", color: "", link: "/partners", description: "Find the partners and learn more about them" },
        ],
      }
    }
  }
</script>

<style scoped>

/* Intro Classes for box and text at the top */
.introImage {
  height:650px;
  background-color:rgb(213, 211, 211);
}
.introTitle {
  font-size:48px;
  color: #434343;
  opacity: 1;
  letter-spacing: 0px;
  margin-left: 15%; 
  margin-top:10%;
  font-weight: bold;
  font-family: 'Barlow', sans-serif;
  font-style:normal;
}
.introTitlePhone {
  font-size:36px;
  color: #434343;
  opacity: 1;
  letter-spacing: 0px;
  margin-left: 15%; 
  margin-top:10%;
  font-weight: bold;
  font-family: 'Barlow', sans-serif;
  font-style:normal;
}
.introDescription {
  font-size:28px;
  color: #434343; 
  opacity: 1;
  letter-spacing: 0px;
  margin-left: 15%;
  font-weight: bold;
  font-family: 'Barlow', sans-serif;
  font-style:normal;
}
.introDescriptionPhone {
  font-size:18px;
  color: #434343; 
  opacity: 1;
  letter-spacing: 0px;
  margin-left: 15%;
  font-weight: bold;
  font-family: 'Barlow', sans-serif;
  font-style:normal;
}

/* Styling the 3 cards close to the intro top */
.pageCardPositioning {
  position:relative;
  top: -5em;
  right: 50;
  padding: 10px;
}
.pageCardDividerBlue {
  background-color:#205072; 
  padding: 2px
}
.pageCardDividerGreen {
  background-color:#329D9C; 
  padding: 2px;
}
.pageCardDividerRed {
  background-color:#D83636; 
  padding: 2px;
}
.pageCardTitle {
  font-family: 'Barlow', sans-serif;
  font-weight: bold;
  font-size: 24px;
  color: #434343;
  letter-spacing: 0;
}
.pageCardDescription {
  font-family: 'Lato', sans-serif;
  font-weight: regular;
  font-size: 14px;
  color: #6A6A6A;
  letter-spacing: 0;
  height: 50px;
}
.pageCardArrow {
  color: #205072;
  opacity: 1;
}

/* Short Info Text */
.shortInfoTitle {
  font-family: 'Barlow', sans-serif;
  font-weight: bold;
  font-size: 26px;
  text-align: center;
  color: #434343;
  opacity: 1;
  letter-spacing: 0px;
}

.shortInfoDescription {
  font-family: 'Lato', sans-serif;
  font-weight: regular;
  text-align: center;
  color: #6A6A6A;
  opacity: 1;
  letter-spacing: 0px;
}

/* See All News Button */
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