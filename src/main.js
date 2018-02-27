import Vue from 'vue'
import App from './component/App.vue'

new Vue({
    el:'#app',
    // 使用箭头函数
    render: createElement => createElement(App)
    
})