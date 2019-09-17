// main.js为入口文件
import Vue from 'vue' // <script src="./vue.js"></script>
import App from './App.vue' // 引入根组件   let app = new Vue()
import router from './router' // router 路由
import store from './store/index' // vuex中的仓库
// import axios from "./http"

Vue.use(ElementUI);

//创建一个Vue的实例
new Vue({
    router,
    store,
    render: h => h(App) //render是渲染 render是函数  钩子函数
}).$mount('#app')