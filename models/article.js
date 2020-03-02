const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const articleSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	link: {
		type: String,
		required: true
	},
	comment: {
		type: Schema.Types.ObjectId,
		ref: 'Comment'
	}
});
const article = mongoose.model('article', articleSchema);
module.exports = article;