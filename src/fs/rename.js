import { existsSync, rename as renameFile } from "fs";

export const rename = async () => {
    // Write your code here 
    const wrongFile = 'files/wrongFilename.txt';
    const properFil = 'files/properFilename.md';
    const errorMessage = 'FS operation failed';

    if(!existsSync(wrongFile) || existsSync(properFil)){
        throw new Error(errorMessage);
    }
    
    renameFile(wrongFile, properFil, (err) => {
        if (err) throw err;
    });

};

rename();