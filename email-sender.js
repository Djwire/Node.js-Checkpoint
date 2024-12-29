const nodemailer = require('nodemailer');

// Create a transporter object using your email provider's service
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password'
  }
});

// Set up email data
const mailOptions = {
  from: 'your-email@gmail.com',
  to: 'your-email@gmail.com',
  subject: 'Test Email from Node.js',
  text: 'Hello, this is a test email sent using Node.js!'
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error occurred:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
