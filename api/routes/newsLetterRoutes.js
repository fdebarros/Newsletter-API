'use strict';
module.exports = function(app) {
  var newsLetter = require('../controllers/newsLetterController');

  // NewsLetter Routes
  app.route('/users')
    .get(newsLetter.listAllUsers)
    .post(newsLetter.createUser);


  app.route('/user/:userId')
    .get(newsLetter.readUser)
    .put(newsLetter.updateUser)
    .delete(newsLetter.deleteUser);
};
