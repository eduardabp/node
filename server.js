console.log("Hello Wold");
console.log("This is a console log from my server.js file");
console.log(__dirname);
console.log(__filename);

const path = require("path");
// Base file name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename));

// Get property from path object
console.log(path.parse(__filename).base);

// Concatenate paths
console.log(path.join(__dirname, "test", "hello.html"));

const fs = require("fs");

// Create folder
// Creating a folder
try {
    fs.mkdirSync(path.join(__dirname, "test"));
  
    // fs.writeFileSync(path.join(__dirname, "test", "log.txt"), "Hello World")
  } catch (err) {
    console.error("Error code :", err.code);
    console.error(err.message);
  }
  
  // Creating and writing in a file
  try {
    const filePath = path.join(__dirname, "test", "log.txt");
  
    fs.writeFileSync(filePath, "Hello World!");
  
    fs.appendFileSync(filePath, " I love Node JS");
  } catch (err) {
    console.error(err.code);
    console.error(err.message);
  }
  
  // Read file
  try {
    const fileContent = fs.readFileSync(
      path.join(__dirname, "test", "log.txt"),
      "utf-8"
    );
  
    console.log(fileContent);
  } catch (err) {
    console.error(err.code);
    console.error(err.message);
  }
  
  // Rename file
  try {
    fs.renameSync(
      path.join(__dirname, "test", "log.txt"),
      path.join(__dirname, "test", "new-log.txt")
    );
  } catch (err) {
    console.error(err.code);
    console.error(err.message);
  }