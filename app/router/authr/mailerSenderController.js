'use strict';

const express = require('express');
const router = express.Router();
const userDetailsModels = require('../../model/authr/createUser')


const nodemailer = require('nodemailer');

const otpGenerator = require('otp-generator')




router.route('/')
    .post(async (req, res, next) => {
        try {
            const result = await userDetailsModels.findOne({ email: req.body.email }).lean();
            if (result) {
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'thulasidass04@gmail.com',
                        pass: 'xqpzlzjgtspfzmda'
                    }
                });
                // xqpzlzjgtspfzmda
                // const otp = otpGenerator(6,{ upperCaseAlphabets: false, specialChars: false });
                const otp = Math.floor(Math.random() * 10000);
                console.log(otp, 'otp')
                const mailOptions = {
                    from: 'thulasidassb8@gmail.com',
                    to: req.body.email,
                    subject: 'Your OTP Code',
                    text: `Your OTP code is: ${otp}`
                };
                transporter.sendMail(mailOptions, async(error, info) => {
                    if (error) {
                        console.log(error);
                    } else {
                        result.otp = otp
                        const resultUpdate = await userDetailsModels.findOneAndUpdate({ email: req.body.email }, result, {new:true} ).exec();

                        res.status(200).json({
                            status: '1',
                            message: 'Processed Successfully'
                        })
                        // console.log('OTP email sent:', info.response);
                    }
                });

            } else {
                res.status(500).json({
                    status: '0',
                    message: 'Processed unSuccessfully',
                    data: 'null'
                })
            }
        } catch (error) {
            next(error)
            res.status(500).json({
                status: '0',
                message: 'Processed unSuccessfully',
                data: 'null'
            })
        }
    })


 module.exports = router;


