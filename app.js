// const logger = require('./logger');
// const math = require('./math');
// const fh = require('./fileHandler');
// const express = require('express');
// const http = require('http');

import * as logger from './logger.js';
import * as math from './math.js';
import * as fh from './fileHandler.js';
import express from 'express';
import * as path from "node:path";

const app = express();

//const TEST_FILE_PATH = path.resolve(process.cwd(), 'test');
const TEST_FILE_PATH = path.resolve('resources/file.txt');

logger.log("Hello Node.js!");
logger.log(math.add(2, 3));

fh.readFile(TEST_FILE_PATH)

// const server = http.createServer((req, res) => {
//     res.write("Hello World!\n\n");
//     res.write(fh.readFile(TEST_FILE_PATH));
//     fh.readFileAwaiting(TEST_FILE_PATH);
//     res.end();
// });

// server.listen(3000, () => {
//     logger.log("Server fut a 3000-es porton");
// });

app.get('/', async (req, res) => {
    //res.write(fh.readFile(TEST_FILE_PATH));
    //res.write(await fh.readFileAwaiting(TEST_FILE_PATH));
    //res.end();
    res.send(await fh.readFileAwaiting(TEST_FILE_PATH));
});

app.get('/test', (req, res) => {
    // res.send('Hello Express!');
    res.write("Hello World!\n\n");
    res.write(fh.readFile(TEST_FILE_PATH));
    fh.readFileAwaiting(TEST_FILE_PATH);
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
