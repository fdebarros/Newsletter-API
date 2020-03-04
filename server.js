var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/newsLetterModel'), //created model loading here
  bodyParser = require('body-parser');

var cors = require('cors')

app.use(cors())

// app.get('/users', function (req, res, next){
//   res.json({msg: 'This is CORS-enabled for all origins!'})
// })
 
app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/NewsLetterdb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/newsLetterRoutes'); //importing route
routes(app); //register the route

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

app.listen(port);


console.log('NewsLetter RESTful API server started on: ' + port);
