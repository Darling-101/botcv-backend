const express = require('express');
const Router = express.Router();
const UserSchema = require('../model/user');

Router.post('/login', async (req, res)=>{
  const data = req.body;

  try{
    const newUser = new UserSchema(data)
    await newUser.save();

    return res.status(200).json({success: true, message: 'Tạo tài khoản thành công'})
  }catch(err){
    console.log(err);
    return res.status(400).json({success: false, message: 'Tạo tài khoản không thành công!'})
  }
})

module.exports = Router;