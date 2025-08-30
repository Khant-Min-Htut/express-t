import express from "express";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

const mockUsers = [
  { id: 1, username: "keo", displayName: "keo" },
  { id: 2, username: "keo1", displayName: "keo1" },
  { id: 3, username: "keo2", displayName: "keo2" },
];

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

app.post("/api/users", (req, res) => {
  console.log(req.body);
  const { body } = req;
  const newUser = { id: mockUsers[mockUsers.length - 1].id + 1, ...body };
  mockUsers.push(newUser);
  return res.status(201).send(newUser);
});

app.get("/api/users/:id", (req, res) => {
  console.log(mockUsers);
  const parsedId = parseInt(req.params.id);
  console.log(parsedId);
});

app.put("/api/users/:id", (req, res) => {
  const {
    body,
    params: { id },
  } = req;

  const parsedId = parsedId(id);
  if (isNaN(parsedId)) return res.sendStatus(400);
  const findUserIndex = mockUsers.findIndex((users) => users.id === parsedId);
  if (findUserIndex === -1) return res.sendStatus(404);
});

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});

// localhost: 3000
// localhost: 3000/users
// localhost: 3000/products
