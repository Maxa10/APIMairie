import nodemailer from 'nodemailer';

// create reusable transporter object using the default SMTP transport
export default (to, subject, message) => {
	let transporter = nodemailer.createTransport({
		host: process.env.EMAIL_HOST,
		port: process.env.EMAIL_PORT,
		secure: false, // true for 465, false for other ports
		auth: {
			user: process.env.EMAIL_HOST_USER, // generated ethereal user
			pass: process.env.EMAIL_HOST_PASSWORD, // generated ethereal password
		},
	});

	// send mail with defined transport object
	let info = transporter.sendMail({
		from: process.env.EMAIL_HOST_USER,
		to: process.env.EMAIL_DEST_TEST, // list of receivers
		subject: subject, // Subject line
	});

	console.log('Message envoyé.', info.messageId);
};
