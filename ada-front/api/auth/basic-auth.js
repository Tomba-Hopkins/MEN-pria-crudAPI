const auth = require('basic-auth')

const { conn } = require('../db/db')


const basicAuth = async (req, res, next) => {

    const user = auth(req)

    if (!user){
        res.set('WWW-Authenticate', 'Basic realm="gapaham"')
        return res.status(401).json({
            message: 'Masukin lah username passwordnya emang loe siapa hah'
        })
    }


    const db = await conn()

    const dbDariUser = db.collection('user')

    const dbUser = await dbDariUser.findOne({
        username: user.name
    })

    if(!dbUser || dbUser.password !== user.pass){
        res.set('WWW-Authenticate', 'Basic realm="kecoag"')
        return res.status(401).json({
            message: 'Kecoag malah ngawur jadi orang'
        })
    }
  
    next()

}



module.exports = { basicAuth }