
import { argv } from 'process';

export const parseEnv = () => {

    // print process.argv

    let rssArgement = [];

    argv.forEach((val, index) => {
        if(val.indexOf('RSS_') !== -1){
            rssArgement.push(val);
        }
    });
    console.log(rssArgement.join('; '));
};

parseEnv();