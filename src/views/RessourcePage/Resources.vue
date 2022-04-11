<template>
  <div class="homePageWidth">
    <v-row>
      <!-- Cards -->
      <v-col cols="12" class="mt-10"></v-col>
      <v-col cols="12">
        <p class="text-center title">Resources</p>
        <!-- <pre>{{resourceContent}}</pre> -->
        <!-- <p>{{resourceTemplate}}</p> -->
      </v-col>
      <v-col cols="12" xl="2" lg="2" md="2" sm="12" xs="12"></v-col>
      <v-col cols="12" xl="8" lg="8" md="8" sm="12" xs="12">
        <v-row>
          <v-col v-for="(item, index) in resourceFolders" :Key="index" cols="12" xl="4" lg="4" md="4" sm="12" xs="12">
            <v-card @click="displayResource(item.template)">
            <!-- <v-card @click="getAllImageResources(item.template)"> -->
              <p v-if="item.title == 'Video' || item.title == 'Video'" class="text-center title pt-10 pb-10">{{ $t('resources.video') }}</p>
              <p v-else-if="item.title == 'Files' || item.title == 'Filer'" class="text-center title pt-10 pb-10">{{ $t('resources.files') }}</p>
              <p v-else-if="item.title == 'Courses' || item.title == 'Kurs'" class="text-center title pt-10 pb-10">{{ $t('resources.courses') }}</p>
              <p v-else-if="item.title == 'Podcast' || item.title == 'Podcast'" class="text-center title pt-10 pb-10">{{ $t('resources.podcast') }}</p>
              <p v-else-if="item.title == 'External Content' || item.title == 'Eksternt Innhold'" class="text-center title pt-10 pb-10">External Content</p>
              <p v-else-if="item.title == 'Images' || item.title == 'Bilder'" class="text-center title pt-10 pb-10">Images</p>
              <p v-else>...</p>
              <v-divider class="newsCardDividerPositioning" width="98%" style="padding: 2px;" :style="`background-color:${colorArr[index]}`"></v-divider>
              <v-col cols="12" class="ma-0 pa-0" style="padding-top: 0.1px !important;"></v-col>
            </v-card>
          </v-col>
        </v-row>
        <v-divider class="mt-10"></v-divider>
        <v-divider></v-divider>
        <v-divider></v-divider>
      </v-col>

      <!-- Resource Content -->
      <v-col cols="12" class="pt-5 mb-15">
        <v-card flat>
          <v-row>
            <!-- Default, when nothing have been selected -->
            <template v-if="resourceTemplate == 0">
              <v-col cols="12">
                <p class="text-center title"></p>
              </v-col>
            </template>

            <!-- No content added yet -->
            <template v-else-if="resourceContent == ''">
              <v-col cols="12" xl="7" lg="7" md="7" sm="12" xs="12">
                <p class="text-end title">Sorry no content added yet</p>
              </v-col>
               <v-col cols="12" xl="3" lg="3" md="3" sm="12" xs="12" class="d-flex align-end flex-column">
                <v-btn class="mr-5" @click="closeTheResourceBox()">X</v-btn>
              </v-col>
            </template>

            <!-- Display Content - Design 1 (Make it Work), Design 2 will be hikmet design -->
            <template v-else-if="resourceContent">
              <v-col cols="12" xl="2" lg="2" md="2" sm="12" xs="12"></v-col>
              <v-col cols="12" xl="5" lg="5" md="5" sm="12" xs="12" class="pb-0">
                <p class="title">{{contentType}}</p>
              </v-col>
               <v-col cols="12" xl="3" lg="3" md="3" sm="12" xs="12" class="d-flex align-end flex-column">
                <v-btn class="mr-5" @click="closeTheResourceBox()">X</v-btn>
              </v-col>
              <v-col cols="12" class="pt-0"></v-col>
              <v-col cols="12" xl="2" lg="2" md="2" sm="12" xs="12"></v-col>
              <v-col cols="12" xl="4" lg="4" md="4" sm="12" xs="12" v-for="(resources, resourceIndex) in resourceContent" :key="resourceIndex">
                <!-- <pre>{{resource}}</pre> -->
                <v-card height="100%" flat>

                  <!-- Video -->
                  <template v-if="resourceTemplate == 1">
                    <pre>{{resources}}</pre>
                  </template>

                  <!-- Files -->
                  <template v-else-if="resourceTemplate == 2">
                    <pre>{{resources}}</pre>
                  </template>

                  <!-- Courses -->
                  <template v-else-if="resourceTemplate == 3">
                    <pre>{{resources}}</pre>
                  </template>

                  <!-- Podcasts -->
                  <template v-else-if="resourceTemplate == 4">
                    <pre>{{resources}}</pre>
                  </template>

                  <!-- External Content -->
                  <template v-else-if="resourceTemplate == 5">
                    <pre>{{resources}}</pre>
                  </template>

                  <!-- Images -->
                  <template v-else-if="resourceTemplate == 6">
                    <v-row>
                      <v-col cols="4">
                        <v-img :src="resources.thumbnail_url"></v-img>
                        <pre>{{resources}}</pre>
                      </v-col>
                    </v-row>
                  </template>

                  <template v-else>

                    <!-- Media above title, sort by type -->
                    <v-divider></v-divider>
                    <p class="title text-center">{{resources.title}}</p>
                    <v-divider></v-divider>
                    <!-- Languages -->
                    <v-row>
                      <v-col cols="12" v-for="(language, languageIndex) in resources.languages" :Key="languageIndex" class="pb-0 pt-0">
                        <v-card  v-if="language.link" height="100%" @click="test(language.link)">
                          <v-divider style="color:hotpink"></v-divider>
                          <v-row>
                            <v-col cols="1" class="pt-7 ml-5">
                              <v-img v-if="language.language == 'English'" src="@/assets/flags/england.png" alt="Norwegian Flag" max-height="30" max-width="30" contain></v-img>
                              <v-img v-if="language.language == 'Italian'" src="@/assets/flags/italy.png" alt="Norwegian Flag" max-height="25" max-width="25" contain class="ml-1"></v-img>
                              <v-img v-if="language.language == 'Norwegian'" src="@/assets/flags/norway.png" alt="Norwegian Flag" min-height="25" min-width="25" max-height="25" max-width="25" contain class="ml-1"></v-img>
                              <v-img v-if="language.language == 'Danish'" src="@/assets/flags/denmark.png" alt="Norwegian Flag" max-height="25" max-width="25" contain class="ml-1"></v-img>
                            </v-col>
                            <v-col class="title pt-7">
                              <p>{{language.language}}</p>
                            </v-col>
                          </v-row>
                          <v-divider></v-divider>
                        </v-card>
                      </v-col>
                    </v-row>
                  </template>
                
                </v-card>
              </v-col>
            </template>
            
          </v-row>
        </v-card>
      </v-col>

    </v-row>
  </div>
</template>

<script>
export default {
  data(){
    return {
      accessKey:window.btoa('bac436b32a36431bb437b9509b6d3495'),
      // Display corresponding template
      resourceTemplate: 0,
      // Content to display of said type
      contentType: "Resource Content",
      resourceContent: [],
      // Project Tenant
      tenant: 110,

      // Resource Cards
      colorArr:[ "#205072", "#329D9C", "#D83636", "#DD9A30", "#205072", "#329D9C" ],
      resourceFolders:[
        { title: "Video", colour: "", image: "", description: "", template: 1 },
        { title: "Files", colour: "", image: "", description: "", template: 2 },
        { title: "Courses", colour: "", image: "", description: "", template: 3 },
        { title: "Podcast", colour: "", image: "", description: "", template: 4 },
        { title: "External Content", colour: "", image: "", description: "", template: 5 },
        { title: "Images", colour: "", image: "", description: "", template: 6 }
      ],

      // Example video display
      dummyRecourseContent:[
        { title: "Video 1", content: "", type: "", languages: [
          {language: "English", link: "https://www.google.com/" },
          {language: "Italian", link: "https://www.vg.no/" },
          {language: "Norwegian", link: "https://www.vg.no/" },
          {language: "Danish", link: "" }
        ]},
        { title: "Video 2", content: "", type: "", languages: [
          {language: "English", link: "" },
          {language: "Italian", link: "" },
          {language: "Norwegian", link: "https://www.t-a.no/" },
          {language: "Danish", link: "https://www.google.com/" }
        ]}
      ]

    }
  },
  mounted(){ 
    // this.getAllTheResources();
  },
  methods:{
    // Close the Bottom Box
    closeTheResourceBox(){
      this.resourceTemplate = 0;
      this.contentType = "Resource Content";
      // this.resourceContent = [];
    },

    // Opens link, rename
    test(link){
      window.open(link);
    },


    // Display the specific Resource Content
    displayResource(templateID){
      this.resourceTemplate = templateID;
      console.log("this template", this.resourceTemplate)
      this.resourceContent = [];
      // Query based on type
      if(this.resourceTemplate == 1) {
        // Videos
        this.getAllVideoResources(templateID);
        this.contentType = "Videos";
      } else if(this.resourceTemplate == 2) {
        // Files
        this.getAllFileResources(templateID);
        this.contentType = "Files";
      } else if(this.resourceTemplate == 3) {
        // Courses
        console.log("No Courses in the resource center system yet")
        this.contentType = "Courses";
      } else if(this.resourceTemplate == 4) {
        // Podcasts
        console.log("No Podcasts added in the system yet");
        this.contentType = "Podcasts";
      } else if(this.resourceTemplate == 5) {
        // External Content
        this.getAllExternalContentResources(templateID);
        this.contentType = "External Content";
      } else if(this.resourceTemplate == 6) {
        // Images
        this.getAllImageResources(templateID);
        this.contentType = "Images";
      } else {
        console.log("Unknown");
        this.contentType = "Unknown";
      }
    },


    // Getting ALL the Ressources
    getAllTheResources(){
      this.$http.get(`https://app.followup.prios.no/api/resource_management/content?mode=getpubliccontent&tenant_id=${this.tenant}`,{headers:{Tempaccess:this.accessKey}}).then(response =>{
        this.resourceContent = response.data;
        console.log("Responsen", response.data);
      })
    },

    // Images
    getAllImageResources(){
      this.$http.get(`https://app.followup.prios.no/api/resource_management/content?mode=getpubliccontent&tenant_id=${this.tenant}&content_type=${'image'}`,{headers:{Tempaccess:this.accessKey}}).then(response =>{
        this.resourceContent = response.data;
        console.log("Responsen", response.data);
      })
    },

    // Files
    getAllFileResources(){
      this.$http.get(`https://app.followup.prios.no/api/resource_management/content?mode=getpubliccontent&tenant_id=${this.tenant}&content_type=${'files'}`,{headers:{Tempaccess:this.accessKey}}).then(response =>{
        this.resourceContent = response.data;
        console.log("Responsen", response.data);
      })
    },

    // Videos
    getAllVideoResources(){
      this.$http.get(`https://app.followup.prios.no/api/resource_management/content?mode=getpubliccontent&tenant_id=${this.tenant}&content_type=${'youtube_video'}`,{headers:{Tempaccess:this.accessKey}}).then(response =>{
        this.resourceContent = response.data;
        console.log("Responsen", response.data);
      })
    },

    // External Content
    getAllExternalContentResources(){
      this.$http.get(`https://app.followup.prios.no/api/resource_management/content?mode=getpubliccontent&tenant_id=${this.tenant}&content_type=${'external_content'}`,{headers:{Tempaccess:this.accessKey}}).then(response =>{
        this.resourceContent = response.data;
        console.log("Responsen", response.data);
      })
    },

    // RSS
    getAllRssResources(){

    },

    // Podcast
    getAllPodcastResources(){

    }

  }
}
</script>

<style scoped>
/* General Page */
.homePageWidth {
  width: 90vw; 
  margin:auto auto;
}

.newsCardDividerPositioning {
  margin-left:1%; 
  margin-bottom:2%;
}

</style>