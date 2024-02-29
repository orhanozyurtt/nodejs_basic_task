const http = require("http");

const port = 5000;

const server = http.createServer((req, res) => {
  const url = req.url;
  console.log(url);

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h2>Welcome Home Page</h2>");
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h2>Welcome About</h2>");
  } else if (url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h2>Welcome Contact</h2>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h2>404 Not found page </h2>");
  }
});

server.listen(port, () => {
  console.log(`Sunucu port ${port} de başlatıldı`);
});
