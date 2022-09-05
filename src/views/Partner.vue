<template>
  <div class="">
    <PartnerPage></PartnerPage>
    <!-- <PartnerPageTwo></PartnerPageTwo> -->
  </div>
</template>

<script>
import PartnerPage from "@/components/Partners/PartnerPage.vue"
import PartnerPageTwo from "@/components/Partners/PartnerPageTwo.vue"
export default {
  components: {
    PartnerPage,
    PartnerPageTwo
  },
  data() {
    return {
      
    }
  },
}
</script>

<style scoped>

/* Border around the cards */
.cardBorder{ border: 3px #329D9C solid; }


/* Text styling */
.partnerDescriptionPre {
  font-family: 'Lato', sans-serif;
  font-weight: normal;
  text-align: left;
  color: #6A6A6A;
  opacity: 1;
  letter-spacing: 0px;
}
.partnerDescriptionPost {
  font-family: 'Lato', sans-serif;
  font-weight: normal;
  text-align: left;
  color: #6A6A6A;
  opacity: 1;
  letter-spacing: 0px;
}


</style>