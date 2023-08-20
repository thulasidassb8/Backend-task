'use strict';

const express = require('express');
const router = express.Router();
const userDetailsModels = require('../../model/authr/createUser')

router.route('/create')
 .post(async(req, res, next) => {
    try{
        const userCreate = await new userDetailsModels(req.body);
        const result = userCreate.save()
        if(result){
            res.status(200).json({
                status:'1',
                message:'User Created Successfully'
            })
        }else{
            res.status(500).json({
                status:'0',
                message:'User Created Successfully'
            }) 
        }
    }catch(error){
        next(error)
        res.status(500).json({
            status:'0',
            message:'User Created Successfully'
        }) 
    }
 })

 router.route('/verfiyOTP')
 .post(async(req, res, next) => {
    try{
        const result = await  userDetailsModels.findOne({email: req.body.email}).lean();
        if(result){
            if(result.otp === req.body.otp){
                res.status(200).json({
                    status:'1',
                    message:'Verfied Successfully',
                    data: result
                })
            }else{
                res.status(500).json({
                    status:'0',
                    message:'OTP Wrong',
                    data:'null'
                })  
            }
            
        }else{
            res.status(500).json({
                status:'0',
                message:'Processed unSuccessfully',
                data:'null'
            }) 
        }
    }catch(error){
        next(error)
        res.status(500).json({
            status:'0',
            message:'Processed unSuccessfully',
            data:'null'
        }) 
    }
 })

 module.exports = router;