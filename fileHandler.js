const fs = require('fs');

function readFile(path) {
    console.log("xxx");
    time = (new Date()).getTime();
    msg = `${time} File ${path} will be async reading..`;
    console.log(msg);

    fs.readFile(path, 'utf8', (err, data) => {
        if (err) throw err;
        time = (new Date()).getTime();
        console.log(`${time} File ${path} was readed`);
        console.log(data);
    });

    time = (new Date()).getTime();
    msg = `${time} File ${path} will be async reading...`;
    console.log(msg);
    return msg;
}

module.exports = { readFile };