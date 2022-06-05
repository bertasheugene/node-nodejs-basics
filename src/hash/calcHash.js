import crypto from "crypto";
import { readFile } from "fs/promises";

export const calculateHash = async () => {
    // Write your code here 
    const fileContent = await readFile("files/fileToCalculateHashFor.txt");
    const hachValue = crypto.createHash("sha256").update(fileContent).digest("hex");
    console.log(hachValue);
};

calculateHash();