import { copyFile, readdir, mkdir } from "fs/promises";
import { existsSync } from "fs";

export const copy = async () => {
    // Write your code here 
    const dirCurrent = 'files';
    const dirCopy = 'files_copy';
    const errorMessage = 'FS operation failed';

    if(!existsSync(dirCurrent) || existsSync(dirCopy)){
        throw new Error(errorMessage);
    }

    let files = await  readdir("files", { withFileTypes: true });
    mkdir(dirCopy);

    for (const file of files){
        let srcPath = dirCurrent + '/' + file.name;
        let destPath = dirCopy + '/' + file.name;
        copyFile(srcPath, destPath);
    }

};

copy();