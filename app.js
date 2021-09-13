const fs = require("fs");

//Analyze the size of the array of arguments, default is 2 items, validate if it does not have 3, it is because no parameter was sent
if (process.argv.length < 3) {
  console.log("Atención - Tienes que pasar una acción");
} else {
  let option = process.argv[2]; //the parameter sent is located in position 3 and is assigned to a variable
  switch (option) {
    case "listar":
      fs.readFile(__dirname + "/tasks.json", "utf-8", (err, data) => {
        if (err) throw err;
        let task = JSON.parse(data);
        console.log(task);
      });
      break;
    default:
      console.log("No entiendo qué quieres hacer.");
      break;
  }
}
