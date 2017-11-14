var express = require('express');
var app = express();
var path = require('path');

// homepage
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


//about page
app.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname + '/about.html'));
});



app.listen(3000);
