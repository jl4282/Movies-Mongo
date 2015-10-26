var express = require('express');
var app = express();
var handlebars = require('express-handlebars').create({'defaultLayout':'main'});

require( './db' );

var mongoose = require('mongoose');
var Movie = mongoose.model('Movie');

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//set a homepage
app.get('/', function(req, res){
  res.render('home');
});

//movies route
app.get('/movies', function(req, res){
  var query = {};
  var director = req.query.director;
  if (director){ //if there's a search query set the new query
    query = {director: director};
  }
  Movie.find(query, function(err, movies, count){ //find the movie
    res.render('movies', {movies: movies}); //pass in the results
  });
});

app.listen(3000);
console.log('Server started on port 3000\n');
