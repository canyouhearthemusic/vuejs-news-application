import '../src/style.css'
import ClipLoader from "vue-spinner/src/ClipLoader.vue"

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Layout from "@/shared/Layout.vue";

const app = createApp(App)

app.component('Spinner', ClipLoader)
app.component('Layout', Layout)
app.use(createPinia())
app.use(router)

app.mount('#app')
