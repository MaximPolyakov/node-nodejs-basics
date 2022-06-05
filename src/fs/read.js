import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileToReadPath = path.join(__dirname, 'files/fileToRead.txt');

export const read = async () => {
    fs.readFile(
        fileToReadPath, 
        'utf8',
        (err, data) => {
            if (err) throw new Error('FS operation failed');
            console.log(data);
        }
    );
}; 
    
read();