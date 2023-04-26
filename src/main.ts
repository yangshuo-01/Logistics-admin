import { createApp } from 'vue'
import './style.css'
import './style/index.scss'
import './mock/index.ts'
import {default as $http} from './utils/http'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import * as SelfComponent from './components/index'


const app = createApp(App)
app.component('')
for (const [key, component] of Object.entries(Object.assign({},SelfComponent,ElementPlusIconsVue))) {
    app.component(key, component)
  }
// app.provide('global',{
//   $http
// })

app.use(router)
.use(ElementPlus)
.mount('#app')