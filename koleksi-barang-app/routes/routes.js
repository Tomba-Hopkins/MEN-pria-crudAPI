const { addBarang, getAllBarang } = require('../handler/handler')

const routes = [
    {
        method: 'POST',
        path: '/product',
        handler: addBarang
    },
    {
        method: 'GET',
        path: '/product',
        handler: getAllBarang
    }
]


module.exports = routes