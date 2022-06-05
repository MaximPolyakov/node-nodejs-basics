import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const create = async () => {
    const data = 'I am fresh and young';
    const filePath = path.join(__dirname, 'files', 'fresh.txt');
    fs.writeFile(filePath, data, { flag: 'wx' }, (err) => {
        if (err) throw new Error('FS operation failed');
    })
}; 

create();

    