import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === 'POST') {
    const {
      firstName,
      lastName,
      email,

    } = req.body;
    const htmlBody = `
    <html>
      <head>
        <title>Email Title</title>
      </head>
      <body>
        <p>Hi ${firstName} ${lastName},</p>
        <p>This is a test email.</p>
      </body>
    </html>
  `;
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        //This is gmail App Credentials
        user: 'bilawal.ali2626@gmail.com',
        pass: 'lscv qztk gedd qkeu',
      },
    });

    try {
      await transporter.sendMail({
        from: email,
        to: 'bilawal.ali2626@gmail.com',
        subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        html: htmlBody, // Set the HTML body
        headers: {
          'Content-Type': 'text/html', // Set content type to HTML
        },
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).end();
  }
};

export default handler;
