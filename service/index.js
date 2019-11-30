const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const socketIO = require('socket.io')
const http = require('http')
const app = express();

const APP_PORT = process.env.APP_PORT || 8001;

const server = http.createServer(app)
const io = socketIO(server)

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())



// Routes
app.use(function (req, res, next) {
  res.io = io;
  next();
});
app.use('/api/device', require('./routes/api.device'))
app.use('/api/record', require('./routes/api.record'))

if (process.env.NODE_ENV === 'production' || 'staging') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

io.on('connection', function (socket) {
  console.log('a user connected');
  socket.on('disconnect', function () {
    console.log('user disconnected');
  });
});


server.listen(APP_PORT, () => {
  console.log(`Listening to port ${APP_PORT}`)
})