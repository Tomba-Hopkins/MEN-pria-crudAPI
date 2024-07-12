const Hapi = require('@hapi/hapi')
const routes = require('./routes/routes')


const run = async() => {

    const server = Hapi.server({
        host: 'localhost',
        port: 5000
    })

    server.route(routes)

    await server.start()
    console.log(`Server started on ${server.info.uri}`)
    
    
}

run()