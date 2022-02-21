<template>
  <div>
    <v-row>
      <v-col class="mt-12">
        <v-btn @click="getAllMoocs()">asdadasdqwd</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data(){
    return {
      accessKey:window.btoa('bac436b32a36431bb437b9509b6d3495'),
    }
  },
  methods: {

    getAllMoocs(){
      // this.$http.get(`https://app.followup.prios.no/api/courses/collection?mode=getpubliccoursesbytenant&tenant_id=102&user_id=${null}`,{headers:{Tempaccess:this.accessKey}}).then(response =>{
      //   // this.courseCollections = response.data;
      //   console.log("resp", response.data);
      //   // this.getUserEnrolledCourses();
      // })
      this.$http.get("https://newsapi.org/v2/top-headlines/sources?apiKey=30f48b58e1744751ae853194c0d9ebb1").then((response) => {
        console.log(response.data)
      })
    },
    
    // getRssTest(){
    //   // this.$http.get("https://newsapi.org/v2/top-headlines/sources?apiKey=A30f48b58e1744751ae853194c0d9ebb1").then(response =>{
    //   //   console.log("responsen er: ", response.data);
    //   // })
    //   this.$http.get("https://newsapi.org/v2/top-headlines/sources?apiKey=A30f48b58e1744751ae853194c0d9ebb1").then((response) => {
    //     console.log(response.data)
    //   })
    // },
  }
}
</script>