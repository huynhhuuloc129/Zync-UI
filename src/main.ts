import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login'
import './style.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(vue3GoogleLogin, {
  clientId: '783668337647-nvh99mdialhi6o5st33rtjpqqblobddu.apps.googleusercontent.com',
})
app.use(createPinia())
app.use(router)

app.mount('#app')
