const http = require('http')
// const fs = require('fs')
http.createServer(function(req,res){
    // res.writeHead(200,{'Content-type ':'text/html'});
    // fs.readFile('input-project.html', function(error,data){
    //     if (error){
    //         res.writeHead(404)
    //         res.write('Error: File not found')
    //     } else{
    //         res.write(data)
    //     }

        res.end("Welcone to new world")
    // })
}).listen(9000)