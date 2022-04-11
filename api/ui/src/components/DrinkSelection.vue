<template>
<v-row>
<v-col>
<h1 align="center">Select 1-3 drinks</h1
></v-col>
</v-row>
<v-row>
  <v-col
    v-for="val, drink in drinks"
    :key="drink"  
    class="d-sm-flex child-flex"
    sm="4"
  >
    <v-img
      :src="image(drink)"
class="drink-not-selected"
      :id="drink"
      
      @click="toggleSelection"
   />
  
    
  </v-col>
  <v-divider></v-divider>
</v-row>

</template>

<script>

import { store } from '../store.js' 
export default {
  data()  {
    return {
      drinks : { 
        "Fanta": { selected : false },
        "Sprite": { selected : false },
        "Coca-Cola": {  selected : false}
      },
      store
  }
  },

  methods: {
    image(type) {
      return "/images/" + type + ".png"
    },
    getDrinkTypes() {
      this.axios
      .get("/api/menu")
      .then(response => function() {
        this.drinks = {}
          for (let drink in response.data) {
            this.drinks[drink] = { selected: false}
          }
      })
    },
    toggleSelection(event) {
      console.log(event.currentTarget)
      let drink = event.currentTarget.id
      let img = event.target
      this.drinks[drink].selected = !this.drinks[drink].selected
      if (this.drinks[drink].selected) {
          img.setAttribute("class", "drink-selected")
          this.store.addDrink(drink)
    } else {
          img.setAttribute("class", "drink-not-selected")
          this.store.removeDrink(drink)
    }
      console.log(this.drinks[drink].selected) 
    },
    beforeMount() {
      this.getDrinkTypes()
    }
  }
}
</script>

<style>
.drink-selected {
  color: transparent;
  border: 10px solid #000;
      width: "auto";
      height: "auto";
}
.drink-not-selected {
  color: transparent;
 border: 10px solid #FFF;
      width: "auto";
      height: "auto";
}
</style>

