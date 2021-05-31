<template>
    <div>
        <li>
            <div className="col-4 ml-auto mr-3 bg-default">
            <img src="https://d11a6trkgmumsb.cloudfront.net/original/3X/d/8/d8b5d0a738295345ebd8934b859fa1fca1c8c6ad.jpeg" alt="" />
            <h6>id:{{blog._id}}</h6>
            </div>
            <div>
                <p class="postdown"> {{blog.message}}</p> 
            </div>
             <div>
                
            </div>
            <div className="col-8 mr-auto ml-3 bg-info">
                <p v-if="isAuth" v-on:click="Delete(blog._id)" className="post-content"> &#10006;</p>  
                <button v-if="isAuth" v-on:click="Edit(blog._id,blog.message)">edit</button>
            </div>
        </li>
    </div>
</template>
<script>
export default {
    props:['blog'],
    data(){
        return {
            isAuth:localStorage.getItem('isAuth'),
        }
    },
    methods:{
        Delete(id){
            this.$emit('remove-blog',id)
        },
        Edit(id,message){
            this.$emit('edit-blog',id,message)
        }
    }
   
}
</script>
<style>
 li{
     border: 1px solid #ccc;
     display: flex;
     justify-content: space-between;
     padding: .5rem 2rem;
     margin-bottom: 1rem;
 }
 .done{
     text-decoration: line-through;
 }
 input{
     margin-right: 1rem;
 }
 img{
     width:20%
 }
 
</style>