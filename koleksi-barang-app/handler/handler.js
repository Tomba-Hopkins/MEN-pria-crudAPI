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
            message: 'Prodak dah nambah noh',
            data: {
                productId: id
            }
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


const getAllBarang = (req) => {
                
    const filtered = []
    let kardusFilter = kardus

    const { owner } = req.query

    if (owner !== undefined){
        kardusFilter = kardusFilter.filter((k) => k.owner.toLowerCase().includes(owner.toLowerCase()))
    }

    kardusFilter.forEach(({owner, name, stock}) => {
        filtered.push({owner, name, stock})
    })

    return {
        status: 'success',
        data: {
            barang: filtered
        }
    }


    
}


const getBarangByID = (req, h) => {

    const { productId } = req.params

    const barang = kardus.filter((k) => k.id == Number(productId))[0]

    if (barang !== undefined) {

        return {
            status: 'success',
            data: {
                barang
            }
        }
        
    }

    const response = h.response({
        status: 'fail',
        message: 'GA NEMU KOCAG'
    })

    response.code(404)
    return response
    
}


const updateBarang = (req, h) => {

    if (req.payload == null){
        return h.response({
            status: 'fail',
            message: 'ISI LAH'
        }).code(400)
    }

    const { owner, name, price, description, stock } = req.payload
    const { productId } = req.params

    const index = kardus.findIndex((k) => k.id === Number(productId))

    if (index !== -1) {
        kardus[index] = {
            ...kardus[index],
            owner,
            name,
            price,
            description,
            stock
        }

        const response = h.response({
            status: 'success',
            message: 'Dah keubah noh'
        })

        response.code(200)
        return response
    }

    const response = h.response({
        status: 'fail',
        message: 'Ga nemu idnya'
    })

    response.code(404)
    return response
    
}


const deleteBarang = (req, h) => {

    const { productId } = req.params
    
    const index = kardus.findIndex((k) => k.id === Number(productId))

    if(index !== -1) {
        kardus.splice(index, 1)

        return h.response({
            status: 'success',
            message: `Data dengan id ${productId} berhasil di hapus`
        }).code(200)
    }

    return h.response({
        status: 'fail',
        message: 'KAGAK NEMU KOCAG'
    }).code(404)
    
}

module.exports = { addBarang, getAllBarang, getBarangByID, updateBarang, deleteBarang }