const http = require('http');

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>On The Way</title>
  <style>
    * {
      box-sizing: border-box;
      font-family: Arial, Helvetica, sans-serif;
    }

    body {
      margin: 0;
      height: 100vh;
      background: #f4f4f4;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .card {
      background: #ffeb3b;
      border: 4px solid #000;
      padding: 40px 50px;
      box-shadow: 10px 10px 0 #000;
      max-width: 500px;
      text-align: center;
    }

    h1 {
      font-size: 36px;
      margin: 0 0 16px;
      color: #000;
    }

    p {
      font-size: 18px;
      margin: 0;
      color: #000;
    }

    .badge {
      display: inline-block;
      margin-top: 24px;
      padding: 8px 16px;
      background: #000;
      color: #fff;
      font-weight: bold;
      border: 3px solid #000;
      box-shadow: 4px 4px 0 #000;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>🚧 Still On The Way</h1>
    <p>This page is currently under development.</p>
    <div class="badge">Building Fullstack Stuff</div>
  </div>
</body>
</html>
`;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
}).listen(3000);

console.log("Server started on port 3000");
