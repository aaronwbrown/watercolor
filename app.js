var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var bodyParser = require('body-parser');
var server = require('./src/server.js');
var path = require('path');

app.use(express.static(path.join(__dirname, 'src/assets')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


var port = process.env.PORT || 8080;
var router = express.Router();

router.get('/', server);

app.use('/watercolor', router);

app.listen(port);
console.log('Magic happens on port ' + port);
