const { MongoClient } = require('mongodb')

const url = 'mongodb://localhost:27017'
const dbName = 'robot'


const client = new MongoClient(url)


const conn = async() => {

    try {
        await client.connect()
        console.log('Dah nyambung db')

        return client.db(dbName)

    } catch(err) {
        console.log('Error noh : ', err)
    }
    
}



module.exports = { conn }