const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
	name: {
		type: String
	},
	body: {
		type: String,
		required: true
	}
});
const comment = mongoose.model('comment', commentSchema);
module.exports = comment;
