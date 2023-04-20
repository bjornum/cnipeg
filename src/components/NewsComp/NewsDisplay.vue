<template>
  <div>
    <v-row>
      <v-col cols="12" class="mt-15"></v-col>
      <v-col cols="12">

        <p>I R TEST</p>
        <p>{{$route.params.id}}</p>
        <p>---</p>
        <p>{{newsId}}</p>
      </v-col>
    </v-row>

  </div>
</template>

<script>
  export default {
    // data(){
    //   return {
    //     newsId: 0;
    //   }
    // },

    data(){
      return {
        newsId: 0
      }
    },
    computed: {
      newsId(){
        return parseInt(this.$route.params.id);
      }
    },
    methods: {
      // getNewsId(){
      //   this.newsId = parseInt(this.$route.params.id);
      // }
    },
  }
</script>