import type { App, Component } from 'vue'
import SvgIcon from './SvgIcon/index.vue'
import Pagination from './Pagination/index.vue'
// 全局组件对象
const allGlobalComponent: Record<string, Component> = { SvgIcon, Pagination }
// 全局组件注册插件
export default {
  install(app: App) {
    // 注册项目的全部全局组件
    Object.keys(allGlobalComponent).forEach((key) => {
      app.component(key, allGlobalComponent[key])
    })
  }
}
