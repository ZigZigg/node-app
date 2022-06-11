const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.send('Heloooo ->>>')
})

app.listen(3001, () => {
    console.log('LISTEN TO 3001')
})