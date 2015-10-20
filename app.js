var express = require('express');
var app = express();
var handlebars = require('express-handlebars').create({'defaultLayout':'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');



app.listen(3000);
console.log('Server started on port 3000\n');
