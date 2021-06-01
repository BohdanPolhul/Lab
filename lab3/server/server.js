const express = require('express')
const dotenv = require('dotenv')
const MongoClient = require("mongodb").MongoClient;
let cors = require('cors')
const routesUrls = require('./routes/routes')
const app = express()

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "КПП",
      version: '2021',
    },
  },
  apis: ["server.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
console.log(swaggerDocs)
/** 
 * @swagger
 * /app/getAdminId:
 *   get:
 *     description: get admin data on id
 *     responses:
 *       200:
 *         description: Success
 * 
 */
/** 
 * @swagger
 * /app/adminAuth:
 *   post:
 *     description: Get all books
 *     parameters:
 *      - name: usename
 *        description: usename of the admin
 *        in: formData
 *        required: true
 *        type: string
 *      - name: password
 *        description: password of the admin
 *        in: formData
 *        required: true
 *        type: string
 *     responses:
 *       201:
 *         description: login
 */
/**
 * @swagger
 * /app/getBlog:
 *   get:
 *     description: Get all message
 *     responses:
 *       200:
 *         description: Success
 * 
 */
/** 
 * @swagger
 * /app/postBlog/:
 *   post:
 *     description: Get all blogs
 *     parameters:
 *      - name: message
 *        description: message blog
 *        in: formData
 *        required: true
 *        type: string
 *      - name: _id
 *        description: id blog
 *        in: "path"
 *        type: "integer"
 *        format: "int64"
 *     responses:
 *       201:
 *         description: Created
 */
/** 
 * @swagger
 * /app/UpDate:
 *   update:
 *     description: Get all blogs
 *     parameters:
 *      - name: message
 *        description: update blog
 *        in: formData
 *        required: true
 *        type: string
 *     responses:
 *       201:
 *         description: update
 */
/** 
 * @swagger
 * /app/deleteBlog/{delelePost}:
 *   delete:
 *     parameters:
 *      - name: delelePost
 *        in: "path"
 *        description: delele blog
 *        required: true
 *        type: "integer"
 *        format: "int64"
 *     responses:
 *       "400":
 *         description: "Invalid ID supplied"
 */
dotenv.config()
app.use(express.json())
app.use(cors())



const {adminRegister,
        adminAuth,
        getAdminId,
        getAdmin,
        postBlog,
        getBlog,
        deleteBlog,
        UpDateBlog
    } = require('./utils/data');
app.post('/app/adminRegistration', async(request,response)=>{
await adminRegister(request,"admin", response);
})
app.post('/app/adminAuth', async function(request,response){
await adminAuth(request,"admin",response);
})
app.get('/app/getAdmin/:id', async function(req,res){
await getAdminId(req,"admin",res);
})
app.get('/app/getAdmin', async function(req,res){
await getAdmin(req,"admin",res);
})
app.post('/app/postBlog', async function(request,response){
await postBlog(request,"blog",response);
})
app.get('/app/getBlog', async function(req,res){
await getBlog(req,"blog",res);
})
app.delete('/app/deleteBlog/:id', async function(req,res){
await deleteBlog(req,"blog",res);
})
app.put('/app/UpDateBlog/:id', async function(req,res){
await UpDateBlog(req,"blog",res);
})



const mongoClient = new MongoClient("mongodb://localhost:27017/tasks", { useUnifiedTopology: true });
mongoClient.connect(function(err, client){
    if(err) return console.log(err);
    db = client;
    app.locals.collection = client.db("my-task-kpp").collection("my-task-kpp");
    app.listen(4001, function(){
        console.log("Сервер ожидает подключения...");
    });
});