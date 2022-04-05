<template>
  <div>
    <v-row align="center">
      <v-col cols="12" class="mt-15"></v-col>
      <v-col cols="4" v-for="(item, index) in pages" :key="index">
        <v-card class="ma-15 pa-10" height="70%" style="border:solid black 1px;">
          <p class="cardTitle text-center align-center" v-html="item.title"></p>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data(){
    return {
      pages: [
        {title: "The Board", link: "aaaaaaaaaa" },
        {title: "Resources", link: "aaaaaaaaaa" },
        {title: "Webinars", link: "aaaaaaaaaa" },
        {title: "Workrooms", link: "aaaaaaaaaa" },
        {title: "Forum", link: "aaaaaaaaaa" },
        {title: "Chatrooms  <br> /Messages   <br> /Chats", link: "aaaaaaaaaa" },
      ]
    }
  }
}
</script>

<style scoped>
.cardTitle {
  /* font-family: 'Barlow', sans-serif; */
  /* font-family: 'Josefin Sans', sans-serif; */
  font-size:36px;
  color: #2E3C46;
  opacity: 1;
  letter-spacing: 0px;
  font-style:normal;
}
</style>