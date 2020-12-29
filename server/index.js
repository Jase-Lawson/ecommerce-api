const express = require('express')
const app = express()
const getProducts = require('./getProducts')
const port = 4312


app.get('/', (req, res) => { res.send('Home Screen') })

app.get('/api/products', getProducts)

app.get('/api/products/:id', getProducts)

app.listen(port, () => { console.log(`listening on Port: ${port}`) })