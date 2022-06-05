import { writeFile } from "fs/promises";
import { existsSync } from "fs";


export const create = async () => {

    const path = 'files/fresh.txt';
    const contentFile = 'I am fresh and young';
    const errorMessage = 'FS operation failed';

    if(existsSync(path)){
        throw new Error(errorMessage);
    }

    try {
        writeFile(path, contentFile, {flag: 'wx'});
    }  catch (e) {
        console.error(e);
        
    }
    // Write your code here 
};

create();