import fs from 'fs/promises';
import * as path from 'path';
import * as crypto from 'crypto';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileToCalculatePath = path.join(__dirname, 'files/fileToCalculateHashFor.txt');

export const calculateHash = async () => {
    const file = await fs.readFile(fileToCalculatePath);
    const hashSum = crypto.createHash('sha256');
    hashSum.update(file);
    const hex = hashSum.digest('hex');
    console.log(hex);
    return hex;
};

calculateHash();