require('dotenv').config();

const express = require('express'),
	massive = require('massive'),
	session = require('express-session'),
	app = express(),
	{ SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const emailCtrl = require('./controllers/Email');

app.use(express.static(`${__dirname}/../build`));

app.use(express.json());
app.use(
	session({
		resave: false,
		saveUninitialized: true,
		secret: SESSION_SECRET,
		cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 }, //1 week
	})
);

app.post('/sendEmail', emailCtrl);

massive({
	connectionString: CONNECTION_STRING,
	ssl: { rejectUnauthorized: false },
})
	.then((db) => {
		app.set('db', db);
		console.log('DB running on');
		app.listen(SERVER_PORT, () => console.log(`port: ${SERVER_PORT}`));
	})
	.catch((err) => console.log(err));
