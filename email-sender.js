const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'your_email_service_provider',
    auth: {
        user: 'your_email@example.com',
        pass: 'your_email_password',
    },
});

// Détails du courriel
const mailOptions = {
    from: 'your_email@example.com',
    to: 'recipient@example.com',
    subject: 'Test Node.js Email',
    text: 'Hello from GoMyCode!',
};

// Envoie du courriel
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
