import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import multer from 'multer';

const uploadDir = path.join(process.cwd(), '../../../../public/', 'apply');
const dataFilePath = path.join('../../../../src/pages/api/apply', 'data.json');

if (!fs.existsSync(dataFilePath)) {
    fs.writeFileSync(dataFilePath, '[]', 'utf-8');
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        const ext = file.originalname.split('.').pop();
        cb(null, `${uuidv4()}.${ext}`);
    }
});
const fileFilter = (req: any, file: any, cb: any) => {
    if (file.size > 5 * 1024 * 1024) {
        return cb(new Error('File size must be less than 5MB'), false);
    }
    cb(null, true);
};
const upload = multer({ storage, fileFilter, limits: { fileSize: 5 * 1024 * 1024, files: 1 } });

const handler = async (req: NextApiRequest | any, res: NextApiResponse) => {
    if (req.method === 'POST') {
        try {
            upload.single('file')(req as any, res as any, async (err: any) => {
                if (err) {
                    console.error('Error:', err);
                    return res.status(500).json({
                        data: {
                            error: ` ${!fileFilter ? "Upload Image Less Then 5mb" : "Internal Server Error"
                                } `
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

                const fileName = req.file.filename.replace(/\\/g, '/');

                const relativeFilePath = `/public/apply/${fileName}`;

                const htmlBody = `
        <html>
          <head>
            <title>Email Title</title>
          </head>
          <body>
          <div style="background: black; max-width: 800px !important; margin: auto">
          <div
            style="
              background-color: rgb(46, 45, 45);
             padding: 20px 0px;
            "
          >
            <div
              style="
                text-align: center;
                background-color: light-grey !important ;
             
              "
            >
              <img
                src="https://websphereuk.netlify.app/_ipx/w_1920,q_75/%2F_next%2Fstatic%2Fmedia%2Flogo.f7e06b49.png?url=%2F_next%2Fstatic%2Fmedia%2Flogo.f7e06b49.png&w=1920&q=75"
                alt="Site's Logo"
                style="max-width: 300px; height: auto"
              />
            </div>
           
          </div>
        
          <div style="background-color: black; color: white; padding: 40px 40px">
            <h1 style="text-align: center; padding: 20px 0px">${firstName} ${lastName}</h1>
            <p className="line-height:2;"> 
              Dear Hiring Manager,
              <br />
              <br />
              I trust this message finds you well. I am reaching out to express my sincere interest in the ${positionTitle} developer position role available at <a href="websphereuk.com"  style="color: white; text-decoration: none" ><strong>Web Sphere</strong></a>. Over the course of my career, I have accumulated extensive expertise in ${previousExperience}. I am excited about the prospect of contributing my skills and knowledge to your esteemed organization. Should you require further information or wish to discuss my qualifications in more detail, please do not hesitate to contact me at ${phone} or via email at ${email}. I have also enclosed my CV for your perusal . Thank you for considering my application. I am enthusiastic about the opportunity to potentially join your team and contribute to the continued success of <a href="http://websphereuk.com/" style="color: white; text-decoration: none" ><strong>Web Sphere</strong></a>. Here my cover letter is : <br> 
              ${coverLetter}
              <br />
              <br />
              Warm regards,
              <br /><br />
              ${firstName} ${lastName}
            </p>
          </div>
        
          <div
            style="
              background-color: rgb(46, 45, 45);
              padding: 40px 0px;
              color: white;
              text-align: center;
            "
          >
            <div>
              This E-Mail is sent from applied form on <a href="websphereuk.com" style="color: white; text-decoration: none" ><strong>Web Sphere</strong></a>.
            </div>
        
          </div>
        </div>
        <style>
          * {
            margin: 0px;
            padding: 0px;
          }
          p {
            font-family: system-ui;
            line-height: 1.5;
          }
        </style>
          
          </body>
        </html>
        `;


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
        res.status(405).end();
    }
};

export const config = {
    api: {
        bodyParser: false,
    },
};

export default handler;
