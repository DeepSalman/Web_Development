//Http server request code 
//informational Response(100-199)
//successful response(200-299)
//Redirects(300-399)
//Client Errors(400-499)
//Server error(500-500)

const http = require('http');
const port = 3000;
const hostname = '127.0.0.1'

const server = http.createServer((request,response)=>{
    console.log(request.statusCode);
    response.writeHead(220,{'content-Type':'text/html'})
    response.write("<h1>Hello</h1>");
    response.end();
});

server.listen(port,()=>{
    console.log(`Server is running successfully at http://${hostname} port:${port}:`);
})

