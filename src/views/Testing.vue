<template>
  <div>
    <v-row>
      <v-col class="mt-15"></v-col>
     
    </v-row>

    <!-- <div v-for="(item, yeps) in yesTest" :key="yeps">
      <pre>{{item.attributes.gallery.data[1].attributes.formats.thumbnail.url}}</pre>
      
      <v-img src="http://localhost:1337/uploads/thumbnail_cat_One_e9400d93c2.jpg" height="100px" width="100px"></v-img>
      <v-img :src="url +  item.attributes.gallery.data[1].attributes.formats.thumbnail.url" height="100px" width="100px"></v-img>
    </div> -->


    <!-- <div v-for="(item, yeps) in yesTest" :key="yeps">
      <v-row>
        <v-col cols="4" v-for="(myCats, myCatsIndex) in item.attributes.gallery.data" :key="myCatsIndex">
          <v-img v-if="myCats.attributes.formats.medium" :src="url +  myCats.attributes.formats.medium.url" height="100px" width="100px"></v-img>
          <pre v-else>....</pre>
        </v-col>
      </v-row>
    </div> -->
    <!-- <pre>{{yesTest}}</pre> -->

<pre>{{yesTest}}</pre>
<!-- 

    <div v-for="(item, yeps) in yesTest" :key="yeps" cols="12">
      <pre>{{item.attributes.name}}</pre>
      <v-img :src="url +  item.attributes.url" height="100px" width="100px"></v-img>
    </div> -->


   
    <!-- <ResourcesVersionTwo></ResourcesVersionTwo> -->
  </div>
</template>

<script>


export default {
  components: {
    
  },
  data(){
    return {
      myTest: 22,
      yesTest: "",
      categoryName: "",
      url: 'http://localhost:1337'
    }
  },
  methods: {
    getSingularStrapiEntry(){
      this.$http.get(`http://localhost:1337/api/Test`).then(response =>{
        this.myTest = response.data.data.attributes;
      })
    },
    // getBigCollectionStrapi(){
    //   this.$http.get(`http://localhost:1337/api/images?populate=gallery`).then(response =>{
    //     this.yesTest = response.data.data[0].attributes.gallery.data;
    //   })
    // },

    getBigCollectionStrapi(){
      this.$http.get(`http://localhost:1337/api/image-gallery?populate=images`).then(response =>{
        // this.yesTest = response.data.data[0].attributes.gallery.data;
        this.yesTest = response.data.data.attributes.images.data;
      })
    },

    postToStrapiCategories(){
      // const newCategory = {
      //   name: this.categoryName
      // };
      // this.$http.post(`http://localhost:1337/api/Categories`, newCategory).then(response =>{
      //   console.log
      // })

      this.$http.post('http://localhost:1337/api/Categories',{
        "data": {
          name: 'Dolemon Sushi'
        }
      }
    ).then(response => {
      console.log(" Wut",response);
    });
    }
  },
  mounted(){
    this.getSingularStrapiEntry();
    this.getBigCollectionStrapi();
  }
  
}
</script>

<style scoped>

</style>