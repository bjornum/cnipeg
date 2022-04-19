<template>
  <div>
    <v-row>
      <v-col class="mt-15"></v-col>
    </v-row>
    <!-- Iterate the Componentes below -->
    <ResourcesVersionTwo></ResourcesVersionTwo>
  </div>
</template>

<script>
import ResourcesVersionTwo from "@/views/RessourcePage/ResourcesTwo.vue"
export default {
  components: {
    ResourcesVersionTwo
  },
  data(){
    return {

    }
  }
}
</script>

<style scoped>

</style>