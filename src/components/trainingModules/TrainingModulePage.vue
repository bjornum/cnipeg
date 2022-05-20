<template>
  <div>
     <!-- Read the README for more info -->
    <TrainingDialog ref="openTrainingDialog"></TrainingDialog>

    <v-row>
      <v-col cols="12" xl="3" lg="3" md="3" sm="12" xs="12" v-for="(courseCollection, index) in courseCollections" :key="index" class="pa-3">
        <v-card class="pa-2" @click="$refs.openTrainingDialog.openDialog(courseCollection)" height="100%">
          <v-img v-if="courseCollection.background_image" :src="courseCollection.background_image" style="height: 150px;"></v-img>
          <p class="pt-3 text-center">{{courseCollection.name}}</p>
          <p class="CardDescriptionTextFlow">{{courseCollection.description}}</p>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>


<script>
import TrainingDialog from "./TrainingModuleDialog.vue"
export default {
  components:{
    TrainingDialog
  },
  data(){
    return{
      // Access Key to followup API
      accessKey: "YmFjNDM2YjMyYTM2NDMxYmI0MzdiOTUwOWI2ZDM0OTU=",
      courseCollections:[],
      selectedCourseCollection:null,
      currentCollectionContent:[],
      newSubject:"",
      subjectsToAdd:[],
      newCollectionTabs:0,
      newCollection:{
        id:null,
        name:null,
        description:null,
        tenant_id:null,
        owner:null,
        background_image:null,
        estimated_time:null,
        language:null,
        level:null,
        subjects:[]
      },
      newCollectionContentDialog:false,
      newCollectionDialog:false,
      selectedContentType:null,
      selectedContent:{
        content:null,
        label:null,
        description:null,
        background:null,
      },
      addCollectionContentStepper:1,
      courses:[],
      newContentUrlValid:false,
      chaptersAndQuestions:[],
      selectedCategoryChapter:null,
      allowedExternalLinks:[
        "concordia.ca",
        "padlet.com",
        "prezi.com",
        "code.org",
        "thinglink.com",
        "colorado.edu",
        "docs.google.com",
        "drive.google.com",
        "ndla.no"
      ]
    }
  },
  methods:{
    
    
    getAllCourseCollections(){
      this.courseCollections = [];
      // this.$axios.get("api/courses/collection?tenant_id="+ this.currentUser.tenant_id)
      this.$http.get(`https://app.followup.prios.no/api/courses/collection?mode=getpubliccoursesbytenant&tenant_id=73&user_id=${null}`,{headers:{tempaccess:this.accessKey}}).then(response =>{
        response.data.forEach(item =>{
          item.collection_content = []
          this.courseCollections.push(item);
        })
      })
    },
    getTargetCollectionContent(){
      // this.$axios.get(`api/courses/collection_content?mode=getcollectioncontent&courses_collection_id=${this.selectedCourseCollection.id}`)
      this.$http.get(`https://app.followup.prios.no/api/courses/collection_content?mode=getcollectioncontent&courses_collection_id=14`,{headers:{tempaccess:this.accessKey}})
      .then(response =>{
        this.currentCollectionContent = response.data;
      })
    },
    getChaptersAndQuestions(){
      this.$http.get(`https://app.followup.prios.no/api/task_library/chapters?mode=getchapterandquestions&tenant_id=${this.currentUser.tenant_id}`,{headers:{tempaccess: this.accessKey}}).then(response =>{
        response.data.forEach(item =>{
          let questionTypes = item.questions.map(i => i.type)
          if
          (
            questionTypes.includes("text_long") ||
            questionTypes.includes("audio_understanding_multiple") ||
            questionTypes.includes("audio_understanding_text") ||
            questionTypes.includes("muntlig_oppgave")
          ){
            item.chapter_unavailable = true;
          }
          else{
            item.chapter_unavailable = false;
          }
        })
        this.chaptersAndQuestions = response.data;
      })
    },
  },
  watch:{
    selectedCourseCollection(){
      this.getTargetCollectionContent();
    },
    addCollectionContentStepper(){
      if(this.addCollectionContentStepper === 1){
        this.selectedContentType = null;
        this.selectedCategoryChapter = null;
        this.selectedContent = {
          content:null,
          label:null,
          description:null,
          background:null,
        };
      }
    },
    newCollectionDialog(){
      if(this.newCollectionDialog == false){
        this.newCollection = {
          id:null,
          name:null,
          description:null,
          tenant_id:null,
          owner:null,
          background_image:null,
          estimated_time:null,
          language:null,
          level:null,
          subjects:[]
        };
        this.newSubject = "";
        this.subjectsToAdd = [];
      }
    }
  },
  mounted(){
    this.getAllCourseCollections();
  }
}
</script>


<style scoped>
.v-btn{
  text-transform:none;
}
.cursorStyle{
  cursor:pointer;
}
.cardBorderStyle{
  border-radius:10px;
  min-height:20em;
}
.selectedChapterStyle{
  box-shadow:0px 0px 5px #1a8096;
}
.textAlignCenter{
  position:relative;
  top:50%;
  transform:translateY(-50%);
}

.CardDescriptionTextFlow{
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>