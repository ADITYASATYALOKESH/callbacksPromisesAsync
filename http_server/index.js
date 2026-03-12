import http from 'http';
const server=http.createServer((req,res)=>{
    console.log(req.method);
    if(req.url==="/users")
    {
        res.writeHead(200,{"content-Type":"application/json"});
        res.end(JSON.stringify({name:"Aditya"}));
    }
    else
    {
        res.writeHead(200,{"content-Type":"text/plain"});
        res.end(`<h1>Hi is This is Aditya<h1>`);
    }
});
server.listen(3003,()=>{
    console.log(`server is started localhost:3003`);
})