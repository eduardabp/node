const path = require("path");

const fs = require("fs");

// Create folder

try {
    fs.mkdirSync(path.join(__dirname, "client"));
  } catch (err) {
    console.error("Error code :", err.code);
    console.error(err.message);
  }
  
  // Creating and writing index.html and style.css
  try {
    const filePath = path.join(__dirname, "client", "index.html");
  
    fs.writeFileSync(filePath, "<head><link href='style.css' rel='stylesheet'></head>");
  
    fs.appendFileSync(filePath, "<body><h1>This is my main page</h1></body>");
  } catch (err) {
    console.error(err.code);
    console.error(err.message);
  }

  try {
    const filePath = path.join(__dirname, "client", "style.css");
  
    fs.writeFileSync(filePath, "body {background-color: blue}");
  } catch (err) {
    console.error(err.code);
    console.error(err.message);
  }

