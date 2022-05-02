<template>
  <div class="homePageWidth">
    <!-- Idea: 
      1. Check all content. If no content = grey out the button.
        - Map out the type, to get array with types.  
        - Run an includes to see if the type exists or not.
        - Utilise a simple ternary to add the "greyed out class" over
      2. Click on button to get the Data.
      3. Phone: Fullscreen dialog? / Template change on same screen?
      4. Both: Cards got image given by hikmet, for an visual boost. 
        - Wording can change
    -->

    <v-row>
      <!-- Title + display of path -->
      <v-col cols="12">
        <v-card flat style="border-bottom:2px solid #392B58;">
          <v-img src="Resources/Resources_background.png" alt="Resource page top image" contain>
            <p v-if="titleResourcePath" class="text-center resourcePageTitle mt-15 pt-10">
              <span @click="resetResourcePath()" class="resourceCardTitleUnderline">RESOURCES</span> 
              <span class="pl-3 pr-3">></span> 
              <span>{{titleResourcePath}}</span>
            </p>
            <p v-else class="text-center resourcePageTitle mt-15 pt-10">RESOURCES</p>
          </v-img>
        </v-card>
      </v-col>
      <!-- Filter, Sorting -->
      <v-col cols="12"></v-col>
      <!-- Hash, Search -->
      <v-col cols="12"></v-col>

      <!-- Resource Cards -->
      <template v-if="titleResourcePath == ''">
        <v-col cols="12" xl="4" lg="4" md="4" sm="12" xs="12" v-for="(item, index) in resourceCards" :key="index">
          <!-- Resource Card v1 -->
          <v-card class="ml-10 mr-10"  style="opacity: 1; " height="100%" @click="clickingAnResource(item)">
            <v-img :src="item.image" contain aspect-ratio="2" class="">
              <p class="text-center resourceCardTitle">{{item.name}}</p>
            </v-img>
          </v-card>
        </v-col>
      </template>

      <!-- Cases Content -->
      <template v-else-if="titleResourcePath == 'Cases'">
        <v-row>
          <v-col cols="2"></v-col>
          <v-col cols="8">
            <v-row>
              <v-col cols="12" v-for="(cases, caseIndex) in dummyCases" :key="caseIndex" class="ma-0">
                <v-card>
                  <v-row class="ma-0 pa-0 pa-2">
                    <!-- Image -->
                    <v-col cols="1" class="pa-0">
                      <v-img :src="cases.image" contain height="50"></v-img>
                    </v-col>
                    <!-- Name -->
                    <v-col cols="2" class="pa-0">
                      <p class="mb-0 pt-3">{{cases.name}}</p>
                    </v-col>
                    <!-- Description -->
                    <v-col cols="6" class="pa-0">
                      <p class="mb-0 pt-3">{{cases.description}}</p>
                    </v-col>
                    <!-- Author -->
                    <v-col cols="3" class="pa-0">
                      <p class="text-end mb-0 pt-3">
                        <span>Created by:</span>
                        <span>{{cases.createdBy}}</span>
                      </p>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </template> 

      <!-- Articles Content -->
      <template v-else-if="titleResourcePath == 'Articles'">
        <v-col cols="12">
          <p>Articles</p>

          <v-row>
            <v-col cols="6" v-for="(article, articleIndex) in dummyArticles" :key="articleIndex">
              <v-card height="100%" flat>
                <p class="title mb-0">{{article.topic}}</p>
                <v-divider class="articleDivider"></v-divider>
                <v-row>
                  <v-col cols="12" v-for="(articles, articlesIndex) in article.articles" :key="articlesIndex" class="pb-0">
                    <p class="ma-0">- {{articles.name}}</p>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
          <!-- Topic - First iteration create the main topics -->

          <!-- Entries displayed within, as simple sentences one can click to access the article -->

          <!-- Click on a Sentence => Opens Dialog + display said content -->
          

        </v-col>
      </template>

      <!-- Courses Content -->
      <template v-else-if="titleResourcePath == 'Courses'">
        <v-col cols="12">
          <p>Courses</p>
        </v-col>
      </template>

      <!-- Files Content -->
      <template v-else-if="titleResourcePath == 'Files'">
        <v-col cols="12">
          <p>Files</p>
          <v-row>
            <v-col cols="4">
              <v-tabs v-model="tab">

                <v-tab>Videos</v-tab>
                <v-tab>Documents</v-tab>
                <v-tab>Courses</v-tab>
                <v-tab>Images</v-tab>
                <v-tab>Files</v-tab>
                
                <v-tab-item class="pt-6 mt-5">
                  <v-card style="border:2px solid black;">
                    Tab 1 Videos
                  </v-card>
                </v-tab-item>

                <v-tab-item class="pt-6 mt-5">
                  <v-card>
                    Tab 2 Documents
                  </v-card>
                </v-tab-item>

                <v-tab-item class="pt-6 mt-5">
                  Tab 3 Courses
                </v-tab-item>

                <v-tab-item class="pt-6 mt-5">
                  Tab 4 Images
                </v-tab-item>

                <v-tab-item class="pt-6 mt-5">
                  Tab 5 Files
                </v-tab-item>

              </v-tabs>
              
            </v-col>

            <v-col cols="8">
              <template>

              </template>
            </v-col>
          </v-row>

          <!-- Split in two section
            - Left Side => File Categories in tab form.
              - Display the content within as a card, with image, title, file type and size.
            - Right Side => activate on click of file.
              - Display content.
                - File Preview = Image of the file
                - Title, with some short description below.
                - Open File button (With main language within)
                - Share and Download - Features
                - General Information of it.
                - If more than 1 version are added, have Other languages on right side.
                  - Open, share and download
           -->
        </v-col>
      </template>

      <!-- Media Content -->
      <template v-else-if="titleResourcePath == 'Media'">
        <v-col cols="12">
          <p>Media</p>
        </v-col>
      </template>

      <!-- Template Content -->
      <template v-else-if="titleResourcePath == 'Templates'">
        <v-col cols="12">
          <p>Template</p>
        </v-col>
      </template>

      <!-- Unknown content -->
      <template v-else>
        <v-col cols="12">
          <p>Unknown</p>
        </v-col>
      </template>
      
      <v-col cols="12"></v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data(){
    return {
      tab: null,
      // Used to display path and corresponding template
      titleResourcePath: "",
      resourceCards: [
        { name: "Cases", type: "", image: "Resources/cases.png" },
        { name: "Articles", type: "", image: "Resources/articles.png" },
        { name: "Courses", type: "", image: "Resources/courses.png" },
        { name: "Files", type: "", image: "Resources/files.png" },
        { name: "Media", type: "", image: "Resources/media.png" },
        { name: "Templates", type: "", image: "Resources/template.png" },
      ],
      resourceContent: [],
      dummyCases: [
        {name: "Case 1", description: "Case number 1", createdBy: "bob bobbersen bab", image: "/img/logo.png"},
        {name: "Case 2", description: "Case number 2", createdBy: "petra ", image: "/img/logo.png"},
        {name: "Case 3", description: "Case number 3", createdBy: "Jane", image: "/img/logo.png"},
        {name: "Case 4", description: "Case number 4", createdBy: "Joe", image: "/img/logo.png"},
      ],
      dummyArticles: [
        {
          topic: "Creativity",
          articles: [
            {name: "For a More Creative Brain Follow These 5 Steps", link: "", description: "", image: ""},
            {name: "How to be Creative", link: "", description: "", image: ""},
            {name: "Is there Such a thing as Naturally Creative?", link: "", description: "", image: ""},
            {name: "The Proven Path to Doing Unique and Meaningful Work", link: "", description: "", image: ""},
            {name: "Creativity is a Process, Not an Event", link: "", description: "", image: ""},
            {name: "Albert Einsteins Incredible Work Ethic", link: "", description: "", image: ""},
          ]
        },
        {
          topic: "Decision Making",
          articles: [
            {name: "The Ultimate Productivity Hack is saying No", link: "", description: "", image: ""},
            {name: "Why Facts Dont Change Our Minds", link: "", description: "", image: ""},
            {name: "Dont Start From Scratch", link: "", description: "", image: ""},
            {name: "How to Use Mental Models for Smart Decision Making", link: "", description: "", image: ""},
            {name: "Top Mental Models to Improve Your Decision Making", link: "", description: "", image: ""},
          ]
        },
        {
          topic: "Focus",
          articles: [
            {name: "For a More Creative Brain Follow These 5 Steps", link: "", description: "", image: ""},
            {name: "How to be Creative", link: "", description: "", image: ""},
            {name: "The Myth of Multitasking", link: "", description: "", image: ""},
          ]
        },
        {
          topic: "Habits",
          articles: [
            {name: "The Ultimate Productivity Hack is Saying No", link: "", description: "", image: ""},
            {name: "Why Facts Dont Change Our Minds", link: "", description: "", image: ""},
            {name: "Where to Go From Here", link: "", description: "", image: ""},
          ]
        },
      ]
    }
  },
  methods: {
    clickingAnResource(resourceData){
      this.titleResourcePath = resourceData.name;
      // Logic to handle API queries || nested function
    },
    // Reset the path to root, and remove content
    resetResourcePath(){
      this.titleResourcePath = "";
      this.resourceContent = [];
    }
  }
}
</script>

<style scoped>
/* General Page */
.homePageWidth {
  width: 90vw; 
  margin:auto auto;
  margin-top: -55px;
}

/* Top section of Resource Page */
.resourcePageTitle {
  font-size: 36px;
  color: "#2E3C46";
  opacity: 1;
  font-weight: 600;
  /* font-family: ; */
  font-style: normal;
}

.resourceCardTitleUnderline {
  border-bottom: #392B58 2px solid;
  cursor:pointer;
}

/* Resource Cards */
.resourceCardTitle {
  font-size:36px;
  color: white;
  opacity: 1;
  letter-spacing: 0px;
  margin-top:70px;
  font-family: 'Barlow', sans-serif;
  font-style:normal;
  text-shadow: 2px 2px #0E3196, -2px -2px #0E3196, -2px 2px #0E3196, 2px -2px #0E3196;
  /* text-shadow: 0.2em 0.2em 0.2em rgba(0,0,0,0.2); */
}

/* WIP - make image display correctly - possible differenciate by index */
.resourceCardImageMovement {
  transform: scale(1); 
  top:-20px; 
  right:-46px;
}

/* Articles */
.articleTopicTitle {
  font-size:36px;
  color: #2E3C46;
  opacity: 1;
  letter-spacing: 0px;
}

.articleDivider {
  color: hotpink !important;
}
</style>