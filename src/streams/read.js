import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from "url";
import { stdout } from 'node:process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileToReadPath = path.join(__dirname, 'files/fileToRead.txt');

export const read = async () => {
    const stream = fs.createReadStream(fileToReadPath);
    stream.pipe(stdout);
};

read();