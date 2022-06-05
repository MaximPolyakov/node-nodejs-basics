import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const properFilePath = path.join(__dirname, 'files/properFilename.md');
const wrongFilePath = path.join(__dirname, 'files/wrongFilename.txt');

export const rename = async () => {
    if(fs.existsSync(properFilePath)) {
        throw new Error('FS operation failed');
    }
    fs.rename(
        wrongFilePath,
        properFilePath,
        (err) => {
            if (err) throw new Error('FS operation failed');
        }
    );
}; 
    
rename();