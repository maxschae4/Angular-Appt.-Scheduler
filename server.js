var express = require('express')
var app = express()
app.listen(31337, function() {
	console.log('listening on 31337');
});

// Body Parser
var bodyParser = require('body-parser')
app.use(bodyParser.json())

app.use(express.static(__dirname + '/client'))

// Mongoose
require('./server/config/mongoose.js');
// HTTP Routes`	
require('./server/config/routes.js')(app);



