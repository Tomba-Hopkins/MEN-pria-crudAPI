const express = require('express')
const { conn } = require('./db/db')

const router = express.Router() // bukan func


const getConn = async () => {
    return await conn()
}

 // Get all Data
 router.get('/items', async (req, res) => {
    const db = await getConn()
    const robo = await db.collection('robo').find().toArray()
    res.json(robo)
})


// Get Data by name
router.get('/items/:name', async (req, res) => {
    const db = await getConn()
    const robo = await db.collection('robo').findOne({
        name: req.params.name
    })

    res.json(robo)
})



// Create Data
router.post('/items', async (req, res) => {
    const db = await getConn()
    const newRobo = {
        uid: (await db.collection('robo').countDocuments()) + 1,
        name: req.body.name,
        role: req.body.role
    }
    const result = await db.collection('robo').insertOne(newRobo)
    res.json(result)
})



// Update Data
router.put('/items/:name', async (req, res) => {
    const db = await getConn()

    const newRoboUpdate = req.body
    const result = await db.collection('robo').updateOne(
        {
        name: req.params.name,
        },
        {
            $set: newRoboUpdate
        }
)

    res.json(result)
    
})



// Delete Data
router.delete('/items/:name', async (req, res) => {
    const db = await getConn()

    const result = await db.collection('robo').deleteOne({
        name: req.params.name
    })

    res.json(result)
})



module.exports = router