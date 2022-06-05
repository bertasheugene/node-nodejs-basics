import { argv } from 'process';

export const parseArgs = () => {
    // Write your code here 
    let rssArgement = [];

    for (let i = 0; i < argv.length; i++){
        if(argv[i].indexOf('--') !== -1){
            rssArgement.push(argv[i] + ' is ' + argv[i + 1]);
        }
    }
    console.log(rssArgement.join(', '));
};

parseArgs();