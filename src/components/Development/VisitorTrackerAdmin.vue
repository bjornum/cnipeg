<template>
  <div>
    <pre>{{visitorData}}</pre>
  </div>
</template>

<script>
export default {
  data(){
    return {
      accessKey:process.env.VUE_APP_API_KEY,
      visitorData: []
    }
  },
  mounted(){
    this.testDataRetrieval();
  },
  methods: {
    testDataRetrieval(){
      this.$http.get(`https://app.followup.prios.no/api/page_visitor`,{headers:{Tempaccess:this.accessKey}}).then((response) => {
        this.visitorData = response.data;
      })
    },
  }
}
</script>