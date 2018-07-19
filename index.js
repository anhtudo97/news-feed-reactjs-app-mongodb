const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Status = require('./backend/model/Status.js');
const Comments = require('./backend/model/Comments.js');
// set up express app
const app = express();

// connect to mongodb
mongoose.connect(
	'mongodb://localhost:27017/newsfeed',
	function(err, db) {
		if (!err) {
			console.log('We are connected');
		}
	}
);
mongoose.Promise = global.Promise;

//set up static files
// app.use(express.static('public'));

// use body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// initialize routes
// app.use('/api', require('./backend/routes/api'));

app.post('/status', function(req, res) {
	console.log(req.body);
	Status.create(req.body).then(function(data) {
		console.log(1 + data);
		// res.send(2+ninja);
		res.send('Post status data: ' + data);
	});
});

app.post('/Comments', function(req, res) {
	console.log(req.body);
	Comments.create(req.body).then(function(data) {
		console.log(2 + data);
		// res.send(2+ninja);
		res.send('Post comments data: ' + data);
	});
});

// error handling middleware
app.use(function(err, req, res, next) {
	console.log(err); // to see properties of message in our console
	res.status(422).send({ error: err.message });
});

// listen for requests
app.listen(process.env.port || 4000, function() {
	console.log('now listening for requests');
});
