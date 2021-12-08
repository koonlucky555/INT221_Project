import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import NavigatorBar from './components/NavigatorBar.vue'



const app = createApp(App)
app.component('based-navbar' , NavigatorBar)
app.use(router).mount('#app')
