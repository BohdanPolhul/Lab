import Vue from 'vue';
import Router from 'vue-router';



Vue.use(Router)

import Todo from '../Views/Blog.vue'
import Admin from '../Admin/Admin.vue'
export default new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            component:Todo
        },
        {
            path:'/login',
            component:Admin
        }
    ]
})

