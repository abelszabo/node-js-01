const math = require('./math');
const fh = require('./fileHandler');

console.log("Hello Node.js!");
console.log(math.add(2, 3));

fh.readFile('resources/file.txt')

const http = require('http');

const server = http.createServer((req, res) => {
    res.write("Hello World");
    res.write(fh.readFile('resources/file.txt'));
    res.end();
});

server.listen(3000, () => {
    console.log("Server fut a 3000-es porton");
});