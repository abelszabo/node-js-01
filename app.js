// const logger = require('./logger');
// const math = require('./math');
// const fh = require('./fileHandler');
// const express = require('express');
// const http = require('http');

import * as logger from './logger.js';
import * as math from './math.js';
import * as fh from './fileHandler.js';
import express from 'express';

const app = express();

logger.log("Hello Node.js!");
logger.log(math.add(2, 3));

fh.readFile('resources/file.txt')

// const server = http.createServer((req, res) => {
//     res.write("Hello World!\n\n");
//     res.write(fh.readFile('resources/file.txt'));
//     fh.readFileAwaiting('resources/file.txt');
//     res.end();
// });

// server.listen(3000, () => {
//     logger.log("Server fut a 3000-es porton");
// });

app.get('/', (req, res) => {

    // res.send('Hello Express!');

    res.write("Hello World!\n\n");
    res.write(fh.readFile('resources/file.txt'));
    fh.readFileAwaiting('resources/file.txt');
    res.end();
});

app.get('/sum/:p1/:p2', (req, res) => {
    const p1 = req.params.p1;
    const p2 = req.params.p2;
    const sum = math.add(p1, p2);
    const info = `${p1} + ${p2} = ${sum}`;
    logger.log(info);
    res.send(info);
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
