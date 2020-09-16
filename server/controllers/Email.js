const nodemailer = require('nodemailer'),
	{ EMAIL_USER, EMAIL_PASS } = process.env;

module.exports = async (req, res) => {
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: EMAIL_USER,
			pass: EMAIL_PASS,
		},
	});

	const today = new Date(),
		date =
			today.getMonth() +
			'-' +
			(today.getDate() + 1) +
			'-' +
			today.getFullYear();

	const mailOptions = {
		from: email,
		to: EMAIL_USER,
		subject: `${subject} (${date})`,
		html: `<html>
        <p>Name: ${name}</p>
        <p>Number: ${phone}</p>
        <p>Email: ${email}</p>
        <p>Preferred Contact: ${prefContact}</p>
        <p>\n</p>
        <p>Subject: ${subject}</p>
        <p>\n</p>
        <p>Message: ${message}</p>
          
        </html>`,
	};

	transporter.sendMail(mailOptions, (err) => {
		!err ? res.sendStatus(200) : res.status(200).send(`Email Sent`);
	});
};
