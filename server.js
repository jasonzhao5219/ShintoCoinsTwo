var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static( __dirname + '/shintocoinsApp/dist' ));
// Setting our Views Folder Directory
// app.set('views', path.join(__dirname, './views'));
// // Setting our View Engine set to EJS
// app.set('view engine', 'ejs');
// Routes
// Root Request
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');

app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./shintocoinsApp/dist/index.html"))
});

app.listen(8000, function() {
    console.log("listening on port 8000");
})