const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const educationRouter = require('./routes/education-router')

const app = express()
const apiPort = 8000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api', educationRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))