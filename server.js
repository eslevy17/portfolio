const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/client/dist/client'));

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./client/dist/client/index.html"))
});

app.listen(8000, function() {
    console.log("Listening on port 8000.")
})