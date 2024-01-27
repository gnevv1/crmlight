// module.exports =function (app){
// var sqlite3 = require('sqlite3').verbose();
// var db = new sqlite3.Database('telecom.sqlite3');

// app.get("/", (req, res) => { 
//   db.serialize(function() {

//  db.all('SELECT * FROM telecom', function(err, row) {
//  console.log(row);
//  });
// });
// db.close();
// })}