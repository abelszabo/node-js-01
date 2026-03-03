function log(message) {
    time = (new Date()).getTime();
    console.log(`${time} ${message}`);
}

module.exports = { log };