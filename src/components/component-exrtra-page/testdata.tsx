// pages/index.js

import fs from 'fs';
import path from 'path';

export default function Home({ submissions }: any) {
    return (
        <div>
            <h1>Submitted Data</h1>
            <ul>

                {submissions.map((submission: any) => (
                    <li key={submission.id}>
                        <strong>Name:</strong> {submission.name}<br />
                        <strong>Phone:</strong> {submission.phone}<br />
                        <strong>Email:</strong> {submission.email}<br />
                        <strong>Message:</strong> {submission.message}<br />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'data', 'submissions.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8') || '[]');

    return {
        props: {
            submissions: data
        }
    };
}
