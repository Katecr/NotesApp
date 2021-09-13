const fs = require("fs");

let read = fs.readFile(__dirname + "/tasks.json", "utf-8", (err, data) => {
  if (err) throw err;
  let task = JSON.parse(data);
  console.log(task);
});

module.exports = read;
