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

    let sql = "INSERT INTO students (id,Name,Email,Age) VALUES(2,'mike','mike@gmail.com',30)"
    con.query(sql,function (err,result){
        if (err) throw err
        console.log("data iserted successfully")
    })
})