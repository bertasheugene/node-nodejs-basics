import { readFile } from "fs/promises";
import { existsSync } from "fs";

export const read = async () => {
    // Write your code here 
    const errorMessage = 'FS operation failed';
    const fileName = 'files/fileToRead.txt';

    if(!existsSync(fileName)){
        throw new Error(errorMessage);
    }

    let fileContent = await readFile(fileName, "utf8");
    console.log(fileContent);
};

read();