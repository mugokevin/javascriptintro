let mysql = require('mysql')
let con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:""
})

con.connect(function (err){
    if (err) throw err
    console.log("connection is successfully")
    con.query("CREATE DATABASE MUGO", function (err,result){
        if (err) throw err
        console.log("MUGO is online")
    })
})