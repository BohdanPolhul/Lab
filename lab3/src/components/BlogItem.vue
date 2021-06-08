<template>
    <div>
        
        <li>
            <div className="col-4 ml-auto mr-3 bg-default">
            <img src="https://d11a6trkgmumsb.cloudfront.net/original/3X/d/8/d8b5d0a738295345ebd8934b859fa1fca1c8c6ad.jpeg" alt="" />
            <h5>id:{{blog._id}}</h5>
            <h6>час створення:{{blog.date}}</h6>
            </div>
            <div>
                <p class="postdown"> {{blog.message}}</p> 
            </div>
             <div>
                
            </div> 
        </li>
         <div class="flex_button">
            <div ><button class="butt2" v-on:click="Edit(blog._id,blog.message)" >edit</button></div>
            <div ><button class="butt"  v-on:click="Delete(blog._id)" > &#10006;</button> </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['blog'],
    data(){
        return {
            isAuth:localStorage.getItem('isAuth'),
            number:Number(0)
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
.butt{
    width:100%;
    height:50px;
    background-color: green;
}
.butt2{
    width:100%;
    height:50px;
    background-color: red;
}
 li{
     border: 1px solid #ccc;
     display: flex;
     justify-content: space-between;
     padding: .5rem 2rem;
     margin-top: 4rem;
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
.button_delete{
    width:100%;
}
.button_edit{
    width:100%;
    color:red
}
.flex_button{
    display: grid;
    grid-template-columns: 50% 50%;
}
</style>