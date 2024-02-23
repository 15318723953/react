import './assets/main.css'
import card from './components/expame/card.vue';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'element-plus/dist/index.css'
import "animate.css"
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(ElementPlus)
app.use(createPinia())
app.component('card',card) // 全局组件
app.use(router)

app.mount('#app')
