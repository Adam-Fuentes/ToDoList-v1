//todo list

const express = require('express');
const bodyPrser = require('body-parser');

const app = express();

app.get("/", function(req, res){
    
    var today = new Date();
    var currentDay = today.getDay();

    if (currentDay === 6 || currentDay === 0){
        res.send("Weekend time!!!");
    }else{
        res.sendFile(__dirname + "/index.html");
    }
});

app.listen(3000, function(){
    console.log("Server is running in Port 3000.");
});