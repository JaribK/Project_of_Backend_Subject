import { createApp } from 'vue'
import HomePage from './pages/HomePage.vue'
import App from './App.vue'
import router from '../router/index.js'

// // Vuetify
// import 'vuetify/styles'
// import { createVuetify } from 'vuetify'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'
import './style.css'

// const vuetify = createVuetify({
//   components,
//   directives,
// })

createApp(App).use(router).mount('#app')
