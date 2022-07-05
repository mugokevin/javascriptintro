// let fs = require('fs')
// let data = fs.readFileSync('input.txt')
//
// console.log(data.toString())

// const m = new Promise(function (resolve, reject){
//     const x = 50 + 50;
//     if (x==100)
//         resolve("executed and resolved successfully")
//     else
//         reject("rejected");
// });
// m.then(function(fromResolve){
//     document.write("Promise is"+fromResolve);
// }).catch(function(fromReject){
//     document.write("Promise is "+fromReject);
// });

// const m =new Promise(function(resolve, reject){
//     const x= 50 + 50;
//     if(x==7)
//         resolve(" executed and resolved successfully");
//     else
//         reject("rejected");
// });
// m.then(function(fromResolve){
//     document.write("Promise is"+fromResolve);
// }).catch(function(fromReject){
//     document.write("Promise is "+fromReject);
// });

const lala = new Promise(function (resolve, reject){
    let y = 5000/50
    if (y==60)
        resolve("iko sawa")
    else
        reject("ishia")
})
lala.then(function (fromResolve){
    document.write("promise" + fromResolve)
})
lala.catch(function (fromReject){
    document.write("promise" + fromReject)
})