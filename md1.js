// console.log("hello world");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World this is mohammadkaif');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title> CSS Display property</title>
      <style>
          header{
              margin: auto;
              width: 1200px;
              border: 2px solid red;
           }
          img{ display: block;
               margin: auto;
               width:100px;
           }
           h3{ margin: auto;
               font-size: 44px;
               text-align: center;
               font-family: 'East Sea Dokdo', cursive;
               margin: 0px;
           }
           .box{
               border: 4px solid black;
               background-color: grey;
               margin: 4px;
               padding: 23px;
               display: inline-block;
               width: 30%;
               box-sizing: border-box;
              }
              .container{
                  margin: auto;
                  width: 1200px;
  
              }
      </style>
  </head>
  <body>
      <header class="top">
                <img src="monu1.jpg" alt="img">
                <h3>Welcome to monu's site</h3>
      </header>
      <div class="container">
          <div class="box">
              <h4 class="heading">Heading</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, odit numquam quos placeat necessitatibus ab quam vitae laborum repellendus repellat voluptatum porro asperiores! A rem nemo iure itaque praesentium minima, ipsum saepe doloribus, perspiciatis delectus consequuntur accusamus voluptas odio labore repellendus quibusdam voluptatem. Quas.</p>
          </div>
          <div class="box">
              <h4 class="heading">Heading</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, odit numquam quos placeat necessitatibus ab quam vitae laborum repellendus repellat voluptatum porro asperiores! A rem nemo iure itaque praesentium minima, ipsum saepe doloribus, perspiciatis delectus consequuntur accusamus voluptas odio labore repellendus quibusdam voluptatem. Quas.</p>
          </div>
          <div class="box">
              <h4 class="heading">Heading</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, odit numquam quos placeat necessitatibus ab quam vitae laborum repellendus repellat voluptatum porro asperiores! A rem nemo iure itaque praesentium minima, ipsum saepe doloribus, perspiciatis delectus consequuntur accusamus voluptas odio labore repellendus quibusdam voluptatem. Quas.</p>
          </div>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});