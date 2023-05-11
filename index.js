// ******* 1. Starting a server using http  *********
// const http = require("http");
import http from "http";

//  ********** 2. Different method for  import *****

// 1. For single or multiple import
// const gfName = require("./feature")
// import gfName from "./feature.js"
// import {gfName2, gfName3} from "./feature.js"

// 2. For pura import we will use * and it will give as obj
// import * as myObj from "./feature.js"

// console.log(myObj);
// console.log(myObj.gfName2);

// ******** 3. How to get the function *****

import { generateLovePercent } from "./feature.js";

// console.log(generateLovePercent())

// ****** 1. Module *********
// fs Module
import fs from "fs";

// async callback function 
//this way it is not working so we do it in the home res
// const home = fs.readFile("./index.html", ()=> {
//     console.log("File Read");
// })
// console.log(home);

// sync way to callback the function
const home = fs.readFileSync("./index.html");
// console.log(home);


// ******** 2. path module ****
// import path from "path";

// console.log(path.extname("/home/random/index.html"))
// console.log(path.dirname("/home/random/index.html"))


const server = http.createServer((req, res) => {
  // res.end("noice")
  // res.end("<h1>Noice to meet u</h1>")

//   console.log(req.method);

  if (req.url === "/about") {
    res.end(`<h1>Love is ${generateLovePercent()}</h1>`);

    //   } else if (req.url === "/") {
    //     fs.readFile("./index.html", (err, home) => {
    //       res.end(home);
    //     });

  } else if (req.url === "/") {
    res.end("home");
  } else if (req.url === "/contact") {
    res.end("<h1>contact page</h1>");
  } else {
    res.end("<h1>page not found</h1>");
  }
});

server.listen(5000, () => {
  console.log("Server is working");
});
