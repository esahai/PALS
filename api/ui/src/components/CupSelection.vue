<template>
<v-row>
<v-col>
<h1 align="center">Select one size</h1>
</v-col>
</v-row>
<v-row>
  <v-col
    v-for="cup in cups"
    :key="'col'+ cup.size"
    class="d-sm-flex child-flex"
    sm="4"
  >
    <v-img
      :src="image(cup.size)"
      width="100%" height="375"
      :id="cup.size"
      class="not-selected"
      @click="selectCup"
      />
  </v-col>
  <v-divider inset></v-divider>
</v-row>

</template>
<script>
import { store } from '../store.js' 
export default {
  data()  {
    return {
      cups : [ 
      { size :"small"      },
       { size : "medium" },
      {  size:"large"     }
     ],
     selectedCup : null,
     selectedImage : null,
     store
  }
  },

  methods: {
    image(size) {
      return "/images/" + size + ".jpeg"
    },
    selectCup(event) {
      console.log(event.currentTarget)
      if (this.selectedImage !== null)
          this.selectedImage.setAttribute("class", "not-selected")
      this.selectedImage = event.target
      this.selectedImage.setAttribute("class", "selected")
    this.store.setSize(event.currentTarget.id)
    },
    getCupSizes() {
      this.axios
      .get("/api/glass/sizes")
      .then(response => function() {
        console.log(response.data)
         let i = 0
          for (let size in response.data) {
            this.cups[i].size = size
            i++
          }
      })
    },
    beforeMount() {
      this.getCupSizes()
    }
  }
}
</script>
<style>
.selected {
  border: 5px solid #F00;
}
.not-selected {
 border: 5px solid #FFF; 
}
</style>

