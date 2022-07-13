<template>
  <div>
     <!-- Read the README for more info -->
    <TrainingDialog ref="openTrainingDialog"></TrainingDialog>

    <v-row>
      <v-col cols="12" xl="3" lg="3" md="3" sm="12" xs="12" v-for="(courseCollection, index) in courseCollections" :key="index" class="pa-3">
        <v-card class="pa-2" @click="$refs.openTrainingDialog.openDialog(courseCollection)" height="100%">
          <v-img v-if="courseCollection.background_image" :src="courseCollection.background_image" style="height: 150px;"></v-img>
          <p class="pt-3 text-center">{{courseCollection.name}}</p>
          <p class="textLimiter">{{courseCollection.description}}</p>
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
      // 73 - default 999
      tenant: 73,
      courseCollections:[],
    }
  },
  mounted(){
    this.getAllCourseCollections();
  },
  methods:{
    // Get all the courses to display on the page
    getAllCourseCollections(){
      this.courseCollections = [];
      this.$http.get(`https://app.followup.prios.no/api/courses/collection?mode=getpubliccoursesbytenant&tenant_id=${this.tenant}&user_id=${null}`,{headers:{tempaccess:this.accessKey}}).then(response =>{
        response.data.forEach(item =>{
          item.collection_content = []
          this.courseCollections.push(item);
        })
      })
    },
  }
}
</script>