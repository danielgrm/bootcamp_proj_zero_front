const urlServer = 'http://localhost:3000/user'

const tbody = document.querySelector('#list table tbody')

const createElement = (item) => {
    const elementTr = document.createElement('tr')
    elementTr.innerHTML = `
            <td>${item.titulo}</td>
            <td>${item.ano}</td>
            <td>${item.genero}</td>
            <td>${item.duracao}</td>
            <td>${item.diretor}</td>
    `

    return elementTr
}

async function getList() {

    const result = await fetch(urlServer)
    const data = await result.json()

    data.map(item => tbody.appendChild(createElement(item)))
}