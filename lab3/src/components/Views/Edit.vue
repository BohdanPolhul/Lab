<template>
    <div :class='true?"modal active":"modal"'>
        <div :class='active?"modal_content active":"modal_content"'>
            <textarea v-on:change="ChangeMessage(message)" v-model="message" />
            <!-- <p>{{message}}</p> -->
            <button  v-on:click="editBlog(message)">Save</button>
        </div>
    </div>
</template>
<script>
export default {
    props:['message'],
    methods:{
        editBlog(message){
            this.$emit('edit-close',false,message)
            // this.$emit('save-change')
        },
        ChangeMessage(){
            // alert(mess)
        }
    }
}
</script>
<style>
.modal{
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,0.4);
    position: fixed;
    top:0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    transition: 0.5s;
}
.modal.active{
    opacity: 1;
    pointer-events: all;
}
.modal_content{
    padding: 20px;
    border-radius: 12px;
    background-color: white;
    height: 600px;
    width: 600px;
    transform: scale(0.5);
    transition: 0.4s all;
}
.modal_content.active{
    transform: scale(1);
}
.button{
    pointer-events: none;
}
</style>