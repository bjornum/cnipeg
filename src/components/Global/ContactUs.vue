<template>
  <div>
    <!-- FIX -->
    <v-dialog v-model="contactDialog" scrollable persistent max-width="500px" transition="dialog-transition">
      <v-card light>
        <v-card-title>
          <span class="headline">{{ $t('contact.contact us') }}</span>
          <v-spacer />
          <v-btn color="error" icon @click="closeContact">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="isContactFormValid">
            <v-container>
              <v-text-field v-model="contactFormData.name" name="name" label="Name" :rules="[rules.requiredName]" outlined dense required></v-text-field>
              <v-text-field v-model="contactFormData.email" name="email" label="Email" :rules="[rules.requiredEmail, rules.emailRequirement]" outlined dense required></v-text-field>
              <v-text-field v-model="contactFormData.subject" name="subject" label="Subject" :rules="[rules.requiredField]" outlined dense required></v-text-field>
              <v-textarea v-model="contactFormData.message" name="message" label="Message" :rules="[rules.requiredField]" outlined auto-grow counter required></v-textarea>
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
      contactDialog: false,
      contactToast: false,
      isContactFormValid: true,
      // The formObject to send into the database
      contactFormData: {
        name: '',
        email: '',
        message: '',
        subject: '',
        sentFrom: 'project Template'
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

    // Open the Contact Form
    openContactDialog(){
      // Can include parent data if needed
      this.contactDialog = true;
    },

    // Reset and Close Contact Form
    closeContact() {
      this.$refs.form.reset()
      this.contactDialog = false
    },

    // Clear Form data
    clearForm() {
      this.$refs.form.reset()
    },

    // Message sent through Toast
    messageSent() {
      this.contactToast = true
    },

    // Post Function (Toast, Reset and Close dialog)
    postContactForm(){
      const ContactForm = {
        name: this.contactFormData.name,
        email: this.contactFormData.email,
        subject: this.contactFormData.subject,
        message: this.contactFormData.message,
        sentFrom: this.contactFormData.sentFrom
      };
      console.log("Sending Contact Form", ContactForm);
      this.messageSent();
      this.closeContact();
      // Post it to DB
      // this.$axios.post('URL' + IfNeedingGuid, ContactForm).then(()=> {
      //   this.messageSent()
      //   this.closeContact()
      // })
    },
  }
}
</script>
