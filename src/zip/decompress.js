import * as path from 'path';
import { fileURLToPath } from "url";
import { createGunzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileToCompressPath = path.join(__dirname, 'files/fileToCompress.txt');
const archivePath = path.join(__dirname, 'files/archive.gz');

export const decompress = async () => {
    const unzip = createGunzip();
    const source = createReadStream(archivePath);
    const destination = createWriteStream(fileToCompressPath);

    source.pipe(unzip).pipe(destination);
};

decompress();