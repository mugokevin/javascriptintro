let mysqql = require('mysql')
let con = mysqql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database: "MUGO"
})

con.connect(function (err){
    if (err) throw err
    console.log("successfully connected")

    let sql = "CREATE TABLE students (id INT(8),Name VARCHAR(50),Email VARCHAR(50),Age INT(10))"
    con.query(sql,function (err,result){
        if (err) throw err
        console.log("table created successfully")
    })
})