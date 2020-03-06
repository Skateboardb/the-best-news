const express = require('express');
const router = express.Router();
const path = require('path');
const axios = require('axios');

const cheerio = require('cheerio');

const Comment = require('../models/Comment.js');
const Article = require('../models/Article.js');

// ============================= HOME PAGE =============================

router.get('/', (req, res) => {
	Article.find({}).then(function(data) {
		res.render('index');
	});
});

router.get('/scrape', (req, res) => {
	// First, we grab the body of the html with request
	axios.get('https://www.buzzfeednews.com').then(function(response) {
		// Then, we load that into cheerio and save it to $ for a shorthand selector
		var $ = cheerio.load(response.data);

		// Now, we grab every h2 within an article tag, and do the following:
		$('article.newsblock-story-card').each(function(i, element) {
			// Save an empty result object
			const result = {};

			// Add the text and href of every link, and save them as properties of the result object

			result.title = $(element)
				.children('span.newsblock-story-card__info')
				.children('h2')
				.children('a')
				.text()
				.split(`\n`)[0];

			result.link = $(element)
				.children('span.newsblock-story-card__info')
				.children('h2')
				.children('a')
				.attr('href');

			result.summary = $(element)
				.children('span.newsblock-story-card__info')
				.children('p')
				.text();

			result.img = $(element)
				.children('span.newsblock-story-card__image-link')
				.children('span')
				.children('img')
				.attr('src');

			console.log(result);
			// Create a new Article using the `result` object built from scraping
			Article.create(result)
				.then(function(dbArticle) {
					// View the added result in the console
					console.log(dbArticle);
				})
				.catch(function(err) {
					// If an error occurred, send it to the client
					return res.json(err);
				});
		});

		// If we were able to successfully scrape and save an Article, send a message to the client
		res.redirect('/');
	});
});

router.get('/articles', function(req, res) {
	Article.find({}).exec(function(err, doc) {
		if (err) {
			console.log(error);
		} else {
			res.json(doc);
		}
	});
});

// ============================= SAVED ARTICLES =============================

router.get('/saved', (req, res) => {
	res.render('saved');
});
module.exports = router;

router.post('/save/:id', (req, res) => {
	Article.findOneAndUpdate({ _id: req.params.id }, { saved: true }).exec(
		(err, doc) => {
			if (err) {
				console.log(err);
			} else {
				console.log('doc: ', doc);
			}
		}
	);
});

router.post('/unsave/:id', (req, res) => {
	Article.findOneAndUpdate({ _id: req.params.id }, { saved: false }).exec(
		(err, doc) => {
			if (err) {
				console.log(err);
			} else {
				console.log('doc removed: ', doc);
			}
		}
	);
	location.reload();
});

router.get('/articles/:id', (req, res) => {
	Article.findOne({ _id: req.params.id })
		.populate('comments')

		.exec(function(error, doc) {
			if (error) {
				console.log(error);
			} else {
				res.json(doc);
			}
		});
});

router.post('/comment/:id', (req, res) => {
	var newComment = new Comment(req.body);

	newComment.save((error, newComment) => {
		if (error) {
			console.log(error);
		} else {
			Article.findOneAndUpdate(
				{ _id: req.params.id },
				{ $push: { comments: newComment._id } },
				{ new: true }
			).exec((err, doc) => {
				if (err) {
					console.log(err);
				} else {
					console.log('doc', doc);
					res.send(doc);
				}
			});
		}
	});
});
