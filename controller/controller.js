const express = require('express');
const router = express.Router();
const path = require('path');

const cheerio = require('cheerio');

const comment = require('../models/comment.js');
const article = require('../models/article.js');

router.get('/', (req, res) => {
	res.render('index');
});

module.exports = router;
