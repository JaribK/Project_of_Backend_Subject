import { createApp } from 'vue'
import HomePage from './pages/HomePage.vue'
import App from './App.vue'
import router from '../router/index.js'
import PrimeVue from 'primevue/config'

// Vuetify
// import 'vuetify/styles'
// import { createVuetify } from 'vuetify'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'

// const vuetify = createVuetify()

import './style.css'

createApp(App).use(router).mount('#app')
