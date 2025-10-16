const http=require('http')
const server =http.createServer((req,res)=>{
    res.end("HTTP GET Request")
})
server.listen(3000,()=>{
    console.log("HTTP Srver Started");
    
})
