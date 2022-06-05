import * as path from 'path';
import { fileURLToPath } from "url";
import { createGzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileToCompressPath = path.join(__dirname, 'files/fileToCompress.txt');
const archivePath = path.join(__dirname, 'files/archive.gz');

export const compress = async () => {
    const gzip = createGzip();
    const source = createReadStream(fileToCompressPath);
    const destination = createWriteStream(archivePath);

    source.pipe(gzip).pipe(destination);
};

compress();