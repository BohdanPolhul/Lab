<template>
  <div>
    <router-link  v-show="!isAuth"   to="/login" class="admin">Admin</router-link>
    <button v-show="isAuth" @click="LogOut" class="admin">LogOut</button>
    <h1>Blog application</h1>
    <hr>
    <AddBlog @add-todo="addTodo"/>
    <Loader v-if="loading"/>
    <BlogList  v-else-if="todos.length" v-bind:todos="todos" v-bind:admin="admin" @remove-todo="removeTodo"/>
    <p v-else>No message...</p>
  </div>
</template>
<script>
import BlogList from '../BlogList';
import AddBlog from '../AddBlog'
import Loader from '../Loader/Loader'
export default {
  data(){
        return {
            todos:[],
            loading:true,
            isAuth:localStorage.getItem('isAuth')
        }
  },
  computed:{
  },
  mounted(){
      fetch('http://localhost:5000/app/getBlogMessage')
      .then(response => response.json())
      .then(json=>{
          this.todos=json.message
          console.log(json)
          this.loading = false
      })
      
  },
  components: {
   BlogList,
   AddBlog,
   Loader
  },
  methods:{
    removeTodo(_id){
      this.todos = this.todos.filter(t=>t._id !==_id)
    },
    addTodo(todo){
      this.todos.push(todo)
    },
    LogOut(){
      localStorage.setItem('isAuth', true);
      this.isAuth=Boolean(localStorage.getItem('isAuth'))
    }
  }
}
</script>

