var express = require("express");
var app = express();

app.use(express.static("public")).listen(3000);
console.log('server is running...')