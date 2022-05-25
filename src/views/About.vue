<template>
  <div class="homePageWidth">
    <v-row>
      <!-- ===== About Company ===== -->
      <v-col cols="12" xl="2" lg="2" md="2" sm="12" xs="12" class="pt-0"></v-col>
      <v-col cols="12" xl="8" lg="8" md="8" sm="12" xs="12" class="mt-15">
        <v-row>
          <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12">
            <p class="mainHeader aboutHeaderTitle">About projectTemplate</p>
            <p class="mainDescription aboutDescription">Voluptate quisquam voluptatum velit facilis. Et nihil repellat architecto asperiores sequi facere. Eligendi distinctio iste Iste quis rerum molestias expedita necessitatibus. Laudantium in facere labore ut.</p>
            <v-row>
              <v-col cols="12" xl="4" lg="4" md="4" sm="12" xs="12" v-for="(keyboxitem, keyboxindex) in keyBoxes" :key="keyboxindex">
                <div class="aboutKeyBoxes">{{keyboxitem.title}}</div>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12">
            <div class="imageTemplateBox"></div>
          </v-col>
        </v-row>
      </v-col>

      <!-- ===== Goal of company ===== -->
      <v-col cols="12" class="mt-15"></v-col>
      <v-col cols="12" xl="2" lg="2" md="2" sm="12" xs="12"></v-col>
      <v-col cols="12" xl="8" lg="8" md="8" sm="12" xs="12">
        <v-row>
          <v-col cols="12" xl="5" lg="5" md="5" sm="12" xs="12">
            <div class="imageTemplateBox"></div>
          </v-col>
          <v-col cols="12" xl="7" lg="7" md="7" sm="12" xs="12" class="mt-15 mb-15">
            <p class="mainTitle aboutHeadlines">The goal</p>
            <p class="mainDescription aboutDescription">Voluptate quisquam voluptatum velit facilis. Et nihil repellat architecto asperiores sequi facere. Eligendi distinctio iste Iste quis rerum molestias expedita necessitatibus. Laudantium in facere labore ut.</p>
          </v-col>
        </v-row>
      </v-col>

      <!-- ===== For Whom ===== -->
      <v-col cols="12" class="mt-15 whomBackground"></v-col>
      <v-col cols="12" xl="2" lg="2" md="2" sm="12" xs="12" class="whomBackground"></v-col>
      <v-col cols="12" xl="8" lg="8" md="8" sm="12" xs="12" class="whomBackground">
        <v-row>
          <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12" class="mt-15 mb-15">
            <p class="mainTitle aboutHeadlines">For whom</p>
            <p class="mainDescription aboutDescription">Voluptate quisquam voluptatum velit facilis. Et nihil repellat architecto asperiores sequi facere. Eligendi distinctio iste Iste quis rerum molestias expedita necessitatibus. Laudantium in facere labore ut.</p>
          </v-col>
          <v-col cols="12" xl="1" lg="1" md="1" sm="12" xs="12"></v-col>
          <v-col cols="12" xl="5" lg="5" md="5" sm="12" xs="12">
            <div class="imageTemplateBox"></div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" xl="8" lg="8" md="8" class="whomBackground"></v-col>
      <v-col cols="12" class="whomBackground"></v-col>

      <!-- Why -->
      <v-col cols="12" class="mt-15"></v-col>
      <v-col cols="12" xl="2" lg="2" md="2" sm="12" xs="12"></v-col>
      <v-col cols="12" xl="8" lg="8" md="8" sm="12" xs="12">
        <v-row>
          <v-col cols="12" xl="5" lg="5" md="5" sm="12" xs="12">
            <div class="imageTemplateBox"></div>
          </v-col>
          <v-col cols="12" xl="7" lg="7" md="7" sm="12" xs="12" class="mt-15 mb-15">
            <p class="mainTitle aboutHeadlines">Why</p>
            <p class="mainDescription aboutDescription">Voluptate quisquam voluptatum velit facilis. Et nihil repellat architecto asperiores sequi facere. Eligendi distinctio iste Iste quis rerum molestias expedita necessitatibus. Laudantium in facere labore ut.</p>
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
        { title: "Some key words" },
        { title: "To describe the project" },
        { title: "To make it more digestible" },
        { title: "To describe the project" },
        { title: "Some key words" }
      ]
    }
  }
}
</script>