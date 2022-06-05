import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const destination = path.join(__dirname, "files-copy");
const source = path.join(__dirname, "files");

export const copy = async () => {
    if (!fs.existsSync(source) || fs.existsSync(destination)) {
        throw new Error('FS operation failed');
    }
    fs.mkdir(
        destination, 
        (err) => {
            if(err) throw new Error('FS operation failed');
        }
    );
    fs.cp(
        source, 
        destination, 
        { recursive: true }, 
        (err) => {
            if(err) throw new Error('FS operation failed');
        }
    );
}; 
    

copy();