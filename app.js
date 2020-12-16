var express = require('express');
var path = require('path');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/lib/connect', express.static(path.join(__dirname, 'node_modules', '@bullhorn', 'connect', 'lib')));
app.use('/lib/post-robot', express.static(path.join(__dirname, 'node_modules', 'post-robot', 'dist')));


module.exports = app;
