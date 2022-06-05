import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const folder = path.join(__dirname, 'files');

export const list = async () => {
    fs.readdir(
        folder, 
        (err, files) => {
            if (err) throw new Error('FS operation failed');
            files.forEach(file => console.log(file))
        }
    );
}; 
    
list();