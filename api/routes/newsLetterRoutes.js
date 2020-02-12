'use strict';
module.exports = function(app) {
  var newsLetter = require('../controllers/newsLetterController');

  // NewsLetter Routes
  app.route('/users')
    .get(newsLetter.list_all_users)
    .post(newsLetter.create_a_user);


  app.route('/user/:userId')
    .get(newsLetter.read_a_user)
    .put(newsLetter.update_a_user)
    .delete(newsLetter.delete_a_user);
};
