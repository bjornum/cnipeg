<template>
  <div style="width: 90vw; margin:auto auto;">
    <NewsDialog ref="openingNewsDialog"></NewsDialog>
    <RssDialog ref="openingRssDialog"></RssDialog>

    <v-snackbar v-model="contactToast" dark color="success">
      <span>The message has been sent!</span>
      <v-btn class="float-right" x-small dark icon @click="contactToast = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
    <v-row>
      <v-col cols="12" class="mt-5"></v-col>
      <!-- BIG Title, center of screen -->
      <v-col cols="12" class="pb-0">
        <v-card class="pt-15 pb-3 introImage">
          <p class="introTitle">Welcome to "Title"</p>
          <p class="introDescription">Here is some information about the project</p>
        </v-card>
      </v-col>
      <!-- 3 Cards in center of cards -->
      <v-col cols="2" class="pt-0"></v-col>
      <v-col cols="8" class="pt-0">
        <v-row>
          <v-col cols="12" xl="4" lg="4" md="4" sm="12" xs="12" v-for="(pageCard, pageCardIndex) in pageCards" :key="pageCardIndex">
            <v-card class="pageCardPositioning" :to="pageCard.link" style="position:relative;">
              <v-divider v-if="pageCardIndex == 0" class="pageCardDividerBlue"></v-divider>
              <v-divider v-if="pageCardIndex == 1" class="pageCardDividerGreen"></v-divider>
              <v-divider v-if="pageCardIndex == 2" class="pageCardDividerRed"></v-divider>
              <v-row>
                <v-col cols="10">
                  <p class="title pt-2">{{pageCard.name}}</p>
                </v-col>
                <v-col cols="2">
                  <v-icon large class="pt-2" style="color:black;">mdi-arrow-right</v-icon>
                </v-col>
              </v-row>
              <p>{{pageCard.description}}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <!-- Info Text -->
      <v-col cols="12">
        <v-row>
          <v-col cols="4"></v-col>
          <v-col cols="4">
            <p class="text-center title">Some short info</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident voluptas asperiores dolores aspernatur, inventore blanditiis mollitia harum quo adipisci quisquam, quod odit ad explicabo consequuntur eos saepe animi quasi maiores.</p>
          </v-col>
        </v-row>
      </v-col>

      <!-- News -->
      <v-col cols="2" class="pt-0"></v-col>
      <v-col cols="8">
        <v-row>
          <v-col cols="12" class="pt-15 mt-15">
            <p class="title">News</p>
          </v-col>
          <v-col cols="12" xl="4" lg="4" md="4" sm="12" xs="12" v-for="(fakeNews, fakeNewsIndex) in fakeNewsCards" :key="fakeNewsIndex">
            <v-card height="100%" @click="$refs.openingNewsDialog.openNewsDialog(fakeNews)">
              <v-row>
                <v-col cols="12" class="pb-0">
                  <v-row>
                    <v-col cols="12">
                      <v-img v-if="fakeNews.image" :src="fakeNews.image" alt="News Image" width="auto" height="200px" cover class="ml-2 mr-2"></v-img>
                    </v-col>
                    <v-col cols="12" style="height:125px;" class="mb-0 ml-2">
                      <p class="pl-2 mb-0 article-title">{{fakeNews.title}}</p>
                      <p class="pa-2 mb-0 article-length">{{fakeNews.article}}</p>
                    </v-col>
                    <v-col cols="12" class="pt-0">
                      <v-card-actions class="pt-0">
                        <p class="article-button mr-2">Read article</p>
                        <v-icon style="color:black;">mdi-arrow-right</v-icon>
                      </v-card-actions>
                    </v-col>
                  </v-row>
                  <v-divider v-if="fakeNewsIndex == 0" class="pageCardDividerBlue article-dividers" width="98%"></v-divider>
                  <v-divider v-if="fakeNewsIndex == 1" class="pageCardDividerGreen article-dividers" width="98%"></v-divider>
                  <v-divider v-if="fakeNewsIndex == 2" class="pageCardDividerRed article-dividers" width="98%"></v-divider>
                </v-col>
                <v-col cols="12"></v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" align="center">
          <!-- <v-btn class="text-center" rounded outlined shadow style="box-shadow: 0 0 10px #000000;"> -->
          <!-- <v-btn class="text-center " rounded style="border:solid 2px red; border-radius:4em;"> -->
          <v-btn class="text-center buttonBorder" rounded>
            See all news
          </v-btn>
      </v-col>


      <v-col cols="12">
        <!-- <RssTest></RssTest> -->
        <v-divider></v-divider>
        <v-divider></v-divider>
        <v-divider></v-divider>
      </v-col>
     

      <v-col cols="12">
        <v-row>
          <!-- half screen RSS FEED -->
          <v-col cols="1"></v-col>
          <v-col cols="4">
            <v-card height="100%">
              <p class="text-center title mb-0 pt-5 pb-5">RSS Feed</p>
              <v-divider></v-divider>
              <v-row>
                
                <v-col cols="12" v-for="(rssFeed, rssFeedIndex) in fakeRSSfeed" :key="rssFeedIndex">
                  <v-row >
                    <v-col cols="2"  @click="$refs.openingRssDialog.openRssDialog(rssFeed)">
                      <v-img v-if="rssFeed.image" :src="rssFeed.image" alt="News Image" max-height="50px" contain class="ml-1"></v-img>
                    </v-col>
                    <v-col cols="1"></v-col>
                    <v-col cols="9">
                      <p class="text-center title mb-0">{{rssFeed.title}}</p>
                      <p>{{rssFeed.content}}</p>
                    </v-col>
                  </v-row>
                  <v-divider></v-divider>
                  <v-divider></v-divider>
                  <v-divider></v-divider>
                </v-col>
                <v-col></v-col>
              </v-row>
            </v-card>
          </v-col>

          <!-- Other half screen - Contact -->
          <v-col cols="6">
            <v-card>
              <v-card-title>
                <span class="headline">Contact us</span>
                <v-spacer />
              </v-card-title>
              <v-card-text>
                <v-form ref="form" v-model="isContactFormValid">
                  <v-container>
                    <v-text-field v-model="contactForm.name" name="name" label="Name" :rules="[rules.requiredName]" outlined dense required></v-text-field>
                    <v-text-field v-model="contactForm.email" name="email" label="Email" :rules="[rules.requiredEmail, rules.emailRequirement]" outlined dense required></v-text-field>
                    <v-text-field v-model="contactForm.subject" name="subject" label="Subject" :rules="[rules.requiredField]" outlined dense required></v-text-field>
                    <v-textarea v-model="contactForm.message" name="message" label="Message" :rules="[rules.requiredField]" outlined auto-grow counter required></v-textarea>
                  </v-container>
                </v-form>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn icon @click="clearForm"><v-icon>mdi-close</v-icon></v-btn>
                <v-btn color="success" icon :disabled="!isContactFormValid" @click="postContactForm()"><v-icon>mdi-send</v-icon></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

        </v-row>
      </v-col>

    </v-row>
  </div>
</template>

<script>
import NewsDialog from "@/components/dialogs/newsDialog.vue"
import RssDialog from "@/components/dialogs/rssFeedDialog.vue"
import RssTest from "@/components/rss/rssTest.vue"
  export default {
    name: 'Home',
    components:{
      NewsDialog,
      RssDialog,
      RssTest
    },
    data(){
      return {
        contactToast: false,
        // Contact Form
        contactForm: {
          name: "",
          email: "",
          message: "",
          subject: "",
          sentFrom: "Project Template"
        },
        // Rules for the contact Form
        rules:{
          requiredField: value => !!value || 'This field is required',
          requiredName: value => !!value || 'Your name is required',
          requiredEmail: value => !!value || 'A propper email adress is required',
          emailRequirement: value => /.+@.+\..+/.test(value) || 'A proper email address is required',
        },
        contactToast: false,
        isContactFormValid: true,
        // In Page Pages Cards
        pageCards:[
          { name: "E-Learning", color: "", link: "trainingmodules", description: "Lorem ipsum dolores sit amet. Nihil repellat architecto asperiores sequi facere" },
          { name: "Resources", color: "", link: "/resources",  description: "Lorem ipsum dolores sit amet. Nihil repellat architecto asperiores sequi facere" },
          { name: "Project", color: "", link: "",  description: "Lorem ipsum dolores sit amet. Nihil repellat architecto asperiores sequi facere" }
        ],
        // Dummy data below - Replace when db are implemented
        fakeNewsCards:[
          { 
            title: "Google Analytics Banned", 
            article: "Google Analytics are now officially banned in Austria.  Eu Next?", 
            external_link: "https://www.wired.com/story/google-analytics-europe-austria-privacy-shield/", 
            image: "https://miro.medium.com/max/1400/1*AXFPIoNhxOXepRDvqOisUg.png" 
          },
          { 
            title: "Smite officially the best game!", 
            article: "10/10 best game! Play it now!", 
            external_link: "https://www.smitegame.com/gods/", 
            image: "https://i.ytimg.com/vi/xAPsmI_zDZs/maxresdefault.jpg" 
          },
          { 
            title: "Lorem Ipsum", 
            article: "Lorem Ipsum dolores dahls ",
            external_link: "https://www.lipsum.com/", 
            image: "https://www.multimediaxp.com/images/article_190508124638.1557333998.jpg" 
          },
        ],
        fakeRSSfeed: [
          { 
            title: "Smite best game", 
            image: "https://i.ytimg.com/vi/xAPsmI_zDZs/maxresdefault.jpg", 
            content: "Winner of the golden controller", 
          },
          { 
            title: "Worlds best newspaper", 
            image: "https://akamai.vgc.no/v2/images/a7a69de2-d715-44b4-8344-b96b404806a0?fit=crop&format=auto&h=2665&w=1895&s=ea2af8dc0642cd84ceefb36f7d05649706c3084d", 
            content: "Awarded as the best newspaper in the world.", 
          },
          { 
            title: "Lorem Ipsum", 
            image: "https://www.multimediaxp.com/images/article_190508124638.1557333998.jpg", 
            content: "Lorm Ipsum Dolores", 
          },
        ],
      }
    },
    methods: {
      // Form: Clear all data
      clearForm(){
        this.$refs.form.reset()
      },
      // Form: Send Data
      postContactForm(){
        const ContactForm = {
          name: this.contactForm.name,
          email: this.contactForm.email,
          subject: this.contactForm.subject,
          message: this.contactForm.message,
          sentFrom: this.contactForm.sentFrom
        };
        console.log("Sending Contact Form", ContactForm);
        this.messageSent();
        this.clearForm();
      },
      // Form: Notification that message have been sent, through Toast.
      messageSent() {
        this.contactToast = true
      },
    }
  }
</script>

<style scoped>
/* Intro Classes for box and text at the top */
.introImage {
  height:650px;
  background-color:rgb(213, 211, 211);
}
.introTitle {
  font-size:34px;
  color: rgb(48, 47, 47);
  margin-left: 15%; 
  margin-top:5%;
  font-weight: bold;
}
.introDescription {
  font-size:20px;
  color: rgb(48, 47, 47);
  margin-left: 15%;
  font-weight: bold;
}
/* Styling the 3 cards close to the intro top */
.pageCardPositioning {
  position:relative;
  top: -5em;
  right: 50;
  padding: 10px;
}
.pageCardDividerBlue {
  background-color:#205072; 
  padding: 2px
}
.pageCardDividerGreen {
  background-color:#329D9C; 
  padding: 2px;
}
.pageCardDividerRed {
  background-color:#D83636; 
  padding: 2px;
}

/* NEWS */
.article-title {
  font-size: 20px;
  font-weight: bold;
}
.article-length {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2; 
  -webkit-box-orient: vertical;
}
.article-button{
  font-size: 18px;
  font-weight: bold;
}
.article-dividers {
  margin-left:1%; 
  margin-bottom:2%;
}

.buttonBorder {
  border: 3px solid #205072;
  font-family: 'Lato', sans-serif;
}

.buttonBorder:after {
  border: 3px solid #d6d2d24d;
  content: '';
  position: absolute;
  top: -12px;
  right: -12px;
  bottom: -12px;
  left: -12px;
  border-radius: 4em;
}

</style>