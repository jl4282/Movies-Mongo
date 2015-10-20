var express = require('express');
var app = express();
var handlebars = require('express-handlebars').create({'defaultLayout':'main'});

require( './db' );

var mongoose = require('mongoose');
var Movie = mongoose.model('Movie');

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.get('/movies', function(req, res){
  Movie.find({}, function(err, movies, count){
    res.render('movies', {movies: movies});
  });
});

app.listen(3000);
console.log('Server started on port 3000\n');
