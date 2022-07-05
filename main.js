let http = require("http")

http.createServer(function (request,response){
    response.writeHead(200,{'Content-Type': 'text/plain'})
    response.end('My javascript node class\n')
}).listen(8001)

console.log('Server is runnung at http://127.0.0.1:8001/')