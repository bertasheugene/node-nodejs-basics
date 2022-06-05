import {createReadStream} from 'fs'

export const read = async () => {
    // Write your code here 
    const fileRead = createReadStream('files/fileToRead.txt'); 
    fileRead.pipe(process.stdout);
};

read();