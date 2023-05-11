import express from "express";
import path from "path";

const app = express(); // bas itna hi karna hai aur server start

app.get("/", (req, res) => {
  // sendFile ka use
  const pathLocation = path.resolve();

  res.sendFile(path.join(pathLocation, "./index.html"));
});

app.listen(5000, () => {
  console.log("server is working");
});




// *** Notes ****

// import express from "express";
// import path from "path";

// const app = express(); // bas itna hi karna hai aur server start

// app.get("/getproducts", (req, res) => {
//   // res.send("Hi");
//   // res.sendStatus(400);
//   // res.json({
//   //     sucess: true,
//   //     products: [],
//   // })

//   // res.status(400).send("Meri Marzi")
//   // send or json mein difference yehi hai ki json pura jo bhi bracket ke andar rahta hai usko dikhata hai jabki send "iske andar ka text hi dikhata hai"

//   // sendFile ka use
//   const pathLocation = path.resolve();
//   console.log(path.join(pathLocation, "nice"));
//   res.sendFile(path.join(pathLocation, "./index.html"));
// });
