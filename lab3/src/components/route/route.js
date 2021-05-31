import Vue from 'vue';
import Router from 'vue-router';



Vue.use(Router)
import Admin from '../Admin/Admin.vue'
import Blog from '../Views/Blog.vue'
export default new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            component:Blog
        },
        {
            path:'/login',
            component:Admin
        }
    ]
})

