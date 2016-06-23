var express = require('express');
var app = express();

app.use(express.static(__dirname + "/app"));
app.listen(process.env.PORT || 3000);
console.log("Server up on port 3000");