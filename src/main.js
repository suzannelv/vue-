import { createApp } from 'vue'
// import App from './01_自定义指令/App.vue'
// import App from './02_内置组件补充/App.vue'
import App from './03_安装插件/App.vue'
// import useDirectives from './01_自定义指令/directives/index'
import directives from './01_自定义指令/directives/index'
import router from './router'



// const app = createApp(App)

// // 安装插件
// // 方式一：传入对象的情况
// app.use({
//   install: function (app) {
//     console.log("install est exécutée", app)
//   }
// })
// // 方式二：传入函数的情况
// app.use(function(app) {
//   console.log("传入函数est effectuée",app)
// })
// // useDirectives(app)


// directives(app)
// app.mount('#app')

createApp(App).use(directives).use(router).mount("#app")
