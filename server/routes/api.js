import { Session } from 'protractor';

const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
var moment = require('moment');

mongoose.connect("mongodb://localhost:27017/anytrip");

var tripSchema = require('../models/trip');
var userSchema = require('../models/user');

var Trip = mongoose.model('Trip', tripSchema);
var User = mongoose.model('User', userSchema);


/* GET api listing. */
router.get('/trips', (req, res) => {
  var query = null;
  if (req.query.uid) {
    query = Trip.find({ user_id: req.query.uid });
  }

  else {
    query = Trip.find();
  }

  query.exec().then((result, err) => {
    res.send(result);
  })
});

router.get('/trips/:id', (req, res) => {
  Trip.findById(req.params.id, (err, result) => {
    res.send(result);
  })
})

router.post('/trips', (req, res) => {
  var trip = new Trip(req.body);
  trip.save();
  res.send(trip);
});

router.post('/sessions', (req, res) => {
  var session = new Session(req.body);
  session.save();
  res.send(session);
});

module.exports = router;