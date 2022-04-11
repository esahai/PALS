import 'vuetify/styles' // Global CSS has to be imported
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'

const app = createApp(App)
const vuetify = createVuetify() // Replaces new Vuetify(...)

app.use(vuetify)
app.use(VueAxios, axios)

app.mount('#app')
