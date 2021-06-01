<template>
    <div >
        <input type="text" v-model="message">
        <button v-on:click="onSubmit" type="submit">Create</button>
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
                        }
                    )
                this.$emit('add-blog',newTodo)
                this.message = ''
                
            }
        }
    }
}
</script>