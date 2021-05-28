<template>
    <div>
        <ul>
            <BlogItem 
            
            v-for="todo in todos"
            :key="todo._id"
            v-bind:todo="todo"
            v-on:remove-todo="removeTodo"
            
            />
            
        </ul>
    </div>
</template>
<script>
import BlogItem from './BlogItem';
export default {
    props:['todos'],
    components:{
        BlogItem
    },
    methods:{
        removeTodo(_id){
            console.log(_id)
            this.$emit('remove-todo',_id)
            fetch("http://localhost:5000/message/"+_id,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}})
        }
    }
}
</script>
