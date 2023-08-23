const express = require('express');
const https = require('https');
const fs = require('fs'); // Required for reading certificates
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

if (process.env.NODE_ENV === 'production') {

  // Load SSL/TLS certificates for production enviroment
  const privateKey = fs.readFileSync('/etc/letsencrypt/live/rachelgrant.me/privkey.pem', 'utf8');
  const certificate = fs.readFileSync('/etc/letsencrypt/live/rachelgrant.me/fullchain.pem', 'utf8');
  const chain = fs.readFileSync('/etc/letsencrypt/live/rachelgrant.me/chain.pem', 'utf8');

  const credentials = {
      key: privateKey,
      cert: certificate,
      ca: chain
  };

  // Create an HTTPS server for production
  const httpsServer = https.createServer(credentials, app);
  server = httpsServer;
}
else {
    // Create an HTTP server for development
    server = app;
}

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
server.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))

