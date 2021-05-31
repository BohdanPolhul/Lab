<template>
    <div>
        <div >
             <h2>Login</h2>
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text"  name="username" class="form-control" v-model="nameAdmin" />
                <div class="invalid-feedback">Username is required</div>
            </div>
            <div class="form-group">
                <label htmlFor="password">Password</label>
                <input type="password"  name="password" class="form-control" v-model="password"/>
                <div class="invalid-feedback">Password is required</div>
            </div>
            <div class="form-group">
                <button class="btn btn-primary" >
                    <span> <router-link to="/">exit</router-link></span>
                </button>
                <button class="btn btn-primary" >
                    <span class="spinner-border spinner-border-sm" ></span>
                    <span v-on:click="onSubmit" >Admin</span>
                </button>
            </div>
            <div  class="alert alert-danger"></div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return{
            nameAdmin:'',
            password:'',
            link:'/login',
            showAdmin:true,
        }
    },
    methods:{
        onSubmit(){
            if(this.nameAdmin.trim()){
                if(this.password.trim()){
                    const admin = {
                    name:this.nameAdmin,
                    password:this.password
                    }
                    console.log(admin)
                    axios.post(`http://localhost:4001/app/adminAuth`,admin)
                    .then(response=>{ 
                        if(response.data.message){
                            alert(response.data.message)
                        }else{
                            localStorage.setItem('isAuth', false);
                            this.$emit('add-todo',admin)
                            this.showAdmin=false
                            this.$router.push("/");
                        }
                    })
                    
                }else{
                    alert("Enter password")
                }
                    
            }else{
                alert("Enter nameAdmin")
            }
        }
    }
}
</script>