let mysql = require('mysql')
let con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:""
})
con.connect(function (err){
    if (err) throw err
    console.log("you have successfully connected")
})