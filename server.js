const express = require('express');
const session = require('express-session');
const fs = require('fs');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const ejs = require('ejs');
var router = require('./routes');

var app = express();

app.disable('x-powered-by');
app.use(morgan('common'));
app.set('port', 3000);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyparser.urlencoded({extended: true}));

// app.get('/', function(req,res){
//         res.render('index')
//     });
// app.post('/', function(req,res){
//     res.render('index');
//     console.log(req.body.search);
// })

app.use('/', router);

//404 Handler
app.use(function(req,res, next){
    res.status(404);
    res.render('404');
});

//500 handler
app.use(function(err, req, res, next){
    console.log(err.stack);
    res.render('index');
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function(){
    console.log("Express started on localhost: " + app.get('port'))
})