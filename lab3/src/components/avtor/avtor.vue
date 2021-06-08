<template>
    <div >
        <h1 class="h1">Лабораторна робота №3</h1>
        <h3 class="h1">З дисципліни "Крос-Платформне Програмування"</h3>
        <div class="avtor">
            <div class="img">
                <img src="../images/avtor.jpg" alt="">
            </div>
            <div>
                <h3>виконав студент групи 1КН-19б: Польгуль Богдан</h3>
                <h3>Перевірив: Ольшевський Єгор Леонідович</h3>
            </div>
        </div>
    </div>
</template>
<style>
    .avtor{
        display: grid;
        grid-template-columns: 50% 50%;/*1fr для адантивної струтури зменщення вікна*/
        grid-template-rows: 200px;
        grid-gap:18px/*відступи*/
    }
    .img{
        width: 100%;
        height: 100%;
    }
    .h1{
        text-align: center;
    }
</style>