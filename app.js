const fs = require("fs");

let data = fs.readFileSync(__dirname + "/tasks.json", "utf-8");

console.log(data);
