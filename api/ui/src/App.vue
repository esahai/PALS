<template>
  <v-app>
        <AppHeader/>
    <v-main>
     <v-container fluid>
        <DrinkSelection/>
        <CupSelection/>
        <DispenserAction/>
        <DispenserStatus/>
      </v-container>
    </v-main>
        <AppFooter/>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import DrinkSelection from './components/DrinkSelection.vue'
import CupSelection from './components/CupSelection.vue'
import DispenserAction from './components/DispenserAction.vue'
import DispenserStatus from './components/DispenserStatus.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',

  components: {
    AppHeader,
    DrinkSelection,
    CupSelection,
    DispenserAction,
    DispenserStatus,
    AppFooter
  },

  data: () => ({
    //
  }),
}
</script>
