var http=require("http");

const server=http.createServer(function(req,res)
{
    console.log("Server running1");
    res.write("hi friend , I am Jega");
    console.log("Server running");
    res.end();
    
})
server.listen(8000,'localhost',()=>{
    console.log("Server running");
},()=>{
    console.log("Server running3");
});