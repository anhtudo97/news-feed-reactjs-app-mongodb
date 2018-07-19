const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// create status Schema & model
const StatusSchema = new Schema({
	author: {
		type: String,
	},
	title: {
		type: String,
	},
	content: {
		type: String,
	},
});

const Status = mongoose.model('status', StatusSchema);

module.exports = Status;
