const express = require('express')
const router = express.Router()
const bcrypt = require("bcrypt");
const objectId = require("mongodb").ObjectID;
const jwt = require("jsonwebtoken");
const passport = require("passport");

const adminRegister = async (request, role, response) => {
  const collection = request.app.locals.collection;
    const hashedPassword =  bcrypt.hashSync(request.body.password, 10);
    const signedUpUser = {
        role:role,
        nameAdmin:request.body.nameAdmin,
        password:hashedPassword,
        date:new Date().toLocaleString('uk-UA')
        
    }
    collection.findOne({nameAdmin:request.body.nameAdmin},function(err, user){   
        if(err) return console.log(err);
        if(user){
            response.send({
                message:"nameAdmin зайнятий"
            })
        }else{
            collection.insertOne(signedUpUser,function (err,result){
                if(err){
                    console.log(err);
                    response.sendStatus(500);
                }
                response.send(signedUpUser)
            })
   
        }
    });
};
const adminLogin =(req, role, res) => {
  const collection = req.app.locals.collection;
  const nameAdmin = req.body.nameAdmin;
  const password = req.body.password;
  console.log(password)
  collection.findOne({nameAdmin:nameAdmin},function(err, user){ 
      if(err) return console.log(err);
      if(!user){
          res.send({
            message:"User not found"
        })
      }
      const isPassValid = bcrypt.compareSync(req.body.password, user.password)
      if (!isPassValid) {
          return res.send({
            message:"Password invalid"
          })   
      }else{
        const token = jwt.sign({id: user._id}, "secret-key-for-my-task", {expiresIn: "1h"}) 
        
          return res.json({
              token,
              user: {
                role:user.role,
                id: user._id,
                nameAdmin: user.nameAdmin,
              }
            })
      }
  });
};
const blog = async (request, role, response) => {
  const collection = request.app.locals.collection;
    const data = {
        role:role,
        message:request.body.message,
        date:new Date().toLocaleString('uk-UA')
        
    }
    collection.insertOne(data,function (err,result){
      if(err){
        console.log(err);
        response.sendStatus(500);
      }
      response.sendStatus(200)
    });
};

const getBlogMessage = async (req, role, res) => {
  const collection = req.app.locals.collection;
  collection.find({role:role},{ _id: 0 }).toArray()
  .then(message => {
      res.send({
        message
      })
  });
}
module.exports = {
  adminRegister,
  adminLogin,
  blog,
  getBlogMessage
};
