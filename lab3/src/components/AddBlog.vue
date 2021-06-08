<template>
    <div >
        <input class="inp" type="text" v-model="message">
        <button class="btn_add" v-on:click="onSubmit" type="submit">Create</button>
    </div>
</template>
<script>
import URL from './URL/URL'
export default {
    data(){
        return{
            message:''
        }
    },
    methods:{
        onSubmit(){
            if(this.message.trim()){
                console.log(this.title)
                const newTodo = {
                    _id:Date.now(),
                    message:this.message,
                }
                console.log(newTodo)
                 fetch(URL+"postBlog",{
                    method:'POST',
                    headers:{
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body:JSON.stringify(newTodo)
                    })
                    .then(res=>{
                            res.json()
                            // localStorage.setItem(newTodo._id,this.message)
                        }
                    )
                this.$emit('add-blog',newTodo)
                this.message = ''
                
            }
        }
    }
}
</script>
<style>
.inp{
    width:70%;
    height:50px;
}
.btn_add{
    width:20%;
    height:50px;
}
</style>