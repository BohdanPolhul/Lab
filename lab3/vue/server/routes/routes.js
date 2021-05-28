const express = require('express')
const router = express.Router()
const bcrypt = require("bcrypt");
const objectId = require("mongodb").ObjectID;
const jwt = require("jsonwebtoken")

const {
    adminRegister,
    adminLogin,
    blog,
    getBlogMessage
} = require("../utils/Auth");

router.post('/register-admin', async (request,response)=>{
    await adminRegister(request,"admin", response);
})
router.post('/admin',async (req,res)=>{
    await adminLogin(req,"admin", res);
})

router.post('/blog-message',async (req,res)=>{
    await blog(req,"blog", res);
})

router.get('/getBlogMessage',async (req,res)=>{
    await getBlogMessage(req,"blog", res);
})
module.exports = router