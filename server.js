const http = require("http");
const socketIo = require("socket.io")

const server = http.createServer((req, res) => {
    res.end("Hello server js")
})

server.listen(3000, () => {
    console.log("Salom server man 3000 portdaman");
})


const io = socketIo.listen(server);


io.sockets.on("connection", (socket) => {
    console.log("Client ulandi");


    socket.on("SalomBer", (data) => {
        console.log("Salom foydalanuvchi man serverdan javobman");
        console.log(data);
    });

    // setTimeout(() => {
    //     socket.emit("city", {city: "Tashkent"})
    // }, 2000)

    socket.on("user", (data) => {
        // console.log(data);

        socket.emit("ali", {name: data.name})
    })


    socket.on("disconnect", (socket) => {
        console.log("Klient chiqdi !!!!!!");
    })
})