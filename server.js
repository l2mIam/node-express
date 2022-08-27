const express = require('express')
const morgan = require('morgan')

const hostname = 'localhost'
const port = 3000

const app = express()
app.use(morgan('dev'))

app.use(express.static(__dirname + '/public'))

app.use((req,res) => {
  // console.log(req.headers) <- morgan will do this for us
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('<html><body><h1>THis is an Express Server</h1></body></html>')
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`)
})