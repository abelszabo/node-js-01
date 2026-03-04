//import { log } from './logger.js';  // log("msg");
import * as logger from './logger.js'; // logger.log("msg");
import fs from 'fs';
//const fsAwait = require('fs').promises;
//import fsPromises from 'fs/promises';
const fsPromises = fs.promises;

export function readFile(path) {
    logger.log(`File ${path} will be async reading..`);

    fs.readFile(path, 'utf8', (err, data) => {
        if (err) throw err;

        logger.log(`File ${path} was read. Content: ${data}`);
    });

    const msg = `File ${path} will be async reading...`;
    logger.log(msg);

    return msg;
}

export async function readFileAwaiting(path) {
    logger.log(`File ${path} will be async reading and awaiting...`);

    const data = await fsPromises.readFile(path, 'utf8');

    const msg = `File ${path} was read and awaited for it. Content: ${data}`;
    logger.log(msg);

    return msg;
}

//module.exports = { readFile, readFileAwaiting };