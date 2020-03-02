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
	summary: {
		type: String,
		required: true
	},
	comment: {
		type: Schema.Types.ObjectId,
		ref: 'Comment'
	},
	saved: {
		type: Boolean,
		required: true,
		default: false
	}
});
const Article = mongoose.model('Article', articleSchema);
module.exports = Article;
