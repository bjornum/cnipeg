<template>
  <div>
    <v-row>
      <v-col cols="12" class="mt-5"></v-col>
      <v-col cols="12">This is the About Game</v-col>
      <v-col cols="12">
        <LanguageTest></LanguageTest>
      </v-col>
      <v-col>
        <SelectLocale></SelectLocale>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import LanguageTest from "@/components/TestAndDevelopment/LanguageTest.vue"
import SelectLocale from "@/components/TestAndDevelopment/SelectLocale.vue"
export default {
  name: 'About',
  components:{
    LanguageTest,
    SelectLocale
  },
  data(){
    return {
      
    }
  }
}
</script>