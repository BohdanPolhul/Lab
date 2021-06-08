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
/**
 * @swagger
 * paths:
 *  /getBlog:
 *   get:
 *     description: get all message blog
 *     responses:
 *       200:
 *         description: Success
 */
 /** 
 * @swagger
 * /postBlog/:
 *   post:
 *     description: new message
 *     parameters:
 *      - in: body
 *        name: body
 *        description: post
 *        required: true
 *     responses:
 *       201:
 *         description: 
 */
/** 
 * @swagger
 * /UpDateBlog/{_id}:
 *   put:
 *     description: UpDate message
 *     parameters:
 *      - name: _id
 *        in: "path"
 *        description: UpDate message
 *        required: true
 *        type: "integer"
 *        format: "int64"
 *      - in: body
 *        name: body
 *        description: update message
 *        required: true
 *        type: string
 *     responses:
 *       201:
 *         description: update
 */
/** 
 * @swagger
 * /deleteBlog/{_id}:
 *   delete:
 *     parameters:
 *      - name: _id
 *        in: "path"
 *        description: delele post blog
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


app.use(routesUrls)
const mongoClient = new MongoClient("mongodb://localhost:27017/tasks", { useUnifiedTopology: true });
mongoClient.connect(function(err, client){
    if(err) return console.log(err);
    db = client;
    app.locals.collection = client.db("my-task-kpp").collection("my-task-kpp");
    app.listen(4001, function(){
        console.log("Сервер ожидает подключения...");
    });
});