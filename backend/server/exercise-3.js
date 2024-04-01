// https://www.digitalocean.com/community/tutorials/how-to-create-a-web-server-in-node-js-with-the-http-module
// servidor que serve arqivos csv
const http = require("http");
const host = 'localhost';
const port = 8000;
const requestListener = (req,res) => {
    res.setHeader("Content-Type", "text/csv")
    res.setHeader("Content-Disposition","attachment;filename=oceanpals.csv");
    res.writeHead(200);
    res.end(`id,name,email \n 1,Sammy Sammy,shark@ocean.com`);
};
const server= http.createServer(requestListener);
server.listen(port,host,()=>{
    console.log(`Server is running on http://${host}:${port}`);
})