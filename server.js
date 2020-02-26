const mongoose = require('mongoose');
const logger = require('morgan');

const express = require('express');
const app = express();

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require('express-handlebars');
app.engine('bhs', exphbs({ defaultLayout: 'main', extname: 'hbs' }));
app.set('view engine', 'hbs');

app.use(express.static('public'));

mongoose.connect('mongodb://localhost/best_news');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
	console.log('Connected to Mongoose!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log('Listening on PORT ' + PORT);
});
