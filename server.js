const path = require("path");

const fs = require("fs");

// Create client folder

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

  // Create contact folder

  try {
    fs.mkdirSync(path.join(__dirname, "client", "contact"));
  } catch (err) {
    console.error("Error code :", err.code);
    console.error(err.message);
  }
  
  // Creating and writing index.html and style.css
  try {
    const filePath = path.join(__dirname, "client", "contact", "index.html");
  
    fs.writeFileSync(filePath, "<head><link href='style.css' rel='stylesheet'></head>");
  
    fs.appendFileSync(filePath, "<body><h1>This is the contact page</h1></body>");
  } catch (err) {
    console.error(err.code);
    console.error(err.message);
  }

  try {
    const filePath = path.join(__dirname, "client", "contact", "style.css");
  
    fs.writeFileSync(filePath, "body {background-color: yellow}");
  } catch (err) {
    console.error(err.code);
    console.error(err.message);
  }

      // Create about folder

try {
    fs.mkdirSync(path.join(__dirname, "client", "about"));
  } catch (err) {
    console.error("Error code :", err.code);
    console.error(err.message);
  }
  
  // Creating and writing index.html and style.css
  try {
    const filePath = path.join(__dirname, "client", "about", "index.html");
  
    fs.writeFileSync(filePath, "<head><link href='style.css' rel='stylesheet'></head>");
  
    fs.appendFileSync(filePath, "<body><h1>This is the about me page</h1></body>");
  } catch (err) {
    console.error(err.code);
    console.error(err.message);
  }

  try {
    const filePath = path.join(__dirname, "client", "about", "style.css");
  
    fs.writeFileSync(filePath, "body {background-color: red}");
  } catch (err) {
    console.error(err.code);
    console.error(err.message);
  }

      // Create blog folder

try {
    fs.mkdirSync(path.join(__dirname, "client", "blog"));
  } catch (err) {
    console.error("Error code :", err.code);
    console.error(err.message);
  }
  
  // Creating and writing index.html and style.css
  try {
    const filePath = path.join(__dirname, "client", "blog", "index.html");
  
    fs.writeFileSync(filePath, "<head><link href='style.css' rel='stylesheet'></head>");
  
    fs.appendFileSync(filePath, "<body><h1>This is the blog page</h1></body>");
  } catch (err) {
    console.error(err.code);
    console.error(err.message);
  }

  try {
    const filePath = path.join(__dirname, "client", "blog", "style.css");
  
    fs.writeFileSync(filePath, "body {background-color: green}");
  } catch (err) {
    console.error(err.code);
    console.error(err.message);
  }