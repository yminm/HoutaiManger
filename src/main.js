import Vue from 'vue'
import App from './component/App.vue'
import vueRouter from './router/index.js'  //如果是index.js 可以以省略不写

new Vue({
    el:'#app',
    // 使用箭头函数
    render: createElement => createElement(App),
    router:vueRouter
    
})