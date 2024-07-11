const { addBarang, getAllBarang, getBarangByID } = require('../handler/handler')

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
    },
    {
        method: 'GET',
        path: '/product/{productId}',
        handler: getBarangByID
    }
]


module.exports = routes