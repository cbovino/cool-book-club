const express = require('express');

const router = express.Router();


// controllers 
const authController = require('../controllers/authController');


// Sign Up:
router.post('/signup', authController.signup, (req, res, next) => {
  console.log('here');
  next();
});

// Login In:
router.post('/login', authController.login, (req, res, next) => {
  console.log("This one is the login");
  next();
});


module.exports = router;
