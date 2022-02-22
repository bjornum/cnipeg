<template>
  <div>
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
        <v-card class="pt-15 pb-3" style="height:500px; background-color:grey;">
           <!-- <v-img src="https://www.ordetbetyr.com/images/ordetbetyr/og/228/tittel.png" alt="Eksempel BakgrunnsBilde" max-height="500px" stretch class="ml-1"></v-img> -->
          <!-- <p class="text-center title pt-15 pb-15">Massiv Title</p> -->
        </v-card>
      </v-col>
      <!-- 3 Cards in center of cards -->
      <v-col cols="2" class="pt-0"></v-col>
      <v-col cols="8" class="pt-0">
        <v-row>
          <v-col cols="12" xl="4" lg="4" md="4" sm="12" xs="12" v-for="(pageCard, pageCardIndex) in pageCards" :key="pageCardIndex">
            <v-card class="pageCardPositioning" :to="pageCard.link">
              <p class="text-center title pt-5">{{pageCard.name}}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <!-- <RssTest></RssTest> -->
        <v-divider></v-divider>
        <v-divider></v-divider>
        <v-divider></v-divider>
      </v-col>
      <v-col cols="1"></v-col>
      <v-col cols="10">
        <v-row>
          <!-- 4 news cards -->
          <v-col cols="12" xl="3" lg="3" md="4" sm="12" xs="12" v-for="(fakeNews, fakeNewsIndex) in fakeNewsCards" :key="fakeNewsIndex">
            <v-card height="100%" @click="$refs.openingNewsDialog.openNewsDialog(fakeNews)">
              <v-row>
                <v-col cols="12" style="min-height:180px;">
                  <v-img v-if="fakeNews.image" :src="fakeNews.image" alt="News Image" max-height="150px" contain class="ml-1"></v-img>
                </v-col>
                <v-col cols="12" style="min-height:150px;">
                  <p class="text-center title">{{fakeNews.title}}</p>
                  <p class="pa-2" style="min-height:100px;">{{fakeNews.article}}</p>
                </v-col>
                <v-col cols="12" style="min-height: 50px;">
                  <v-card-actions class="pb-5">
                    <v-btn block>Åpne Nyhet</v-btn>
                  </v-card-actions>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12">
        <v-row>
          <!-- half screen RSS FEED -->
          <!-- <v-col cols="1"></v-col>
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
          </v-col> -->

          <!-- Other half screen - Contact -->
          <!-- <v-col cols="6">
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
          </v-col> -->

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
          { name: "E-Learning", color: "", link: "trainingmodules" },
          { name: "Resources", color: "", link: "/resources" },
          { name: "Project", color: "", link: "" }
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
          { 
            title: "Worlds best newspaper", 
            article: "Awarded as the best newspaper in the world.", 
            external_link: "https://www.vg.no/", 
            image: "https://akamai.vgc.no/v2/images/a7a69de2-d715-44b4-8344-b96b404806a0?fit=crop&format=auto&h=2665&w=1895&s=ea2af8dc0642cd84ceefb36f7d05649706c3084d" 
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
.pageCardPositioning {
  position:relative;
  top: -5em;
  right: 50;
  padding: 50px;
}
</style>