const http = require('http');
const fs = require('fs');

// Define server logic
const server = http.createServer((req, res) => {
  // Read the contents of db.json
  fs.readFile('db.json', 'utf8', (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Internal Server Error');
      return;
    }
    // Set the response headers
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    // Send the contents of db.json as the response
    res.end(data);
  });
});

// Define the port number
const PORT = process.env.PORT || 3001;

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Watch for changes to db.json
fs.watchFile('db.json', (curr, prev) => {
  console.log('db.json has been modified');
  // You can update your server's response logic here
});
