<template>
  <div class="pageWidth">
    <v-row>
      <v-col cols="12" class="mt-5 mb-15"></v-col>

      <!-- Card template 1 -->
      <v-col cols="5">
        <v-card height="100%">
          <v-row>
            <v-col cols="4" class="pa-3">
              <!-- Image -->
              <div class="imageContainer">
                <img class="imageFitting" src="../../assets/images/evolvebackground.jpg">
              </div>
            </v-col>
            <v-col cols="8">
              <!-- Title -->
              <p class="text-center primaryTextColor smabHeadliners bolderText mb-3">Last Time Change!</p>
              <!-- Card content -->
              <p class="primaryTextColor latoFont smabDescriptionText pb-0 mb-2 pl-5 pr-5">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et quasi architect voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
              <!-- Date and author -->
              <p class="primaryTextColor dateAndAuthorText clearBoxmodel pl-5"> 22.02.2022 - Christopher Nolan</p>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="1"></v-col>

      <!-- Card template 2 - Darkmode no image -->
      <v-col cols="4">
        <v-card height="100%" dark> 
          <v-row>
            <v-col cols="12" class="newsDarkcardContainer ma-0 pa-0">
              <v-img class="newsDarkcardimageFitting" src="../../assets/images/evolvebackground.jpg">
                <!-- Title -->
                <p class="text-center smabHeadliners bolderText mb-3">Text in %50 Darkened Picture</p>
                <!-- Card content -->
                <p class="text-center latoFont smabDescriptionText pb-0 mb-10 pl-15 pr-15">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                  eaque ipsa quae ab illo inventore veritatis et quasi architect voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                  sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
                <!-- Date and author -->
                <p class="text-center dateAndAuthorText clearBoxmodel"> 22.02.2022 - Christopher Nolan</p>
              </v-img>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <!-- Card Template 3 - No image -->
      <v-col cols="4">
        <v-card height="100%"> 
          <v-row>
            <v-col cols="12" class="newsDarkcardContainer ma-0 pa-0">
              
              <!-- <v-img class="newsDarkcardimageFitting" src="../../assets/images/evolvebackground.jpg"> -->
                <!-- Title -->
                <p class="text-center smabHeadliners bolderText mb-3">Text in %50 Darkened Picture</p>
                  <!-- Card content -->
                  <p class="text-center latoFont smabDescriptionText pb-0 mb-10 pl-15 pr-15">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                    eaque ipsa quae ab illo inventore veritatis et quasi architect voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                  </p>
                  <!-- Date and author -->
                  <p class="text-center dateAndAuthorText clearBoxmodel"> 22.02.2022 - Christopher Nolan</p>
              
              <!-- </v-img> -->
            </v-col>
          </v-row>
        </v-card>
      </v-col>



      <v-col cols="5">
        <v-card class="NewsCardDarkmode" height="100%" dark>
          <v-row>
            <v-col cols="12">
              <!-- Title -->
              <p class="text-center smabHeadliners bolderText mb-3">Text in %50 Darkened Picture</p>
              <!-- Card content -->
              <p class="text-center latoFont smabDescriptionText pb-0 mb-10 pl-15 pr-15">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et quasi architect voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
              <!-- Date and author -->
              <p class="text-center dateAndAuthorText clearBoxmodel"> 22.02.2022 - Christopher Nolan</p>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return{

    }
  }
}
</script>

<style scoped>
  @import '../../assets/styles/styleSMAB.css';

</style>