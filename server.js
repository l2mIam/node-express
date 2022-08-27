// ES way:
import express from 'express'
import morgan from 'morgan'
import campsiteRouter from './routes/campsiteRouter.js'
import promotionRouter from './routes/promotionRouter.js'
import partnerRouter from './routes/partnerRouter.js'

// Need to import path as __dirname not defined in ES Module
// It is defined in CommonJS
import path from 'path';
const __dirname = path.resolve();

// CommonJS way:
// const express = require('express')
// const morgan = require('morgan')
// const campsiteRouter = require('./routes/campsiteRouter')


const hostname = 'localhost'
const port = 3000

const app = express()
app.use(morgan('dev'))
app.use(express.json())

app.use('/campsites', campsiteRouter)
app.use('/promotions', promotionRouter)
app.use('/partners', partnerRouter)

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