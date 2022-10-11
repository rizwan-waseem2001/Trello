const http = require('http');
const port = process.env.PORT || 2301;
const fs = require('fs');

const server = http.createServer((req,res) => {


    console.log(req.url)
    
    res.statuscode = 200;
    res.setHeader('Content-type' , 'text/html');
    if(req.url == '/'){

            
    res.statuscode = 200;
    res.end('<h1> HELLO WORLD </h1> <br> <p> THIS IS NODE JS </p>');

    }
    else  if(req.url == '/about'){
        
            
    res.statuscode = 200;
    res.end('<h1> ABOUT WORLD </h1> <br> <p> ABOUT NODE JS Okay </p>');
    
    
    }

    else  if(req.url == '/hello'){
        
            
        res.statuscode = 200;

        const data = fs.readFileSync('index.html');
        res.end(data.toString());
        
        
        }

    else{
        
    res.statuscode = 404;
    res.end('<h1> NOT FOUND </h1> <br> ');
    }



})

server.listen(port, () => {

    console.log('SERVER IS RUNNING ON PORT ' + port);

});