const { addBarang } = require('../handler/handler')

const routes = [
    {
        method: 'POST',
        path: '/product',
        handler: addBarang
    }
]


module.exports = routes