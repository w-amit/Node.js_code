import express from "express";
import mongoose from "mongoose";
import path from "path";
const app = express();


// connecting the database
mongoose
  .connect("mongodb://127.0.0.1:27017", {
    dbName: "database",
  })
  .then(() => console.log("Database connected"))
  .catch((e) => console.log(e));

// For storing the data in the mongodb we have to make a Schema
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
});

// collection ko call karne ke liye model banana padega
const Message = mongoose.model("Message", messageSchema);

// app.get("/add", async (req, res) => {
//   await Message.create({ name: "Amit2", email: "sample2@gmail.com" })
//     res.send("noiice");

// });

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

// app.post("/contact", async (req, res) => {
//   //   const messageData = { name: req.body.name, email: req.body.email };
//   //   console.log(messageData);

//   //   await Message.create(messageData);   // aise object bana kar kar sakte hain ya direct like

//   await Message.create({ name: req.body.name, email: req.body.email });

//   res.redirect("/success");
// });

app.post("/contact", async (req, res) => {
  const { name, email } = req.body;
  await Message.create({ name, email });

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
