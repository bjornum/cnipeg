<template>
  <div class="">
    <!-- Language Selector -->
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn class="transparent" rounded outlined v-on="on" v-model="$i18n.locale">
          <!-- Statement, to Adjust the flag image -->
          <v-img v-if="$i18n.locale == 'en'" src="../../assets/flags/england.png" alt="English Flag" max-height="25" max-width="30" contain></v-img>
          <v-img v-if="$i18n.locale == 'nb'" src="../../assets/flags/norway.png" alt="English Flag" max-height="19" max-width="30" contain></v-img>
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
                    <v-img v-if="item.text == 'nb'" :src="item.flag" alt="Norwegian Flag" max-height="19" max-width="30" contain></v-img>
                    <v-img v-if="item.text == 'en'" :src="item.flag" alt="English Flag" max-height="25" max-width="30" contain></v-img>
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
        {text: 'nb', flag: require('@/assets/flags/norway.png')},
        {text: 'en', flag: require('@/assets/flags/england.png')}
      ]
    }
  },
  methods:{

    // Simply add to this one, for each language. * Find a better solution
    setLanguage (item) {
      if (item.text == 'en') {
        this.$i18n.locale = 'en'
        this.$store.commit('setAppLanguage', 'en')
      } else if (item.text == 'nb') {
        this.$i18n.locale = 'nb'
        this.$store.commit('setAppLanguage', 'nb')     
      }
    },
  }
}
</script>
