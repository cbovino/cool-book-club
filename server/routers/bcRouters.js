const express = require('express');
const router = express.Router();


// controllers:
const bcController = require('../controllers/bcController');

// Add Club to DB:
router.post('/addClubs', bcController.addClub, (req, res, next) => {
  console.log('Added Clubs');
  next();
});

// Get Clubs for Viewclubs for User:
router.get('/getClubs/:id', bcController.getClubs, (req, res, next) => {
  console.log('Get clubs that specific user can join');
  next();
});

router.post('/joinClubs/', bcController.joinTheClub, (req, res, next) => {
  console.log("joined the club")
  next();
});

// Get all Clubs:
router.get('/myClubs/:id', bcController.getMyClubs, (req, res, next) => {
  console.log("Get my clubs");
  next();
});

// // Add Message  with a user ID:
router.post('/addMessage', bcController.sendClubMessage, (req, res, next) => {
  console.log("send message to club")
  next();
 });


router.get('/getMessage/:id', bcController.getClubMessage, (req, res, next) => {
  console.log("Get messages fro specific club");
  next();
})


module.exports = router;
