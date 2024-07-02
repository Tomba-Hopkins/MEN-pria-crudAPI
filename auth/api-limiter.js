// npm i express-rate-limit basic-auth


const rateLimiter = require('express-rate-limit')


const apiLimiter = rateLimiter({
    windowMs: 1 * 60 * 1000,
    max: 5,
    message: 'Jangan rakus, kebanyakan request nanti lagi y 1 menitan'
})


module.exports = { apiLimiter }