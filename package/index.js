/*
 * @Author: Mukti
 * @Date: 2021-12-21 13:44:03
 * @LastEditTime: 2021-12-21 14:05:57
 * @LastEditors: Mukti
 */
// 导入button组件
import Home from '../src/views/Home.vue';
 
// 组件列表
const components = [
  Home,
]
 
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，那么所有的组件都会被注册
export const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}
 
// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  Home
}

export default {
  install,
  Home
}