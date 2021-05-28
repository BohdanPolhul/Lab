<template>
    <div>
        <li>
            <div className="col-4 ml-auto mr-3 bg-default">
            <img src="https://d11a6trkgmumsb.cloudfront.net/original/3X/d/8/d8b5d0a738295345ebd8934b859fa1fca1c8c6ad.jpeg" alt="" />
            <h6>id:{{todo._id}}</h6>
            </div>
            <div className="col-8 mr-auto ml-3 bg-info">
            <p className="post-content"> {{todo.message}}</p>  
            </div>
        </li>
    </div>
</template>
<script>
export default {
    props:{
        todo:{
            type:Object,
            required:true
        }
    },
   
}
</script>
<style scoped>
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
     width:50%
 }
</style>