const http = require('http');
const port = 3000;
const hostname = '127.0.0.1'

const server = http.createServer((request,response)=>{
    response.end("Hello, Im your first server");
});

server.listen(port,()=>{
    console.log(`Server is running successfully at http://${hostname} port:${port}:`);
})