const logger = require('./logger');
const fs = require('fs');
const fsAwait = require('fs').promises;

function readFile(path) {
    logger.log(`File ${path} will be async reading..`);

    fs.readFile(path, 'utf8', (err, data) => {
        if (err) throw err;

        logger.log(`File ${path} was read. Content: ${data}`);
    });

    msg = `File ${path} will be async reading...`;
    logger.log(msg);

    return msg;
}

async function readFileAwaiting(path) {
    logger.log(`File ${path} will be async reading and awaiting...`);

    const data = await fsAwait.readFile(path, 'utf8');

    msg = `File ${path} was read and awaited for it. Content: ${data}`;
    logger.log(msg);

    return msg;
}

module.exports = { readFile, readFileAwaiting };