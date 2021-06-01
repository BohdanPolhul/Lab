const express = require('express')
const router = express.Router()
const bcrypt = require("bcrypt");
const config = require("config")
const objectId = require("mongodb").ObjectID;
const jwt = require("jsonwebtoken")

const {adminRegister,
        adminAuth,
        getAdminId,
        getAdmin,
        postBlog,
        getBlog,
        deleteBlog,
        UpDateBlog
    } = require('../utils/data');
router.post('/adminRegistration', async(request,response)=>{
    await adminRegister(request,"admin", response);
})
router.post('/adminAuth', async function(request,response){
    await adminAuth(request,"admin",response);
})
router.get('/getAdmin/:id', async function(req,res){
    await getAdminId(req,"admin",res);
})
router.get('/getAdmin', async function(req,res){
    await getAdmin(req,"admin",res);
})
router.post('/postBlog', async function(request,response){
    await postBlog(request,"blog",response);
})
router.get('/getBlog', async function(req,res){
    await getBlog(req,"blog",res);
})
router.delete('/deleteBlog/:id', async function(req,res){
    await deleteBlog(req,"blog",res);
})
router.put('/UpDateBlog/:id', async function(req,res){
    await UpDateBlog(req,"blog",res);
})

module.exports = router
/**
 * @swagger
 * /getBlog:
 *   get:
 *     description: Get all books
 *     responses:
 *       200:
 *         description: Success
 * 
 */
/**
 * @swagger
 * /getAdminId:
 *   get:
 *     description: Get all books
 *     responses:
 *       200:
 *         description: Success
 * 
 */
/**
 * @swagger
 * /adminAuth:
 *   post:
 *     description: Get all books
 *     responses:
 *       200:
 *         description: Success
 * 
 */
/**
 * @swagger
 * /getBlog:
 *   get:
 *     description: Get all books
 *     responses:
 *       200:
 *         description: Success
 * 
 */
/**
 * @swagger
 * /deleteBlog:
 *   delete:
 *     description: Get all books
 *     responses:
 *       200:
 *         description: Success
 * 
 */
/**
 * @swagger
 * /UpDateBlog:
 *   update:
 *     description: Get all books
 *     responses:
 *       200:
 *         description: Success
 * 
 */