<template>
  <div>
    <v-row>
      <v-col class="mt-12">
        <v-btn @click="getAllMoocs()">asdadasdqwd</v-btn>
        <!-- <form @submit.prevent="getRss">
      <div>
        <label> rss url</label>
        <br />
        <input v-model="rssUrl" />
      </div>
      <input type="submit" />
    </form>
    <div v-for="item of items" :key="item.title">
      <h1>{{ item.title }}</h1>
      <p>{{ item.author }}</p>
      <a :href="item.link">{{ item.link }}</a>
    </div> -->
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data(){
    return {
      accessKey:window.btoa('bac436b32a36431bb437b9509b6d3495'),
      // rssUrl: "",
      // items: [],
    }
  },
  methods: {

    // async getRss() {
    //   const urlRegex = `/(http|ftp|https)://[\w-]+(.[\w-]+)+([\w.,@?^=%&amp;:/~+#-]*[\w@?^=%&amp;/~+#-])?/`;
    //   if (!urlRegex.test(this.rssUrl)) {
    //     return;
    //   }
    //   const res = await fetch(
    //     `https://api.allorigins.win/get?url=${this.rssUrl}`
    //   );
    //   const { contents } = await res.json();
    //   const feed = new window.DOMParser().parseFromString(contents, "text/xml");
    //   const items = feed.querySelectorAll("item");
    //   this.items = [...items].map((el) => ({
    //     link: el.querySelector("link").innerHTML,
    //     title: el.querySelector("title").innerHTML,
    //     author: el.querySelector("author").innerHTML,
    //   }));
    // },

    getAllMoocs(){
      // this.$http.get(`https://app.followup.prios.no/api/courses/collection?mode=getpubliccoursesbytenant&tenant_id=102&user_id=${null}`,{headers:{Tempaccess:this.accessKey}}).then(response =>{
      //   // this.courseCollections = response.data;
      //   console.log("resp", response.data);
      //   // this.getUserEnrolledCourses();
      // })
      this.$http.get("https://newsapi.org/v2/top-headlines/sources?apiKey=30f48b58e1744751ae853194c0d9ebb1").then((response) => {
        console.log(response.data)
      })

      // this.$http.get("https://ibimapublishing.com/articles/feed/").then((response) => {
      //   console.log(response.data)
      // })

      // <atom:link href="https://ibimapublishing.com/articles/feed/" rel="self" type="application/rss+xml"/>
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