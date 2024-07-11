const kardus = require('../resource/kardus')

const addBarang = (req, h) => {

    if (req.payload == null){
        return h.response({
            status: 'fail',
            message: 'ISI KOCAK'
        }).code(500)
    }

    const { owner, name, price, description, stock } = req.payload
    const id = kardus.length + 1

    const createdAt = new Date().toString()
    const updatedAt = createdAt


    const newProducts = {
        id,
        owner,
        name,
        price,
        description,
        stock,
        createdAt,
        updatedAt
    }

    kardus.push(newProducts)

    const ada = kardus.filter((k) => k.id === id).length > 0
    
    if(ada) {
        const response = h.response({
            status: 'success',
            message: 'Prodak dah nambah noh'
        })

        response.code(201)
        return response
    }

    const response = h.response({
        status: 'fail',
        message: 'ada kesalahan keknya di server, gagal nambah pokoknya mah'
    })

    response.code(500)
    return response

}


const getAllBarang = () => ({
    status: 'success',
    data: {
        kardus
    }
})


module.exports = { addBarang, getAllBarang }