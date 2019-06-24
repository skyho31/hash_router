const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.resolve(__dirname)))
app.get('/', (req, res) => {
    res.render('index.html')
})

app.listen(4000, e => {
    console.log(`server on 4000`)
})
