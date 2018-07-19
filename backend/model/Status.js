const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create comment Schema
const Comment = new Schema({
    commnetAuthor: {
        type: String
    },
    commentContent: {
        type: String
    }
});

// create comment Schema
const Comments = new Schema({
    statusAuthor: {
        type: String
    },
    comment: Comment
});

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
    comments: Comments
});

const Status = mongoose.model('status', StatusSchema);

module.exports = Status;