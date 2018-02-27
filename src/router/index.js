// 路由配置
import Vue from 'vue'
import VueRouter from 'vue-router'  //这是基于vue的路由插件

import Login from '../component/login/Login.vue'
import Register from '../component/register/Register.vue'
// 调用use方法
Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {name: 'login',path: '/login',component:Login},
        { name: 'register', path: '/register', component: Register}
    ]
})
