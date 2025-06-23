const http = require('http');
const port = 3000;

const requestHandler = (req, res) => {
  res.end('CI/CD with GitHub Actions is working! ');
};

const server = http.createServer(requestHandler);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
