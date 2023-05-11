import express from "express";
import path from "path";
const app = express();

// Setting up static file
// we cannot use middleware directly so we have to use app.use
app.use(express.static(path.join(path.resolve(), "public")));

// Setting up View Engine // first method
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { name: "wamit" }); // 1st method

  // res.render("index.ejs");    // or we can directly write the name of the file with extension


  // when we define the static file then we can use the direct send file

  
  // res.sendFile("index");
});

app.listen(5000, () => {
  console.log("Index3.js server is working");
});
