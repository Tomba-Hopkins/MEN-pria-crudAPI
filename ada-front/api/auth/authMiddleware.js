const { conn } = require('../db/db')



const authMiddleware = async (req, res, next) => {


    const db = await conn()
    const apiKey = req.header('X-API-KEY')

    if(!apiKey) {
        return res.status(401).json({
            message: 'API key is missing Ngawur'
        })
    }


    const dbApiKey = await db.collection('keys').findOne({key: apiKey})
    
    if(!dbApiKey){
        return res.status(403).json({
            message: 'Invalid API KEY KOCAG'
        })
    }


    next()
    
}


module.exports = { authMiddleware }