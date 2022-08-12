<template>
  <div>
    <v-row>
      <v-col class="mt-15"></v-col>
      <v-col cols="12" xl="5" lg="5" md="5" sm="12" xs="12" class="mt-15 pa-5">
        <MainCalendar></MainCalendar>
      </v-col>
      <v-col cols="3"></v-col>
    </v-row>
  </div>
</template>

<script>
import MainCalendar from "@/components/Calendar/MainCalendar.vue"
export default {
  components: {
    MainCalendar
  },
  
}
</script>