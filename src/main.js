import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import vueRouter from './router/index.js'  //如果是index.js 可以以省略不写
import App from './component/App.vue'
import 'normalize.css'
import axios from 'axios'  //不是vue插件，导入之后只能在当前模块使用
// 导入默认对象 可以随便起名字 导入有名字的对象 要用花括号包起来
import api,{domain} from './js/api.js'
import './less/index.less'


Vue.use(ElementUI)
// axios.get(domain+api.logout).then(()=> console.log("登出"));
// 为了使用方便 吧axios和api添加扫vue原型 将来可以直接使用
axios.defaults.baseURL=domain;
// 我们调用的接口跨域了 默认情况下借口给我们设置cookie无效
axios.defaults.withCredentials = true;    
Vue.prototype.$http=axios;
Vue.prototype.$api=api;
new Vue({
    el:'#app',
    // 使用箭头函数
    render: createElement => createElement(App),
    router:vueRouter
    
})