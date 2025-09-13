// pages/api/send-email.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        return res.status(405).send({ message: 'Only POST requests are allowed' });
    }

    const { fullName, company, email, phone, services, budget, technology, message } = req.body;

    // Logging request body to check data
    console.log('Request body:', req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail', // Use 'gmail' if you're using Gmail
        auth: {
            user: 'bilawal.ali2626@gmail.com',
            pass: 'lscv qztk gedd qkeu',
        },
    });

    const mailOptions = {
        from: email,
        to: 'bilawal.ali2626@gmail.com', // The email address you want to receive the form data
        subject: 'Websphere UK Contact Leads',
        text: `
            Full Name: ${fullName}
            Company: ${company}
            Email: ${email}
            Phone: ${phone}
            Services: ${services?.join(', ') || 'None'}
            Budget: ${budget}
            Technology: ${technology}
            Message: ${message}
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send({ message: 'Error sending email', error });
    }
};

export default sendEmail;
