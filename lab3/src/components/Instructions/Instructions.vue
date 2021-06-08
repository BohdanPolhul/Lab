<template>
    <div class="basic_instr">
        <div v-if="!showInstructions">
            <h3 class="instr">Інструкція користування</h3>
            <button class="btn" v-on:click="ShowInstr">+</button>
        </div>
        <div v-else>
            <button class="btn" v-on:click="CloseInstr">-</button>
            <h3 class="instr">Програмна реалізація Блогу</h3>
            <h4>В програмну частину входить, редагування, видаленння і додавання повідомлення. Серверна частина запусує в себе такі дані: час створення повідомлення, а також і саме повідолмення. ID генерується автоматично і без повторень</h4>
        </div>
    </div>
</template>
<script>
export default {
  data(){
        return {
            showInstructions:false
        }
  },
  
  components: {
   
  },
  methods:{
    ShowInstr(){
        this.showInstructions=true
    },
    CloseInstr(){
        this.showInstructions=false
    }
  }
}
</script>
<style>
    .btn{
        width: 40px;
        height: 40px;
        float: right;
        border-radius: 100%;
    }
    .instr{
        text-align: center;
    }
    .btn:hover{
        background-color: rgb(82, 77, 77);
        cursor: pointer;
    }
</style>