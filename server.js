import express from 'express'
import morgan from 'morgan'
import campsiteRouter from './routes/campsiteRouter.js'
// const express = require('express')
// const morgan = require('morgan')
// const campsiteRouter = require('./routes/campsiteRouter')
// import { fileURLToPath } from 'url'
// import { dirname } from 'path'

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = dirname(__filename)

import path from 'path';
const __dirname = path.resolve();

const hostname = 'localhost'
const port = 3000

const app = express()
app.use(morgan('dev'))
app.use(express.json())

app.use('/campsites', campsiteRouter)

app.use(express.static(path.join(__dirname, '/public')))

app.use((req,res) => {
  // console.log(req.headers) <- morgan will do this for us
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('<html><body><h1>THis is an Express Server</h1></body></html>')
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`)
})