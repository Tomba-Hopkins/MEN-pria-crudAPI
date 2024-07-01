require('dotenv').config()

const express = require('express')
const cors = require('cors')

const { conn } = require('./db/db')

const app = express()

const port = 5000

app.use(cors())
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())


const run = async () => {

    const db = await conn()

    try {

        // Get all Data
        app.get('/items', async (req, res) => {
            const robo = await db.collection('robo').find().toArray()
            res.json(robo)
        })


        // Get Data by name
        app.get('/items/:name', async (req, res) => {
            const robo = await db.collection('robo').findOne({
                name: req.params.name
            })

            res.json(robo)
        })



        // Create Data
        app.post('/items', async (req, res) => {
            const newRobo = {
                uid: (await db.collection('robo').countDocuments()) + 1,
                name: req.body.name,
                role: req.body.role
            }
            const result = await db.collection('robo').insertOne(newRobo)
            res.json(result)
        })



        // Update Data
        app.put('/items/:name', async (req, res) => {

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
        app.delete('/items/:name', async (req, res) => {
            const result = await db.collection('robo').deleteOne({
                name: req.params.name
            })

            res.json(result)
        })



        app.listen(port, () => {
            console.log(`Web started on http://localhost:${port}`)
        })
        
    } catch(err) {
        console.log('Error noh: ', err)
    }
    
}


run()


