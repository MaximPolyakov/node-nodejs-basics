import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileToRemovePath = path.join(__dirname, 'files/fileToRemove.txt');

export const remove = async () => {
    fs.unlink(
        fileToRemovePath, 
        (err) => {
            if (err) throw new Error('FS operation failed');
        }
    );
};

remove();
