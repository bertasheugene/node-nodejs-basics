import { existsSync } from "fs";
import { rm } from "fs/promises";

export const remove = async () => {
    // Write your code here 
    const removeFile = 'files/fileToRemove.txt';
    const errorMessage = 'FS operation failed';

    if(!existsSync(removeFile)){
        throw new Error(errorMessage);
    }
    rm(removeFile);
    
};

remove();