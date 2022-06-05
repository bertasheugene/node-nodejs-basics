import { readdir} from "fs/promises";
import { existsSync } from "fs";

export const list = async () => {
    // Write your code here 
    const errorMessage = 'FS operation failed';

    if(!existsSync('files')){
        throw new Error(errorMessage);
    }
    
    let files = await readdir("files", { withFileTypes: true });
    let arrayName = [];

    for (let file of files){
        arrayName.push(file.name);
    }

    console.log(arrayName);

};

list();