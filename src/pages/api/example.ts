// pages/api/submit.js

import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';


export default function handler(req: any, res: any) {
    if (req.method === 'POST') {
        const { name, phone, email, message } = req.body;

        // Validate required fields
        if (!name || !phone || !email || !message) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Create a new object with the submitted data
        const newData = {
            id: uuidv4(), // generate a uxnique id
            name,
            phone,
            email,
            message
        };

        // Store data in a JSON file
        const filePath = path.join(process.cwd(), 'data', 'submissions.json');
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8') || '[]');
        data.push(newData);
        fs.writeFileSync(filePath, JSON.stringify(data));

        return res.status(200).json({ message: 'Data submitted successfully' });
    } else {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
}











