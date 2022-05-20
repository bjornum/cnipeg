<template>
  <v-carousel cycle hide-delimiter-background class="mt-10 mb-10 myCarousel" :class="$vuetify.breakpoint.xs ? 'smallScreenCarouselFix' : ''">
    <v-carousel-item v-for="(item, index) in items" :key="index" reverse-transition="fade-transition" transition="fade-transition" class="carousel-item" >
      <v-img :src="item.src" contain max-height="250" v-if="$vuetify.breakpoint.xs" >
        <v-row class="ma-0 pa-0">
          <v-col cols="12" class="mb-0 pb-0">
            <p class="text-center mt-5 carouselTitlePhone">{{item.title}}</p>
            <v-divider class="carouselDivider"></v-divider>
            <p class="text-center carouselDescriptionPhone">{{item.description}}</p>
            <v-btn text class="text-center carouselButtonPhone">READ MORE</v-btn>
          </v-col>
        </v-row>
      </v-img>
      <v-img :src="item.src" contain max-height="600" v-else-if="$vuetify.breakpoint.mdAndDown">
        <v-row class="ma-0 pa-0">
          <v-col cols="12" class="mb-0 pb-0">
            <p class="text-center mt-5 carouselTitlePhone">{{item.title}}</p>
            <v-divider class="carouselDivider"></v-divider>
            <p class="text-center carouselDescriptionPhone">{{item.description}}</p>
            <v-btn text class="text-center carouselButtonPhone">READ MORE</v-btn>
          </v-col>
        </v-row>
      </v-img>


      <v-img :src="item.src" contain max-height="600" v-else>
        <v-row>
          <v-col cols="12">

            <div class="contentPositioningDesktop" style="border:solid 2px black; padding: 20px; background: rgba(10, 3, 3, 0.3)">
              <p class="text-center  carouselTitle">{{item.title}}</p>
              <v-divider class="carouselDivider"></v-divider>
              <p class="text-center carouselDescription">{{item.description}}</p>
              <nuxt-link :to="{ path: item.link, query: { active_tab: item.active_tag }}">
                <v-btn text class="text-center carouselButton">READ MORE</v-btn>
              </nuxt-link>
            </div>

          </v-col>
        </v-row>
      </v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { 
            src: require('@/assets/images/aboutPageImage.png'),
            title: "ABOUT",
            description: "Innovative approaches to help schools, students and families/parents to prevent early school leaving (ESL).",
            link: "/about",
          },
          { 
            src: require('@/assets/images/evolvebackground.jpg'),
            title: "HANDBOOK",
            description: "In the handbook you will find the main methods and concrete tools to improve communication between school and families/parents",
            link: "/outputs",
            active_tag: 0
          },
          { 
            src: require('@/assets/images/AdobeStock_461343125.jpeg'),
            title: "HOME CURRICULUM",
            description: "A Practical Guide For Teachers",
            link: "/outputs",
            active_tag: 1
          },
        ],
      }
    },
  }
</script>

<style scoped>
.contentPositioningDesktop {
  margin: auto auto;
  width: 40vw;
  margin-top: 5%;
}

.carouselTitle {
  font-size: 40px; 
  font-weight: bold;
  font-family: 'Source Sans Pro', sans-serif;
  filter: drop-shadow(0 0 0.1rem black);
  color: white;
  min-height: 100px;
}

.carouselDescription {
  font-size: 24px;
  font-family: 'Heebo', sans-serif;
  filter: drop-shadow(0 0 0.1rem black);
  color: white;
  min-height: 100px;
}

.carouselButton {
  margin-left:35%; 
  border:solid 2px lightblue; 
  padding: 30px !important;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: bold;
  font-size: 22px;
  filter: drop-shadow(0 0 0.1rem black);
  color: white;
}

.carouselDivider {
  background-color:white; 
  padding:1px;
  box-shadow:5px 0px 5px 0px #1a8096;
}


/* Phone Version */
.carouselTitlePhone {
  font-size: 22px; 
  font-weight: bold;
  font-family: 'Source Sans Pro', sans-serif;
  filter: drop-shadow(0 0 0.1rem black);
  color: white;
}

.carouselDescriptionPhone {
  font-size: 16px;
  font-family: 'Heebo', sans-serif;
  filter: drop-shadow(0 0 0.1rem black);
  color: white;
  min-height: 60px;
}

.carouselButtonPhone {
  margin-left:30%; 
  border:solid 2px lightblue; 
  padding: 10px !important;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: bold;
  font-size: 20px;
  filter: drop-shadow(0 0 0.1rem black);
  color: white;
}

.carouselDividerPhone {
  background-color:white; 
  padding:1px;
  box-shadow:5px 0px 5px 0px #1a8096;
}


.myCarousel .v-window__prev, .myCarousel .v-window__next {
  top: 0;
}

/* .carousel-item{
  height: 150px;
} */

.smallScreenCarouselFix {
  margin-bottom:-200px !important;
}


</style>