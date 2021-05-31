<template>
  <div >
    <!-- <router-link to="/login" class="admin">Admin</router-link> -->
    <button >Admin</button>
    <h1>Blog application</h1>
    <hr>
    <addBlog @add-blog="addBlog"/>
    <Loader v-if="loading"/>
    <BlogList  v-else-if="blogs.length" v-bind:blogs="blogs" @edit-blog="editbBlog"  @remove-blog="removeBlog"/>
    <p v-else>No message...</p>
    <Edit v-if="edit" @edit-close="closeEditBloge" v-bind:message="message"/>
  </div>
</template>
<script>
import BlogList from '../BlogList'
import addBlog from '../AddBlog'
import Loader from '../Loader/Loader'
import Edit from './Edit'
export default {
  data(){
        return {
            blogs:[],
            loading:true,
            edit:false,
            message:'',
            id:''
        }
  },
  computed:{
  },
  mounted(){
      fetch('http://localhost:4001/app/getBlog')
      .then(response => response.json())
      .then(json=>{
          this.blogs=json.blog
          console.log(json)
          this.loading = false
      })
      
  },
  components: {
   BlogList,
   addBlog,
   Loader,
   Edit
  },
  methods:{
    removeBlog(_id){
      this.blogs = this.blogs.filter(t=>t._id !==_id)
    },
    addBlog(blogs){
      this.blogs.push(blogs)
    },
    editbBlog(id,message){
      this.message=message
      this.id=id
      this.edit=true
    },
    closeEditBloge(bool,mes){
       this.blogs = this.blogs.map(t=>{
        if(t._id===this.id){
          fetch("http://localhost:4001/app/UpDateBlog/"+this.id,{
            method:'PUT',
            headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
            },
            body:JSON.stringify({
              message: mes
              })
          })
          return {  
            ...t,
            message: mes
          }  
        }
        return t;
      })
      this.edit=bool
    },
  }
}
</script>

