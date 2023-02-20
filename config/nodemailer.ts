import { createTransport } from 'nodemailer';

const email = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASSWORD;
const recipient = process.env.RECIPIENT_EMAIL;


export const transporter = createTransport({
    service:'gmail',
    auth: {
        user: email,
        pass,
    },
    secure: true,
    logger: true,
});

export const mailOptions = {
    from: email,
    to: recipient,
};