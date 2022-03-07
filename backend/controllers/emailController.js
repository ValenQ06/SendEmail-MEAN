import {createTransport} from 'nodemailer';

const sendEmail =(req, res)=>{
    const transporter = createTransport({
        service:"gmail",
        secure:true,
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.PASS_EMAIL,
        },
        tls: {
            rejectUnauthorized: false
        }
    });

const mailOptions = {
    from: 'Remitente',
    to: `${req.body.email}`,
    subject: 'Asunto',
    text: '!!Bienvenido'
};
// Enviamos el email
transporter.sendMail(mailOptions, function(error, info){
    if (error){
        console.log(error);
        return res.send(500, error.message);
    } else {
        console.log("Email sent");
        return res.status(200).send(body);
    }
});
};





export default {sendEmail}