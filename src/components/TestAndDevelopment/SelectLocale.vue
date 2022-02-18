<template>
  <div class="pa-2">
    <!-- <v-btn text @click="changeLanguage()">
      <p v-if="$i18n.locale == 'en'">asd</p>
    </v-btn> -->


    <v-select :items="langs" v-model="$i18n.locale" style="max-width:35px;" class="ma-0" append-icon="" :menu-props="{ bottom: true, offsetY: true }" >
      <!-- <template v-slot:append>
        <v-icon> </v-icon>
      </template> -->
      <template v-slot:selection="{ item }">
        <v-img v-if="item == 'en'" src="../../assets/flags/england.png" alt="English Flag" max-height="25" max-width="30" contain></v-img>
        <v-img v-if="item == 'nb'" src="../../assets/flags/norway.png" alt="English Flag" max-height="19" max-width="30" contain></v-img>
      </template>
    </v-select>


    <!-- <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang" v-on:click="$i18n.locale=lang">
        <v-img src="../../assets/flags/england.png"></v-img>
      </option>
    </select> -->


    <!-- <v-dialog v-model="languageDialog">
      <v-card>
        <v-radio-group v-model="$i18n.locale">
          <v-radio
            v-for="(lang, index) in langs"
            :key="index"
            :label="`Radio ${lang}`"
            :value="lang"
          ></v-radio>
        </v-radio-group>
      </v-card>
    </v-dialog> -->


    <!-- <v-menu bottom left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(lang, i) in langs" :key="i" v-model="$i18n.locale">
          <v-list-item-title>{{ lang }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu> -->


    <!-- <v-menu offset-y v-model="$i18n.locale">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Dropdown
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in langs" :key="index" v-model="$i18n.locale">
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu> -->
  </div>
</template>

<script>
export default {
  name: 'SelectLocale',
  data() {
    return { 
      langs: ['en', , 'nb'],
      languageDialog: false,
    }
  },
  methods:{
    changeLanguage(){
      this.languageDialog = true;
    }
  }
}
</script>
