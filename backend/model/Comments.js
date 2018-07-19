const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// create status Schema & model
const CommnentsSchema = new Schema({
	statusAuthor: {
		type: String,
	},
	comment: [
		{
			commnetAuthor: {
				type: String,
			},
			commentContent: {
				type: String,
			},
		},
	],
});

const Comments = mongoose.model('comments', CommnentsSchema);

module.exports = Comments;
