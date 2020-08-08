const express = require('express')
const router = express.Router ()


router.get('/', (req, res) => {
    let number = Math.random()
    number = Math.trunc(number * 10)
    res.send(`Outra tela ${number}`)
})
module.exports = router
