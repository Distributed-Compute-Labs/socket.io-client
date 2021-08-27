const io = require("../..");
const socket = io("http://localhost:3211", {
  autoUnref: true,
});

socket.on("open", () => {
  console.log("open");
});

setTimeout(() => {
  console.log("process should exit now");
}, 500);