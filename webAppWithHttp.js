
const http= require("http");

const server = http.createServer((req,res) => {
    if (req.url === "/"){
        res.write("Hello World");
        res.end();
    }
    if (req.url === "/api/courses"){
        res.write(JSON.stringify([1,2,3,4,5,6,7,8]));
        res.end();
    }
});

// server.on("connection", (socket) => {
//     console.log("New Connection")
// })



server.listen(3000);
console.log("Server is listening port:3000");

