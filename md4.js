const http = require('http')
const fs = require('fs');
const { isMainThread } = require('worker_threads');
const port =4000
const server = http.createServer((req, res)=>{
    res.writeHead(200,{'Content-type ':'text/html'});
    fs.readFile('input-project.html', function(error,data){
        if (error){
            res.writeHead(404)
            res.write('Error: File not found')
        } else{
            res.write(data)
        }
        res.end()
    })
})
server.listen(port, function(error){
      if(error){
          console.log("someting went wrong", error)
      }  else{
          console.log("server is listening on port "+ port)
      }       
})