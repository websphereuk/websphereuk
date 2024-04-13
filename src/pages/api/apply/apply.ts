import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import multer from 'multer';

const uploadDir = path.join(process.cwd(), 'public', 'apply');
const dataFilePath = path.join('src/pages/api/apply', 'data.json');

if (!fs.existsSync(dataFilePath)) {
  fs.writeFileSync(dataFilePath, '[]', 'utf-8');
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log('Destination:', uploadDir);
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const ext = file.originalname.split('.').pop();
    const fileName = `${uuidv4()}.${ext}`;
    console.log('Generated Filename:', fileName);
    cb(null, fileName);
  }
});

const fileFilter = (req: any, file: any, cb: any) => {
  if (file.size > 5 * 1024 * 1024) {
    console.log('File size exceeds 5MB limit');
    return cb(new Error('File size must be less than 5MB'), false);
  }
  console.log('File size within limit');
  cb(null, true);
};

const upload = multer({ storage, fileFilter, limits: { fileSize: 5 * 1024 * 1024, files: 1 } });

const handler = async (req: NextApiRequest | any, res: NextApiResponse) => {
  console.log('Request Method:', req.method);
  if (req.method === 'POST') {
    try {
      upload.single('file')(req as any, res as any, async (err: any) => {
        if (err) {
          console.error('Error:', err);
          return res.status(500).json({
            data: {
              error: ` ${!fileFilter ? "Upload Image Less Then 5mb" : "Internal Server Error"}`
            }
          });
        }

        const {
          firstName,
          lastName,
          email,
          coverLetter,
          previousExperience,
          positionTitle,
          phone,
          year,
          country,
          education,
        } = req.body;

        console.log('Received Form Data:', req.body);
        const fileName = req.file.filename.replace(/\\/g, '/');
        console.log('Uploaded File Name:', fileName);

        const relativeFilePath = `/public/apply/${fileName}`;

        const htmlBody = `
        <!-- HTML body omitted for brevity -->
        `;

        console.log('HTML Body:', htmlBody);

        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'bilawal.ali2626@gmail.com',
            pass: 'lscv qztk gedd qkeu',
          },
        });

        await transporter.sendMail({
          from: `${email}`,
          to: 'bilawal.ali2626@gmail.com',
          subject: `New Contact Form Submission from ${firstName} ${lastName}`,
          html: htmlBody,
          headers: {
            'Content-Type': 'text/html',
          },
        });

        console.log('Email Sent Successfully');

        const newData = {
          id: uuidv4(),
          firstName,
          lastName,
          email,
          coverLetter,
          previousExperience,
          positionTitle,
          phone,
          year,
          country,
          education,
          file: relativeFilePath,
        };

        const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf8') || '[]');
        data.push(newData);
        fs.writeFileSync(dataFilePath, JSON.stringify(data));

        console.log('Data Written to File:', newData);

        res.status(200).json({
          data: {
            message: 'Email sent successfully',
            Sender: `${email}`,
            subject: `New Contact Form Submission from ${firstName} ${lastName}`
          }
        });
      });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    console.log('Invalid Request Method:', req.method);
    res.status(405).end();
  }
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
