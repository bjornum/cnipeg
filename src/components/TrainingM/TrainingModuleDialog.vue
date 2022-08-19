<template>
  <v-dialog v-model="trainingDialog" fullscreen>
    <v-card>
      <!-- Title and Cross -->
      <v-card-title>
        <span class="headline">{{trainingContent.name}}</span>
        <v-spacer />
        <v-btn color="error" icon @click="closeDialog()">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <!-- #0. Main Page -->
      <template v-if="trainingTemplate == 0">
        <v-row class="ma-0 pa-0">
          <v-col cols="12">
            <v-row>
              <!-- Image -->
              <v-col cols="12" xl="4" lg="4" md="4" sm="12" xs="12" class="pa-5">
                <v-img :src="trainingContent.background_image"></v-img>
              </v-col>
              <!-- Title and description -->
              <v-col cols="12" xl="7" lg="7" md="7" sm="12" xs="12">
                <p>{{trainingContent.name}}</p>
                <p>{{trainingContent.description}}</p>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-divider></v-divider>
            <v-divider></v-divider>
          </v-col>

          <!-- Chapter Cards -->
          <v-col cols="12" xl="3" lg="3" md="3" sm="12" xs="12" v-for="(trainingChapter, trainingChapterIndex) in trainingChapterData" :key="trainingChapterIndex" class="pa-5">

            <!-- If Type Lesson -->
            <template v-if="trainingChapter.type == 'lesson'">
              <v-card height="100%" @click="trainingModuleChapterData(trainingChapter)" class="pa-3">
                <v-img :src="trainingChapter.content_background" aspect-ratio="3" class="pa-5"></v-img>
                <p class="title text-center pt-5">{{trainingChapter.content_label}}
                  <span style="color: grey; font-size: 12px;">{{trainingChapter.type}}</span>
                </p>
                <p>{{trainingChapter.content_description}}</p>
              </v-card>
            </template>

            <template v-else-if="trainingChapter.type == 'lesson_single'">
              <v-card height="100%" @click="singleLessonData(trainingChapter)" class="pa-3">
                <v-img :src="trainingChapter.content_background" aspect-ratio="3" class="pa-5"></v-img>
                <p class="title text-center pt-5">{{trainingChapter.content_label}}
                  <span style="color: grey; font-size: 12px;">{{trainingChapter.type}}</span>
                </p>
                <p>{{trainingChapter.content_description}}</p>
              </v-card>
            </template>

            <template v-else>
              <v-card height="100%" @click="SingleTypeContentWindow(trainingChapter)" class="pa-3">
                <v-img :src="trainingChapter.content_background" aspect-ratio="3" class="pa-5"></v-img>
                <p class="title text-center pt-5">{{trainingChapter.content_label}}
                  <span style="color: grey; font-size: 12px;">{{trainingChapter.type}}</span>
                </p>
                <p>{{trainingChapter.content_description}}</p>
              </v-card>
            </template>

          </v-col>
        </v-row>
      </template>

      <!-- #1. Singular Content -->
      <template v-else-if="trainingTemplate == 1">
        <v-row class="ma-0 pa-0">
          <!-- Navigation Buttons -->
          <v-col cols="12" class="ma-0 pa-0">
            <v-btn x-large icon title="Go back to Main Course" @click="goToMainTemplate()">
              <v-icon x-large color="primary">mdi-home</v-icon>
            </v-btn>
            <v-btn x-large icon title="Go back to Sub Courses" @click="goToMainTemplate()">
              <v-icon x-large color="success">mdi-arrow-left-bold</v-icon>
            </v-btn>
            <v-divider></v-divider>
          </v-col>
          <!-- Youtube -->
          <v-col cols="12" v-if="singleCourseData.type == 'youtube_video'" class="ma-0 pa-0">
            <p class="text-center title ">{{singleCourseData.content_description}}</p>
            <p class="pl-3">{{singleCourseData.content_label}}</p>
            <iframe v-if="$vuetify.breakpoint.mdAndDown" :src="singleCourseData.content" width="100%" style="min-height:300px;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe v-else style="margin-left:2%;" width="50%" height="500" :src="singleCourseData.content" title="Valuable creativity" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </v-col>
        </v-row>
      </template>

      <!-- #2. Chapter Lesson Main -->
      <template v-else-if="trainingTemplate == 2">
        <v-row class="ma-0 pa-0">
          <v-col cols="12" class="ma-0 pa-0 pl-5">
            <v-btn x-large icon title="Go back to Main Course" @click="goToMainTemplate()">
              <v-icon x-large color="primary">mdi-home</v-icon>
            </v-btn>
            <v-btn x-large icon title="Go back to Sub Courses" @click="goToMainTemplate()">
              <v-icon x-large color="success">mdi-arrow-left-bold</v-icon>
            </v-btn>
            <v-divider></v-divider>
          </v-col>
          <!-- Image, Title and Description-->
          <v-col cols="12" xl="4" lg="4" md="4" sm="12" xs="12" class="pa-5">
            <v-img :src="mainLessonData.content_background"></v-img>
          </v-col>
          <!-- Title and description -->
          <v-col cols="12" xl="7" lg="7" md="7" sm="12" xs="12" >
            <p>{{mainLessonData.content_label}}</p>
            <p>{{mainLessonData.content_description}}</p>
          </v-col>
          <!-- Lesson cards -->
          <v-col cols="12" xl="4" lg="4" md="4" sm="12" xs="12" v-for="(lesson, lessonIndex) in trainingSubChapterData" :key="lessonIndex">
            <v-card class="pa-5" @click="getSpecificLessionData(lesson.id)" :color="lessonCardColours[lessonIndex]">
              <p class="text-center pa-0 mb-0">{{lesson.label}}</p>
            </v-card>
          </v-col>
        </v-row>
      </template>

      <!-- #3. Chapter Lesson Sub Content -->
      <template v-else-if="trainingTemplate == 3">
        <v-row class="ma-0 pa-0">
          <v-col cols="12" class="ma-0 pa-0 pl-5">
            <v-btn x-large icon title="Go back to Main Course" @click="goToMainTemplate()">
              <v-icon x-large color="primary">mdi-home</v-icon>
            </v-btn>
            <v-btn x-large icon title="Go back to Sub Courses" @click="returnToMainLesson()">
              <v-icon x-large color="success">mdi-arrow-left-bold</v-icon>
            </v-btn>
            <v-divider></v-divider>
          </v-col>
          <v-col cols="12" :xl="lessonContent.class_list.split('xs')[1]" :lg="lessonContent.class_list.split('xs')[1]" :md="lessonContent.class_list.split('xs')[1]" sm="12" xs="12" v-for="(lessonContent, lessonContentIndex) in lessonContentData" :key="lessonContentIndex">
            <v-card height="100%" flat>
              <template v-if="lessonContent.type == 'text'">
                <p class="pa-5" v-html="lessonContent.content"></p>
              </template>
              <template v-else-if="lessonContent.type == 'task'">
                <TaskData :gettingChapterContentTask="lessonContent.content"></TaskData>
              </template>
              <template v-else-if="lessonContent.type == 'image'">
                <v-img :src="lessonContent.content" height="300" contain></v-img>
              </template>
              <template v-else>
                <pre>{{lessonContent}}</pre>
                No type specificed
              </template>
            </v-card>
          </v-col>
        </v-row>
      </template>

      <!-- If something goes wrong -->
      <template v-else>
        ...
      </template>
      
    </v-card>
  </v-dialog>
</template>

<script>
import TaskData from "./taskData.vue"
export default {
  components: {
    TaskData
  },
  data() {
    return {
      accessKey: "YmFjNDM2YjMyYTM2NDMxYmI0MzdiOTUwOWI2ZDM0OTU=",
      lessonCardColours: ['#E8F5E9', '#E3F2FD', '#FFEBEE', '#EFEBE9', '#FCE4EC', '#FFF3E0', '#E0F7FA'],
      trainingDialog: false,
      trainingContent: [],
      courseID: 0,
      trainingChapterData: [],
      /*
        0. Main Page - Main content and Chapter Cards.
        1. Singular Content (Everything but lesson)
        2. Chapter lesson + Sub Chapters of said lesson cards.
        3. Singular from Lesson Sub Chapter.
      */
      trainingTemplate: 0,
      trainingSubChapterData: [],
      singleCourseData: [],
      mainLessonData: [],
      lessonContentData: []
    }
  },
  methods: {

    /* ===== Main Dialog Functions ===== */
    // Open Dialog
    openDialog(trainingData){
      this.trainingDialog = true;
      this.trainingContent = trainingData;
      this.courseID = trainingData.id;
      this.trainingModuleChapters(trainingData.id);
      this.trainingTemplate = 0;
    },
    // Close Dialog
    closeDialog(){
      this.trainingDialog = false;
    },


    /* ===== Navigation ===== */

    // Move from template 1 to main template 0
    goToMainTemplate(){
      this.trainingTemplate = 0;
      this.singleCourseData = [];
      this.trainingSubChapterData = [];
    },


    // Go to Template 1 - If Single Type
    SingleTypeContentWindow(singleTypeData){
      this.trainingTemplate = 1;
      this.singleCourseData = singleTypeData;
    },

    // Back to Lesson Chapter - Template 2
    returnToMainLesson(){
      this.trainingTemplate = 2;
    },


    /* ===== Query calls ===== */

    // #1. Get all Chapters within the training module.
    trainingModuleChapters(courseID){
      this.$http.get(`https://app.followup.prios.no/api/courses/collection_content?mode=getcollectioncontent&courses_collection_id=` + courseID,{headers:{tempaccess:this.accessKey}}).then(response =>{
        this.trainingChapterData = response.data;
      })
    },

    // #2. Get all Main Data on type lession
    trainingModuleChapterData(lessongData){
      this.$http.get(`https://app.followup.prios.no/api/task_library/lessons?mode=getchapters&courses_id=` + lessongData.content,{headers:{tempaccess:this.accessKey}}).then(response =>{
        this.trainingSubChapterData = response.data;
        this.mainLessonData = lessongData;
        this.trainingTemplate = 2;
      })
    },

    // #3. Get specific Lesson Data
    getSpecificLessionData(LessionID){
      this.toTop();
      this.$http.get(`https://app.followup.prios.no/api/task_library/lesson_chapters_content?chapter_id=` + LessionID, {headers:{tempaccess:this.accessKey}}).then(response => {
        this.lessonContentData = response.data;
        this.trainingTemplate = 3;
      })
    },

     // #4. Get all Main Data on type single_lesson
    singleLessonData(lessongData){
      this.$http.get(`https://app.followup.prios.no/api/task_library/lessons?mode=getchapters&courses_id=` + lessongData.content,{headers:{tempaccess:this.accessKey}}).then(response =>{
        this.trainingSubChapterData = response.data;
        this.mainLessonData = lessongData;
        this.trainingTemplate = 2;
        console.log("All the data lesson", response.date);
        console.log("getting id", lessongData);
      })
    },

    // Scroll to top.
    toTop(){
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}
</script>