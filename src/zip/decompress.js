import { pipeline } from "stream";
import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib"

export const decompress = async () => {
    // Write your code here 
    pipeline(
        createReadStream("files/archive.gz"),
        createGzip(),
        createWriteStream("files/fileToCompress.txt"),
        (err) => {
            if (err) {
                console.error('failed.', err);
            } else {
                console.log('succeeded.');
            } 
        }
      );
};
decompress();