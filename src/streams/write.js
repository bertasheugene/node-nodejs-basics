import {createWriteStream} from 'fs'

export const write = async () => {
    // Write your code here 
    const fileWrite = createWriteStream('files/fileToWrite.txt'); 

    process.stdin.on('data', (chunk) => {
        writedFile.write(chunk);
    });
};

write();