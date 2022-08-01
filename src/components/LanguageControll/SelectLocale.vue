<template>
  <div class="">
    <!-- Language Selector -->
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn class="transparent" rounded outlined v-on="on" v-model="$i18n.locale">
          <!-- Statement, to Adjust the flag image -->
          <v-img v-if="$i18n.locale == 'en'" src="../../assets/flags/england.png" alt="English Flag" max-height="25" max-width="30" contain></v-img>
          <v-img v-if="$i18n.locale == 'nb'" src="../../assets/flags/norway.png" alt="Norwegian Flag" max-height="19" max-width="30" contain></v-img>
          <v-img v-if="$i18n.locale == 'de'" src="../../assets/flags/de.png" alt="German Flag" max-height="19" max-width="30" contain></v-img>
          <v-img v-if="$i18n.locale == 'es'" src="../../assets/flags/spain.png" alt="Spanish Flag" max-height="19" max-width="30" contain></v-img>
          <v-img v-if="$i18n.locale == 'el'" src="../../assets/flags/greece.png" alt="Greek Flag" max-height="19" max-width="30" contain></v-img>
          <v-img v-if="$i18n.locale == 'pl'" src="../../assets/flags/polen.png" alt="Polish Flag" max-height="19" max-width="30" contain></v-img>
           {{$i18n.locale}}
          <v-icon class="pl-3">mdi-menu-down</v-icon> 
        </v-btn>
      </template>
      <!-- Displaying the list of flags one can pick from -->
      <v-list>
        <v-list-item-group>
          <v-list-item v-for="(item, index) in items" :key="index" @click="setLanguage(item)">
            <v-list-item-content class="text-center">
              <v-list-item-title v-model="$i18n.locale">
                <v-row>
                  <v-col cols="5">
                    <v-img v-if="item.text == 'en'" :src="item.flag" alt="English Flag" max-height="25" max-width="30" contain></v-img>
                    <v-img v-if="item.text == 'nb'" :src="item.flag" alt="Norwegian Flag" max-height="19" max-width="30" contain></v-img>
                    <v-img v-if="item.text == 'de'" :src="item.flag" alt="German Flag" max-height="35" max-width="40" contain></v-img>
                    <v-img v-if="item.text == 'es'" :src="item.flag" alt="Spanish Flag" max-height="35" max-width="40" contain></v-img>
                    <v-img v-if="item.text == 'el'" :src="item.flag" alt="Greek Flag" max-height="35" max-width="40" contain></v-img>
                    <v-img v-if="item.text == 'pl'" :src="item.flag" alt="Polish Flag" max-height="20" max-width="25" contain></v-img>
                  </v-col>
                  <v-col cols="2">
                    {{item.text}} 
                  </v-col>
                </v-row>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: 'SelectLocale',
  data() {
    return { 
      // Add additional languages here
      items: [
        {text: 'en', flag: require('@/assets/flags/england.png')},
        {text: 'nb', flag: require('@/assets/flags/norway.png')},
        {text: 'de', flag: require('@/assets/flags/de.png')},
        {text: 'es', flag: require('@/assets/flags/spain.png')},
        {text: 'el', flag: require('@/assets/flags/greece.png')},
        {text: 'pl', flag: require('@/assets/flags/polen.png')},
      ]
    }
  },
  methods:{

    // Simply add to this one, for each language. * Find a better solution
    setLanguage (item) {
      if (item.text == 'en') {
        this.$i18n.locale = 'en'
        this.$store.commit('setAppLanguage', 'en')
        location.reload();   
      } else if (item.text == 'nb') {
        this.$i18n.locale = 'nb'
        this.$store.commit('setAppLanguage', 'nb')
        location.reload();      
      } else if (item.text == 'de') {
        this.$i18n.locale = 'de'
        this.$store.commit('setAppLanguage', 'de')
        location.reload();      
      } else if (item.text == 'es') {
        this.$i18n.locale = 'es'
        this.$store.commit('setAppLanguage', 'es')
        location.reload();    
      } else if (item.text == 'el') {
        this.$i18n.locale = 'el'
        this.$store.commit('setAppLanguage', 'el')
        location.reload();   
      } else if (item.text == 'pl') {
        this.$i18n.locale = 'pl'
        this.$store.commit('setAppLanguage', 'pl')
        location.reload();   
      }
    },
  }
}
</script>
