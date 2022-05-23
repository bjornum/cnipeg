<template>
  <div class="homePageWidth">
    <NewsModule></NewsModule>
  </div>
</template>

<script>
import NewsModule from "@/components/newsModule/NewsModulePage.vue"
export default {
  name: 'News',
  components: {
    NewsModule
  },
  data(){
    return {
      
    }
  },
}
</script>