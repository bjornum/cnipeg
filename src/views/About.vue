<template>
  <div class="homePageWidth">
    <v-row>
      <!-- ===== About Company ===== -->
      <v-col cols="12" xl="2" lg="2" md="2" sm="12" xs="12" class="pt-0"></v-col>
      <v-col cols="12" xl="8" lg="8" md="8" sm="12" xs="12" class="mt-15">
        <v-row>
          <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12">
            <p class="mainHeader aboutHeaderTitle">About Innovative Entrepreneurs</p>
            <p class="mainDescription aboutDescription">
              The Innovative Entrepreneurs project aims to develop and test a concept for implementing sustainable social Innovation. 
              The concept should enable innovative entrepreneurs to thrive and contribute to significant societal development
            </p>
            <v-row>
              <v-col cols="12" xl="4" lg="4" md="4" sm="12" xs="12" v-for="(keyboxitem, keyboxindex) in keyBoxes" :key="keyboxindex">
                <div class="aboutKeyBoxes">{{keyboxitem.title}}</div>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12">
            <v-img src="../assets/images/AboutTopImage.jpg" height="500px"></v-img>
          </v-col>
        </v-row>
      </v-col>

      <!-- ===== Goal of company ===== -->
      <v-col cols="12" class="mt-15"></v-col>
      <v-col cols="12" xl="2" lg="2" md="2" sm="12" xs="12"></v-col>
      <v-col cols="12" xl="8" lg="8" md="8" sm="12" xs="12">
        <v-row>
          <v-col cols="12" xl="5" lg="5" md="5" sm="12" xs="12">
            <v-img src="../assets/images/AboutGoalImage.jpg" ></v-img>
          </v-col>
          <v-col cols="12" xl="7" lg="7" md="7" sm="12" xs="12" class="my-auto" >
            <p class="mainTitle aboutHeadlines">The goal</p>
            <p class="mainDescription aboutDescription">
              The main purpose of the project is to develop and test a concept for implementing sustainable social Innovation. 
              The concept should enable innovative entrepreneurs to thrive and contribute to significant societal development. 
              The idea is that each country can get new solutions to new problems - supported by the network.
            </p>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12"></v-col>

      <!-- ===== For Whom ===== -->
      <v-col cols="12" class="whomBackground"></v-col>
      <v-col cols="12" xl="2" lg="2" md="2" sm="12" xs="12" class="whomBackground"></v-col>
      <v-col cols="12" xl="8" lg="8" md="8" sm="12" xs="12" class="whomBackground">
        <v-row>
          <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12" class="my-auto whomBackground">
            <p class="mainTitle aboutHeadlines">For whom</p>
            <p class="mainDescription aboutDescription">
              The project is supposed to support new innovative entrepreneurs 
              - and enable adult learnes 
              - to participate and contribute to social innovation by giving them tools and methods to easily collaborate and systematize knowledge sharing digitally. 
            </p>
          </v-col>
          <v-col cols="12" xl="1" lg="1" md="1" sm="12" xs="12" class="whomBackground"></v-col>
          <v-col cols="12" xl="5" lg="5" md="5" sm="12" xs="12" class="whomBackground">
            <v-img src="../assets/images/AboutForWhomImage.jpg" ></v-img>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="2" class="whomBackground"></v-col>
      <v-col cols="12" class="whomBackground"></v-col>

      <!-- Why -->
      <v-col cols="12" class=""></v-col>
      <v-col cols="12" xl="2" lg="2" md="2" sm="12" xs="12"></v-col>
      <v-col cols="12" xl="8" lg="8" md="8" sm="12" xs="12">
        <v-row>
          <v-col cols="12" xl="5" lg="5" md="5" sm="12" xs="12">
            <v-img src="../assets/images/AboutWhyImage.jpg" ></v-img>
          </v-col>
          <v-col cols="12" xl="7" lg="7" md="7" sm="12" xs="12" class="my-auto" >
            <p class="mainTitle aboutHeadlines">Why</p>
            <p class="mainDescription aboutDescription">
              The starting point is that we live in a changing world, which calls for different initiatives to identify and find new solutions to these changes. - And that innovative entrepreneurs are crucial in creating such changes.<br>
  The idea is that those who have the problem and want it solved, get the necessary competence to get it done. These solutions may be very different. What is similar is the way to do it. It is thought of as sustainable social innovation.
  To make this happen it is necessary to involve new actors - innovative entrepreneurs and adult learners in education. <br> The project is supposed to support such innovative entrepreneurs - and enable adult learnes to participate and contribute to social innovation.
            </p>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" class="mt-15"></v-col>
    </v-row>
  </div>
</template>

<script>
import LanguageTest from "@/components/LanguageControll/LanguageTest.vue"
import SelectLocale from "@/components/LanguageControll/SelectLocale.vue"

export default {
  name: 'About',
  components:{
    LanguageTest,
    SelectLocale
  },
  data(){
    return {
      keyBoxes: [
        { title: "Entrepreneurs" },
        { title: "Innovation" },
        { title: "Social Innovation" },
        { title: "Networking" },
        { title: "Digitalization" },
        { title: "Digital Platform" },
        { title: "Community" },
        { title: "Adult Learning" },
      ]
    }
  }
}
</script>