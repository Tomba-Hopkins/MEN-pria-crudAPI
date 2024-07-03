const express = require('express')
const cors = require('cors')
const { authMiddleware } = require('./api/auth/authMiddleware')
const { apiLimiter } = require('./api/auth/api-limiter')
const { basicAuth } = require('./api/auth/basic-auth')



const app = express()
const port = 5000

app.use(cors())


const run = async() => {

    try{
        // app.use(basicAuth)
        // app.use(authMiddleware)
        // app.use(apiLimiter)

        app.use('/api', require('./api/route')) // pakai postman di /api/items

        app.listen(port, () => {
            console.log(`Server started on http://localhost:${port}`)
         })
    } catch(err) {
        console.log('Error: ', err)
    }
}


run()