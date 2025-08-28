import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(201).send({ msg: "HELLO" });
});

app.get("/api/users", (req, res) => {
  res.send([
    { id: 1, username: "keo", displayName: "keo" },
    { id: 2, username: "keo1", displayName: "keo1" },
    { id: 3, username: "keo2", displayName: "keo2" },
  ]);
});

app.get("/api/products", (req, res) => {
  res.send([
    { id: 1, productName: "Chicken", price: 211 },
    { id: 2, productName: "Milk", price: 2311 },
    { id: 3, productName: "Bread", price: 2131 },
  ]);
});

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});

// localhost: 3000
// localhost: 3000/users
// localhost: 3000/products
