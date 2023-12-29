import ElementPlus from 'element-plus'
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createApp } from 'vue'
import App from './App.vue'
import GlobalComponent from './components/index'
// svg
import 'virtual:svg-icons-register'
// 全局样式
import '@/style/index.scss'

console.log(import.meta.env)
const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn
})
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// 全局组件注册
app.use(GlobalComponent)
app.mount('#app')
