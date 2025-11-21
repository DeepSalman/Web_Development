//Creating a server :
const http = require('http');
const fs = require('fs');
const port = 3000;
const hostName = '127.0.0.1';


const handleReadfile = (statuscode,filelocation)=>{
    fs.readFile(filelocation,(err,data)=>{
            response.writeHead(statuscode,{"Content-type":"text/html"});
            response.write(data);
            response.end();
        })
}
const server2 = http.createServer((request,response)=>{
    //For home page
    if(request.url==="/"){
        handleReadfile(200,"Htmlpages/home.html")
    }
        
    
    //For About page
    if(request.url==="/about"){
        handleReadfile(200,"Htmlpages/about.html")
    }
    //For contact page
    if(request.url==="/contact"){
        handleReadfile(200,"Htmlpages/contact.html")
    }
})



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