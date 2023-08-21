const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const educationRouter = require('./routes/education-router')

const app = express()
const apiPort = 8000

// Middleware that parses incoming request bodies.
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Middleware that enables Cross-Origin Resource Sharing (CORS).
app.use(cors())

/*
 * Route that responds with a simple "Hello World!" message.
 * @name GET/
 * @function
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 */
app.get('/', (req, res) => {
  res.send('Hello World!')
})

/*
 * Middleware that routes education-related requests to the education router.
 * @name /api
 * @function
 */
app.use('/api', educationRouter)

/*
 * Start the API server and listen on the specified port.
 * @name listen
 * @function
 * @param {number} port - The port to listen on.
 * @param {Function} callback - The callback function to execute once the server is running.
 */
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))