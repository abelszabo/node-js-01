const logger = require('./logger');
const math = require('./math');
const fh = require('./fileHandler');
const http = require('http');

logger.log("Hello Node.js!");
logger.log(math.add(2, 3));

fh.readFile('resources/file.txt')

const server = http.createServer((req, res) => {
    res.write("Hello World!\n\n");
    res.write(fh.readFile('resources/file.txt'));
    fh.readFileAwaiting('resources/file.txt');
    res.end();
});

server.listen(3000, () => {
    logger.log("Server fut a 3000-es porton");
});