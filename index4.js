import express from "express";
import path from "path";
const app = express();

const users = [];

// Using Middleware
app.use(express.static(path.join(path.resolve(), "public")));

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index2");
});

app.get("/success", (req, res) => {
  res.render("success");
});

app.post("/contact", (req, res) => {
  // jab post request jayega toh /contact pe jayega par /contact koi route hi nahi hai so hume action mein /contact dalana padega
  
  // console.log(req.body);
  // console.log(req.body.name)  // we can get the particular key value also

  users.push({ userName: req.body.name, email: req.body.email }); // push karne ke baad hum bahut kuch kar sakte hain like redirect kar sakte hain kisi bhi page par

  // res.render("success");
  res.redirect("/success");
});

app.get("/users", (req, res) => {
  res.json({
    users,
  });
});

app.listen(5000, () => {
  console.log("Index3.js server is working");
});
