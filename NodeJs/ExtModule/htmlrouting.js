//Creating a server :
const http = require('http');
const fs = require('fs');
const port = 3000;
const hostName = '127.0.0.1';


const server = http.createServer((request,response)=>{
    //For home page
    if(request.url==="/")[
        fs.readFile("Htmlpages/home.html",(err,data)=>{
            response.writeHead(200,{"Content-type":"text/html"});
            response.write(data);
            response.end();
        })
    ]
    //For About page
    else if(request.url==="/about")[
        fs.readFile("Htmlpages/about.html",(err,data)=>{
            response.writeHead(200,{"Content-type":"text/html"});
            response.write(data);
            response.end();
        })
    ]
    //For contact page
    else if(request.url==="/contact")[
        fs.readFile("Htmlpages/contact.html",(err,data)=>{
            response.writeHead(200,{"Content-type":"text/html"});
            response.write(data);
            response.end();
        })
    ]
})

server.listen(port,hostName, ()=>{
    console.log(`server is running at http://${hostName}:port:${port}`);
})

///npm install nodemon