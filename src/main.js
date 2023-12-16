import '../src/style.css'
import ClipLoader from "vue-spinner/src/ClipLoader.vue"

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('Spinner', ClipLoader)
app.use(createPinia())
app.use(router)

app.mount('#app')
