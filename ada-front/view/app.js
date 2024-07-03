const box = document.querySelector('.box')


const fetching = async() => {
    try {
        const data = await fetch('http://localhost:5000/api/items/')
        const dataJson = await data.json()
        console.log(dataJson)

        dataJson.forEach((d) => {
            box.innerHTML += `<div class="content">
                                    <p>Name: ${d.name}</p>
                                    <p>Role: ${d.role}</p>
                                </div>`
        })
        
    } catch(err) {
        console.log('Error', err)
    }
}

fetching()