'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('Users');

const listAllUsers = (req, res) => {
  User.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

const createUser = (req, res) => {
  var new_user = new User(req.body);
  new_user.save(function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

const readUser = (req, res) =>{
  User.findById(req.params.userId, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

const updateUser = (req, res) =>{
  User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

const deleteUser = (req, res) =>{
  User.remove({
    _id: req.params.userId
  }, function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};

module.exports = {listAllUsers, createUser, readUser, updateUser, deleteUser}