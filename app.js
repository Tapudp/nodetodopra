var express = require('express');
var todoController = require('./controllers/todoController');
var path = require('path');

var app = express();

// set up template engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('public'));
app.use('/assets', express.static(__dirname + '/public'));
//app.use(express.static(path.join(__dirname, "public")));

// fire controllers
todoController(app);

//listen to port
app.listen(3000);
console.log('Listening on port 3000');