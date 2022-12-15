var express = require('express');
var app = express();

app.use(express.static('public'));
// app.use('/logo_twins.svg', express.static('icons/logo_twins.svg'));

app.listen(3000);