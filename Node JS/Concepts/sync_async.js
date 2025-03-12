const fs = require("fs")
const os = require("os")


// *!Blocking Code (Sync) {1 - result - 2}
// console.log("1")
// const result = fs.readFileSync("./writeTest.txt", "utf-8")
// console.log(result);
// console.log("2")

// *!Non - Blocking Code (Async) {1 - 2 - result}
// console.log("1")
// fs.readFile("./writeTest.txt", "utf-8", (err, result) => console.log(result));
// console.log("2")

// *! Thread Size Depends = CPU Cores
//console.log(os.cpus().length)