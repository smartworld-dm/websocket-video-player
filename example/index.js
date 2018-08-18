/* eslint-disable no-console */
const path = require('path')
const http = require('http')

const express = require('express')
const app = express()
// serve the html/index.html
app.use(express.static(path.resolve(__dirname, 'html')))
// serve the player
app.use(express.static(path.resolve(__dirname, '../lib')))

const server = http.createServer(app)

server.listen(8080)