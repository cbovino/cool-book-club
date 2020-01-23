const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// routers
const auth = require('./routers/authRouters');
const bookClub = require('./routers/bcRouters');


// Cross Origin Resource Sharing
app.use(cors());

// Body Parser-
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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


app.listen(port, () => console.log(`Example app listening on port ${port}!`))