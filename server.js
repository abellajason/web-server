var express = require('express');
var app = express();
const port = process.env.PORT || 3000;

var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication , (req , res) => {
    res.send ('About Us !');
});

app.use(express.static(__dirname+'/public'));

app.listen(port , () => {
    console.log('express server started at port ' + port );
});