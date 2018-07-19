const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// create status Schema & model
const CommnentSchema = new Schema({
	commnetAuthor: {
		type: String,
	},
	commentContent: {
		type: String,
	},
});

const Comment = mongoose.model('comments', CommnentSchema);

module.exports = Comment;
