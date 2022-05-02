<template>
  <v-dialog v-model="articleDialog">
    <v-card>
       <v-card-title>
        <v-spacer></v-spacer>
        <span v-if="$vuetify.breakpoint.mdAndDown" class="newsDialogTitlePhone" >{{articleContent.title}}</span>
        <span v-else class="newsDialogTitle" >{{articleContent.title}}</span>
        <v-spacer />
        <v-btn large class="closeButtonStyling" color="error" icon @click="closeDialog">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data(){
    return {
      articleDialog: false,
      articleContent: []
    }
  },
  methods: {
    // Open Dialog
    openDialog(articleData){
      this.resetFunction();
      this.articleDialog = true;
      this.articleContent = articleData;
    },
    // Close Dialog
    closeDialog(){
      this.articleDialog = false;
      this.resetFunction();
    },

    // Reset Dialog¨
    resetFunction(){
      this.articleContent = [];
    }
  }
}
</script>

<style scoped>

.closeButtonStyling {
  position:fixed; 
  top:30px; 
  right:30px; 
  z-index: 5; 
  border:1px solid black; 
  background-color:rgba(255, 0, 0, 0.2);
}
.newsDialogTitle {
  font-family: 'Barlow', sans-serif;
  font-weight: bold;
  font-size: 46px;
  color: #434343;
  opacity: 1;
  letter-spacing: 0px;
  text-align: left;
}

.newsDialogTitlePhone {
  font-family: 'Barlow', sans-serif;
  font-weight: bold;
  font-size: 36px;
  color: #434343;
  opacity: 1;
  letter-spacing: 0px;
  text-align: left;
}
.newsDialogDescription {
  font-family: 'Lato', sans-serif;
  font-weight: normal;
  font-size: 14px;
  color: #6A6A6A;
  opacity: 1;
  letter-spacing: 0px;
  text-align: left;
}
.newsDialogDate {
  font-family: 'Lato', sans-serif;
  font-weight: normal;
  font-size: 11px;
  color: #6A6A6A;
  opacity: 1;
  letter-spacing: 0px;
  text-align: left;
}

.seeAllButtonText {
  font-family: 'Lato', sans-serif;
  font-weight: normal;
  font-size: 18px;
  color: #205072;
  opacity: 1;
  text-align: center;
  letter-spacing: 0px;
  text-transform: initial;
}
.seeAllButtonBorder {
  border: 3px solid #205072;
  font-family: 'Lato', sans-serif;
  opacity: 1;
  border-radius: 52px;
}
.seeAllButtonBorder:after {
  border: 3px solid #d6d2d24d;
  content: '';
  position: absolute;
  top: -9px;
  right: -9px;
  bottom: -9px;
  left: -9px;
  border-radius: 4em;
  box-shadow: 0px 2px 12px #00000033;
}
</style>