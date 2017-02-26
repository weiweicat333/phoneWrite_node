var path = require('path');
var express = require('express');
app = new express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.redirect('/new/index.html');
});

app.listen('3000', function(){
    console.log('ok!');
});