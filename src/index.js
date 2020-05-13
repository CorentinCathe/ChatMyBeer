const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const port = process.env.PORT || 3000;

const bodyParser = require("body-parser");
const database = require("./app/config/dbconfig");

process.on("exit", function(code) {
  return console.log(`About to exit with code ${code}`);
});

// API
database.init.then(db => {
  http.listen(port, function() {
    console.log("Server listening on port : " + port);
  });

  app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
  app.use(bodyParser.json());

  /* Router configuration */
  const REST_API_ROOT = "/api";
  app.use(REST_API_ROOT, require("./app/routes/router"));

  //accÃÂ¨s aux pages statiques
  app.use(express.static(__dirname + "/static"));
});

//websocket
let content = {};
// let content = [];
function onConnection(socket) {
  socket.on("leave-room", user => {
    if (user) {
      let message = {
        user: "INFO",
        text: user + " just left"
      };
      socket.broadcast.to(socket.room).emit("broadcast-new-data", message);
    }
    socket.leave(socket.room);
  });

  socket.on("join-room", room => {
    socket.join(room);
    socket.room = room;
    if (!content[room]) {
      content[room] = [];
    }
    socket.emit("init-data", content[room]);
  });

  socket.on("new-data", data => {
    if (!content[data.room]) {
      content[data.room] = [];
    }
    content[data.room].push(data.message);
    // content.push(data);
    // socket.broadcast.emit("broadcast-new-data", data);
    socket.broadcast.to(data.room).emit("broadcast-new-data", data.message);
  });
}

io.on("connection", onConnection);
