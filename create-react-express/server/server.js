const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
// const io = require('./server/node_modules/socket-io');

const PORT = process.env.PORT || 3030;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(routes);

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/googlebooks';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// io.on('connection', (client) => {
//   client.on('subscribeToTimer', (interval) => {
//     console.log('client is subscribing to timer with interval ', interval);
//     setInterval(() => {
//       client.emit('timer', new Date());
//     }, interval);
//   });
// });

// const port = 8000;
// io.listen(port);
// console.log('listening on port ', port);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
