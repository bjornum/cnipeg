<template>
  <div class="homePageWidth">
    <v-row>
      <v-col cols="12" class="mt-15"></v-col>
      <v-col cols="12">
        <p>The Board</p>
      </v-col>
      <v-col cols="12">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsam beatae voluptatem voluptatibus placeat quaerat facere autem minus odit cupiditate alias qui delectus itaque unde nemo, numquam similique! Reprehenderit, optio?</p>
      </v-col>

      <!-- TODO: Making it work -->

      <!-- Community Blog -->
      <v-col cols="7">
        <p>Community Blog</p>
        <v-row>
          
          <!-- Filtering -->
          <v-col cols="8">
            <v-btn>Filter</v-btn>
          </v-col>
           <!-- Sorting -->
          <v-col cols="4">
            <v-btn >Sort</v-btn>
          </v-col>
          <!-- Divider fix -->
          <v-col cols="12">
            <v-divider></v-divider>
            <v-divider></v-divider>
            <v-divider></v-divider>
          </v-col>
          <!-- Tag button + dialog trigger -->
          <v-col cols="8">
            <v-btn>Add a tag</v-btn>
          </v-col>
          <!-- SearchBar -->
          <v-col cols="4">
            <v-toolbar dense class="borderRadius">
              <v-text-field hide-details append-icon="mdi-magnify" single-line placeholder="search.."></v-text-field>
            </v-toolbar>
          </v-col>
          <!-- Blog Cards -->
          <v-col cols="12" class="mt-5 mb-5" v-for="(item, index) in fakeBlogCards" :key="index">
            <v-card>
              <v-row>
                <v-col cols="3">
                  <v-img class="pt-3 ml-10" src="img/EVOLVE.png"  max-height="130" max-width="130" contain></v-img>
                </v-col>
                <v-col cols="7">
                  <p class="text-center blogCardTitle">{{item.title}}</p>
                  <div>
                    <p class="blogCardBlogText">{{item.Blogtext}}</p>
                  </div>
                  <p ></p>
                </v-col>
                <v-col cols="2">
                  <p class="blogCardCreatedDate">{{item.created_at}}</p>
                </v-col>
                <v-col cols="12">
                  <pre>{{item}}</pre>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <!-- Events -->
      <v-col cols="4">
        <p>Events</p>
        <v-row>
          <v-col cols="12">
            <v-card>

            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data(){
    return {

      fakeBlogCards: [
        {
          article_id: 11,
          title: "Blog Title",
          link: "https://www.google.com/",
          Blogtext: "The BEST blog ever written, lorem ipsum dolores dahl bla bla masse text og stuff ",
          created_at: "04/04/2022",
          blogImage: "Nei",
          sharedBy: "Jane",
          readByAmount: 123,
          favoritedAmount: 837,
          isStarred: true,
          isVerfified: false,
          tags: ["epic", "goals", "marketing", "awesome", "popular"]
        },
        {
          article_id: 13,
          title: "Get a more successful deal!",
          link: "https://www.google.com/",
          Blogtext: "I r successfull as hecking heck!",
          created_at: "03/04/2022",
          blogImage: "Nope",
          sharedBy: "Bob",
          readByAmount: 22,
          favoritedAmount: 12,
          isStarred: false,
          isVerfified: true,
          tags: ["epic", "goals", "marketing", "awesome", "popular"]
        },
        {
          article_id: 14,
          title: "My success story",
          link: "https://www.google.com/",
          Blogtext: "Just dont be poor.  fixed",
          created_at: "23/03/2022",
          blogImage: "Njet",
          sharedBy: "Karen",
          readByAmount: 9000,
          favoritedAmount: 5,
          isStarred: true,
          isVerfified: true,
          tags: ["epic", "goals", "marketing", "awesome", "popular"]
        },
      ]
    }
  }
}
</script>


<style scoped>
.homePageWidth {
  width: 90vw; 
  margin:auto auto;
}

.borderRadius {
  border: 1px solid #000000;
  border-radius: 25px;
}

/* Card Elements */
.blogCardTitle {
  font-size: 24px;
  color: #000000;
  opacity: 1;
  letter-spacing: 0px;
  font-weight: bold;
}

.blogCardBlogText {
  font-size: 18px;
  color: #000000;
  opacity: 1;
  letter-spacing: 0px;
}

.blogCardCreatedDate {
  font-weight: 24px;
  color: #000000;
  opacity: 1;
  letter-spacing: 0px;
}
</style>