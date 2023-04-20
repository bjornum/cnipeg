<template>
  <v-dialog v-model="partnerDialog" width="700px">
    <v-card>
      <!-- Close button floating -->
      <v-card-title>
        <v-spacer />
        <v-btn large color="error" icon @click="closeDialog">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <!-- Content -->
      <v-row class="ma-0 pa-0">
        <!-- <pre>{{partnerContent}}</pre> -->
        <v-col cols="12" >
          <v-card height="80px" flat class="d-flex" v-if="partnerContent.title == 'PRIOS KOMPETANSE'">
            <v-img class="mt-5" :src="partnerContent.image" contain />
          </v-card>
          <v-card height="120px" flat class="d-flex" v-else>
            <v-img class="mt-5" :src="partnerContent.image" contain />
          </v-card>
        </v-col>
        <v-col cols="12" class="ma-0 pa-0">
          <p class="text-center title">{{partnerContent.title}}</p>
          <v-divider class="mx-2"></v-divider>
        </v-col>
        <v-col cols="12" class="ma-0 pa-0 pa-5">
          <p class="descriptionText" v-html="partnerContent.description"></p>
          
        </v-col>
        <v-col class="pb-0 mb-0" cols="12">
          <p class="pl-3 partnerTitle text-center mb-0" style="min-height:70px;">
            <span>
              <v-btn text :href="partnerContent.link" target="_blank">
                <p>{{partnerContent.linkText}}</p>
              </v-btn>
            </span>
          </p>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    data(){
      return {
        partnerDialog: false,
        partnerContent: ""
      }
    },
    methods: {
      // Open Dialog
      openDialog(dataFromParent){
        this.partnerDialog = true;
        this.partnerContent = dataFromParent;
      },
      // Close Dialog
      closeDialog(){
        this.partnerDialog = false;
        this.partnerContent = "";
      }
    }
  }
</script>

<style scoped>
.descriptionText {
  font-size: 16px;
  white-space: pre-line;
}
</style>