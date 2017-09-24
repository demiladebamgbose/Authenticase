/**
 * Created by jolaadeadewale on 12/09/2017.
 */
import nodemailer from 'nodemailer';
import emailTemplate from './emailTemplate';

import {mail} from 'sendgrid';
import sendgrid from 'sendgrid';

class Email {

    sendEmail = (email) => {
        let from_email = new mail.Email('test@example.com');
        let to_email = new mail.Email(email);

        let subject = 'Hello World from the SendGrid Node.js Library!';
        let content = new mail.Content('text/html', emailTemplate());
        let mail = new mail.Mail(from_email, subject, to_email, content);

        let sendGrid = sendgrid(process.env.SENDGRID_API_KEY);

        var request = sendGrid.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: mail.toJSON(),
        });

        sendGrid.API(request, (error, response) =>{
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