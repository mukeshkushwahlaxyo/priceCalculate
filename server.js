import http from "http";
import app from "./app.js";
import * as dotenv from "dotenv";
import { Server } from "socket.io";

dotenv.config();

const port = process.env.PORT || 5000;

console.log("Port:", port);

const server = http.createServer(app);

server.listen(port);

const corsOptions = { cors: { origin: "*" } };

const io = new Server(server, corsOptions);

io.sockets.on("connection", (socket) => {
  console.log(
    "client connect with id :",
    socket.id,
    socket.handshake.query.loggeduser
  );

  socket.on("echo", (data) => {
    io.sockets.emit("message", data);
  });

  socket.on("disconnect", () => {
    console.log("socket disconnect !");
  });
});

app.set("socketio", io);

// Make io accessible to our router
app.use((req, res, next) => {
  req.io = io;
  return next();
});

export default io;
