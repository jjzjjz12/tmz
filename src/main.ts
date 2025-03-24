import { createApp } from 'vue'
import './style.less'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import { createPinia } from 'pinia'
import './mock'
import '@/router/guard'

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)

// 对图标进行注册
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(ElementPlus)
// 把router插件加载到vue应用中
app.use(router)
// 挂载id为app的元素下
app.mount('#app')
