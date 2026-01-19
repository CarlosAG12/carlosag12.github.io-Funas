const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(__dirname))

app.listen(3000, '0.0.0.0', ()=>{
    console.log('Servidor accesible en:');
    console.log('http://localhost:3000');
    console.log('http://TU_IP_LOCAL:3000');
})