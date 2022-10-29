const fs = require("fs");
const http = require("http");

// Reading our json file
const data = JSON.parse(fs.readFileSync(`${__dirname}/data.json`));
// Creating the web server
const server = http.createServer((req, res) => {
  const endpoint = req.url;
  if (endpoint === "/" || endpoint === "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
    });

    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("<h1>Page Not Found</h1>");
  }
});

// Listening on a port
const port = 8000;
server.listen(port, "localhost", () => {
  console.log(`Listening to a request on port ${port}...`);
});
