const express = require('express')
const router = express.Router()
let { Usuario, listadeusuarios } = require('../models/user')

router.get('/', (req, res, next) => {
    try {
        console.log(listadeusuarios)
        res.send(listadeusuarios)
    } catch (err) {
        console.error(err.message)
        res.status(500).send({ "error": "server error no barra get" })
    }
})


router.delete('/:userId', (req, res, next) => {
    try {
        console.log(req.params)
        let deleted = listadeusuarios.filter(usuario => usuario.id == req.params["userId"])
        if (deleted.length > 0) {
            listadeusuarios = listadeusuarios.filter(usuario => usuario.id != req.params["userId"])
            res.send(listadeusuarios)
        }
    } catch (err) {
        console.error(err.message)
        res.status(500).send({ "error": "server error no delete userid" })
    }
})


router.post("/", [], (req, res, next) => {
    try {
        let { titulo, ano, genero, duracao, diretor } = req.body
        let usuario = new Usuario(titulo = titulo, ano = ano, genero = genero, duracao = duracao, diretor = diretor)

        if (!titulo) {
             res.status(400).send({ "error": "Põe o título do filme, sua biscate!" })
        }
        if (!ano) {
            res.status(400).send({ "error": "Põe o ano de lançamento do filme, sua biscate!" })
        }
        if (!genero) {
            res.status(400).send({ "error": "Põe o gênero do filme, sua biscate!" })
        }
        if (!duracao) {
            res.status(400).send({ "error": "Põe a duração do filme, sua biscate!" })
        }
        if (!titulo) {
            res.status(400).send({ "error": "Põe o diretor do filme, sua biscate!" })
        }else{
        listadeusuarios.push(usuario)
        res.send(listadeusuarios)
        }    
        } catch (err) {
    console.error(err.message)
    res.status(500).send({ "error": "bad mojo" })
}
    })

module.exports = router