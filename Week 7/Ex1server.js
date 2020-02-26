const http = require("http");

const getSecureRandoms = require("./Ex1b");

const endpoint = "/api/securerandoms";

const server = http.createServer((request, response) => {
  if (request.url === endpoint) {
    response.setHeader("Content-Type", "application/json");
    //Return a response with OS-info, using the code implemented in part-a
    (async () => {
      const randoms = await getSecureRandoms([24, 20, 16, 12, 8, 4]);
      console.log(randoms);
      response.write(
        JSON.stringify(
          { title: "6 secure randoms", randoms: [...randoms] },
          null,
          2
        )
      );
      return response.end();
    })();
  }
  if (request.url === "/") {
    response.setHeader("Content-Type", "text/html");
    response.write(`<h2>Simple node HTTP server demo</h2>
        <p>Exposes this endpoint <a href="http://localhost:3000${endpoint}"><code>${endpoint}</code></a></p>
      `);
    return response.end();
  }
});
server.on("connection", socket => {
  console.log(socket.remoteAddress);
});
server.listen(3000);
console.log("listening on 3000");