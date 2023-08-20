'use strict'

const userDetailsController = require('./authr/createUserController')
const otpController = require('./authr/mailerSenderController')


module.exports = app => {
    app.use('/api', userDetailsController);
    app.use('/login', otpController);

}
