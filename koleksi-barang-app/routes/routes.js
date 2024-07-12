const { addBarang, getAllBarang, getBarangByID, updateBarang, deleteBarang } = require('../handler/handler')

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
        handler: updateBarang
    },
    {
        method: 'DELETE',
        path: '/product/{productId}',
        handler: deleteBarang
    }
]


module.exports = routes