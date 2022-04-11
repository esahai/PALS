<template>

<v-row>
<v-col cols="4">
<h3> {{ store.status }}</h3>
</v-col>
<v-spacer></v-spacer>
<v-col cols="4">
<v-progress-circular
   :rotate="90"
   :size="50"
   :width="5"
   indeterminate
   v-show="store.inProgress"
   color="red"
 >
 </v-progress-circular>
 </v-col>
</v-row>

<v-divider></v-divider>
 </template>
 <script>
import { store } from '../store.js' 

 export default {
   data() {
     return {
        store
     }
    }
  }
</script>