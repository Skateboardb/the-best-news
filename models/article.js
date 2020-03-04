const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const articleSchema = new Schema(
	{
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
		comments: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Comment'
			}
		],
		img: {
			type: String,
			required: true
		},
		saved: {
			type: Boolean,
			required: true,
			default: false
		}
	},
	{
		toObject: {
			virtuals: true
		},
		toJSON: {
			virtuals: true
		}
	}
);
const Article = mongoose.model('Article', articleSchema);
module.exports = Article;
