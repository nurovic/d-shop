import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vue-toast-notification/dist/theme-sugar.css';

const app = createApp(App)
app.use(router).use(store).mount('#app')
