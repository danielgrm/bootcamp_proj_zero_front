const express = require('express')
var bodyparser = require('body-parser')
const app = express()
const PORT = 3000
const cors = require('cors')


// init middleware
app.use(express.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(cors())

app.use('/', require('./routes/barra'))
app.use('/user', require('./routes/user'))

app.listen(PORT, () => { console.log(`to rodando`) })
