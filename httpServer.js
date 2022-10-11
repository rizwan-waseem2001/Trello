const http = require('http');
const port = process.env.PORT || 2300;

const server = http.createServer((req,res) => {

    console.log(req.url)
    res.statuscode = 200;
    res.setHeader('Content-type' , 'text/html');
    res.end('<h1> HELLO WORLD </h1> <br> <p> THIS IS NODE JS </p>');




})

server.listen(port, () => {

    console.log('SERVER IS RUNNING ON PORT ' + port);

});