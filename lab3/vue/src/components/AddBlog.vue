<template>
    <form @submit.prevent="onSubmit">
        <input type="text" v-model="message">
        <button type="submit">Create</button>
    </form>
</template>
<script>
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
                 fetch("http://localhost:5000/app/blog-message",{
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
                this.$emit('add-todo',newTodo)
                this.message = ''
                
            }
        }
    }
}
</script>