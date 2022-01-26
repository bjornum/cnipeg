<template>
  <v-card>

    <!-- Phone navbar with sidebar -->
    <v-app-bar app  color="light-blue lighten-5">
      <ContactForm ref="OpenContactForm"></ContactForm>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Digi Ped z Gen</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="$refs.contactForm.openContact()">
        <v-icon>mdi-email-outline</v-icon>
      </v-btn>
    

    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-row>
        <v-col>asdsdadqwdqwd</v-col>
      </v-row>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    </v-app-bar>
  </v-card>
</template>

<script>
import ContactForm from "@/components/Global/ContactUs.vue"
export default {
  components:{
    ContactForm
  },
  data(){
    return {
      drawer: false,
      group: null,
    }
  },
  watch: {
    group () {
      this.drawer = false
    },
  },
}
</script>