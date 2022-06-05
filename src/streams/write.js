import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from "url";
import { stdout } from 'node:process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileToWritePath = path.join(__dirname, 'files/fileToRead.txt');

export const write = async () => {
    const stream = fs.createWriteStream(fileToWritePath);
    stdin.pipe(stream);
};

write();