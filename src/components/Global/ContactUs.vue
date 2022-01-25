<template>
  <div>

    <!-- FIX -->
    <v-dialog v-model="contactDialog" scrollable persistent max-width="500px" transition="dialog-transition">
      <v-card light>
        <v-card-title>
          <span class="headline">Contact us</span>
          <v-spacer />
          <v-btn color="error" icon @click="closeContact">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid">
            <v-container>
              <v-text-field v-model="form.name" name="name" label="Name" :rules="[rules.requiredName]" outlined dense required></v-text-field>
              <v-text-field v-model="form.email" name="email" label="Email" :rules="[rules.requiredEmail, rules.emailRequirement]" outlined dense required></v-text-field>
              <v-text-field v-model="form.subject" name="subject" label="Subject" :rules="[rules.requiredField]" outlined dense required></v-text-field>
              <v-textarea v-model="form.message" name="message" label="Message" :rules="[rules.requiredField]" outlined auto-grow counter required></v-textarea>
            </v-container>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon @click="clearForm"><v-icon>mdi-close</v-icon></v-btn>
          <v-btn color="success" icon :disabled="!valid" @click="getGuid" ><v-icon>mdi-send</v-icon></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar v-model="contactToast" dark color="success">
      <span>The message has been sent!</span>
      <v-btn class="float-right" x-small dark icon @click="contactToast = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formSubject: '',
      contactDialog: false,
      contactToast: false,
      valid: true,
      // The formObject to send into the database
      form: {
        name: '',
        email: '',
        message: '',
        subject: '',
        sentFrom: 'Qubast'
      },
      // Rules for the contact Form
      rules:{
        requiredField: value => !!value || 'This field is required',
        requiredName: value => !!value || 'Your name is required',
        requiredEmail: value => !!value || 'A propper email adress is required',
        emailRequirement: value => /.+@.+\..+/.test(value) || 'A proper email address is required',
      },
    }
  },

  methods: {

    // Get Guid
    getGuid(){
      const pubRef = this.$fireDbObj().ref('public');
      const guidRef = pubRef.child('follow-up/guid');
      guidRef.once("value").then( (data) => {
        this.postContactForm(data.val())
      }) 
    },

    // Send Contact Form to CRM/contactform
    postContactForm(tenantGUID){
      const ContactForm = {
        name: this.form.name,
        email: this.form.email,
        subject: this.form.subject,
        message: this.form.message,
        sentFrom: this.form.sentFrom
      }
      // Send it away
      this.$axios.post('/crm/contactform/' + tenantGUID, ContactForm).then(()=> {
        this.messageSent()
        this.closeContact()
      })
    },

    // Open the contact form
    openContact(formSubject) {
      this.form.subject = formSubject
      this.contactDialog = true
    },

    // Toasty - look into
    messageSent() {
      this.contactToast = true
    },

    // Close and clean the form submit/close
    closeContact() {
      this.$refs.form.reset()
      this.contactDialog = false
    },

    // Clearing form fields
    clearForm() {
      this.$refs.form.reset()
    },
  },
}
</script>
