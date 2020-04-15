const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');

const socket = require('socket.io');

const app = express();
const port = 3000;

// routers
const auth = require('./routers/authRouters');
const bookClub = require('./routers/bcRouters');

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// sockets
// const io = socket(server);
// io.on('connection', (socket) => {
//   io.emit('event', { data: 'Hey this is the data fromt eh connectss' });
// });

// Cross Origin Resource Sharing
app.use(cors());

// Body Parser-
app.use(express.json());

// Flow Test;
app.use((req, res, next) => {
  console.log(`
    **FLOW TEST**
    ${req.url} - URL
    ${req.method} - Method
    ${req.body} - Body
    `);
  next();
});

// Auth Routes:
app.use('/api/auth/', auth, (req, res) => {
  res.send('This is the login');
});

// Book Club Routes:
app.use('/api/bookClub/', bookClub, (req, res) => {
  res.send('you made it ');
});
