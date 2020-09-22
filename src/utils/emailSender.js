'use strict';
const nodemailer = require('nodemailer');
const config = require('config');

module.exports = async function enviaEmail(emailTo, subject, text, html) {

    // create reusable transporter object using the SMTP transport
    let transporter = nodemailer.createTransport({
        host: config.get('email.hostSMTP'),
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: config.get('email.address'), // email sender
            pass: config.get('email.password') // password
        },
        tls: { rejectUnauthorized: false }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: `"${config.get('email.name')}" <${config.get('email.address')}>`, // sender address
        to: `${emailTo}`,// list of receivers
        subject: subject ? `${subject}` : 'Assunto em branco', // Subject line
        text: text ? `${text}` : 'texto vazio', // plain text body
        html: html ? `${html}` : '' // html body
    });
}