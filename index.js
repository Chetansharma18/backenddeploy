require('dotenv').config()
const express = require('express')
const app = express()

const port = 4000

app.get('/', (req, res) => {
  res.send('Hello backend!')
})

app.get('/twitter', (req, res) => {
    res.send('Hello Mr Chetan !')
  })

app.listen(process.env.PORT,  () => {
  console.log(`Example app listening on port ${port}`)
})