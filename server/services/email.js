/**
 * Created by jolaadeadewale on 12/09/2017.
 */
import nodemailer from 'nodemailer';
import emailTemplate from './emailTemplate';


var helper = require('sendgrid').mail;
var from_email = new helper.Email('joliphizzle@gmail.com');

class Email {

    sendEmail = (email) => {
        console.log('The email is', email);
        var to_email = new helper.Email(email);

        var subject = 'Hello World from the SendGrid Node.js Library!';
        var content = new helper.Content('text/plain', 'Hello world');
        var mail = new helper.Mail(from_email, subject, to_email, content);

        var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
        var request = sg.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: mail.toJSON(),
        });

        sg.API(request, function(error, response) {
            console.log(response.statusCode);
            console.log(response.body);
            console.log(response.headers);
        });


        var sgk = require('sendgrid')(process.env.SENDGRID_API_KEY);
        var requests = sgk.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: {
                personalizations: [
                    {
                        to: [
                            {
                                email: email,
                            },
                        ],
                        subject: 'Hello World from the SendGrid Node.js Library!',
                    },
                ],
                from: {
                    email: 'test@example.com',
                },
                content: [
                    {
                        type: 'text/plain',
                        value: 'Hello, Email!',
                    },
                ],
            },
        });

//With promise
        sgk.API(requests)
            .then(response => {
                console.log(response.statusCode);
                console.log(response.body);
                console.log(response.headers);
            })
            .catch(error => {
                //error is an instance of SendGridError
                //The full response is attached to error.response
                console.log(error.response.statusCode);
            });

//With callback
        sgk.API(requests, function(error, response) {
            if (error) {
                console.log('Error response received');
            }
            console.log(response.statusCode);
            console.log(response.body);
            console.log(response.headers);
        });

    }
}

export default new Email();






/*
 let transporter = nodemailer.createTransport({
 service: 'Gmail',
 auth: {
 user: 'lade.bamgbose@gmail.com', // generated ethereal user
 pass: '123@abc@'  // generated ethereal password
 }
 });

 // setup email data with unicode symbols
 let mailOptions = {
 from: 'Authenticase', // sender address
 to: email, // list of receivers
 subject: 'Welcome to Authenticase', // Subject line
 text: '', // plain text body
 html: emailTemplate() // html body
 };

 // send mail with defined transport object
 transporter.sendMail(mailOptions, (error, info) => {
 if (error) {
 return console.log(error);
 }
 console.log('Message sent: %s', info.messageId);
 // Preview only available when sending through an Ethereal account
 console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

 // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
 // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
 });
 */