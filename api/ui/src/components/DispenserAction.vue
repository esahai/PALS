<template>
<v-container align="right">
<v-btn @click="submitOrder" color="red"  size="large" block>Dispense</v-btn>
</v-container>

</template>
<script>


import { store } from '../store.js' 
export default {
  data()  {
    return {
      store
    }
  },

  methods: {

    submitOrder() {
        console.log(this.store.order)
        this.store.setStatus("Your drink is being prepapred ...")
        this.store.setInProgress(true); 
        this.axios
            .post("/api/dispenser/dispense", 
                this.store.order
            )
            .then(response => {this.store.setStatus(response.data); this.store.setInProgress(false); })
            .catch(error => { this.store.setStatus(error.data); this.store.setInProgress(false); } )
    }
  }
}
</script>