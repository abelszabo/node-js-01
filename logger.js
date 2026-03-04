export function log(message) {
    const time = (new Date()).getTime();
    console.log(`${time} ${message}`);
}

//module.exports = { log };