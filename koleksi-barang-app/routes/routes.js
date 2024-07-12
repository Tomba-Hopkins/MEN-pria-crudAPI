const { addBarang, getAllBarang, getBarangByID, editBarang } = require('../handler/handler')

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
    },
    {
        method: 'PUT',
        path: '/product/{productId}',
        handler: editBarang
    }
]


module.exports = routes