import '../src/style.css'
import ScaleLoader from "vue-spinner/src/ScaleLoader.vue"

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Layout from "@/shared/Layout.vue";

const app = createApp(App)

app.component('Loading', ScaleLoader)
app.component('Layout', Layout)
app.use(createPinia())
app.use(router)

app.mount('#app')
