const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const app = express()

dotenv.config();

const rootRoutes = require('./routes/rootRoutes')
app.use(bodyParser.urlencoded())
app.use(express.json())

app.use((_req, res,next) => { 
  console.log('the response')
  next()
})
app.use(express.static('public'))

app.use('/api', rootRoutes)
app.listen(9000)
// app.listen(process.env.PORT, error => error? console.error(error) : console.info(`running on ${process.env.PORT}`))