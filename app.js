const express = require('express')
const http = require('http')
const path = require('path')
const route = require('./routes')

const app = express()
const server = http.createServer(app)

const PORT = 3000

app.use(express.static(path.join(__dirname, 'public'))) // for css and 前端js
app.use(express.static('public'))
app.use(route)

server.listen(PORT, () => {
  console.log('Web Socket server start roaring')
})

module.exports = app
