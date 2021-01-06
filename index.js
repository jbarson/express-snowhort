const express = require('express')
const bodyParser = require('body-parser')
const app = express()


const rootRoutes = require('./routes/rootRoutes')
app.use(bodyParser.urlencoded())
app.use(express.json())

app.use((_req, res,next) => { 
  console.log('the response')
  next()
})
app.use(express.static('public'))

app.use('/api', rootRoutes)
app.use('/api/s', rootROutes2)

app.listen(8080, error => error? console.error(error) : console.info('running on 8080'))