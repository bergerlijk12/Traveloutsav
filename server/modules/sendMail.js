var nodemailer = require('nodemailer');

var self = {

    

    
    sendMail: function(subject, html){
        
        // create reusable transporter object using SMTP transport
        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'dsutradhar27@gmail.com',
                pass: 'closeup111'
            }
        });

        // NB! No need to recreate the transporter object. You can use
        // the same transporter object for all e-mails

        // setup e-mail data with unicode symbols
        var mailOptions = {
            from: 'Traveloutsav Support ✔ <dsutradhar27@gmail.com>', // sender address
            to: 'dhiman.sutradhar07@gmail.com', // list of receivers
            subject: subject, // Subject line
            text: 'Hello world ✔', // plaintext body
            html: html // html body
        };
        
        // send mail with defined transport object
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                return false;
            }
            console.log('Message sent: ' + info.response);
            return true;

        });
    }
};

module.exports = self;