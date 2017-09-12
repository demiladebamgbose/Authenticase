/**
 * Created by jolaadeadewale on 12/09/2017.
 */
import nodemailer from 'nodemailer';

class Email {

    sendEmail = (email) => {
        let transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'joliphizzle@gmail.com', // generated ethereal user
                pass: 'rooney07'  // generated ethereal password
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: 'Authenticase', // sender address
            to: email, // list of receivers
            subject: 'Hello ✔', // Subject line
            text: 'Hello world?', // plain text body
            html: '<b>Hello world?</b>' // html body
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
    }
}

export default new Email();