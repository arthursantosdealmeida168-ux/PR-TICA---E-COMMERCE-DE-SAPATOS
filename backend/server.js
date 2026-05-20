const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let shoes = [
  {
    id: 1,
    nome: "Air Runner",
    marca: "Nike",
    preco: 499.9,
    modelo: "Esportivo",
    cores: ["Preto", "Branco"],
    estoque: 10,
    tamanhos: [38, 39, 40, 41],
    promocao: true
  }
];

app.get("/api/shoes", (req, res) => {
  res.json(shoes);
});

app.get("/api/shoes/:id", (req, res) => {
  const shoe = shoes.find(s => s.id == req.params.id);

  if (!shoe) {
    return res.status(404).json({
      message: "Produto não encontrado"
    });
  }

  res.json(shoe);
});

app.post("/api/shoes", (req, res) => {
  const newShoe = {
    id: Date.now(),
    ...req.body
  };

  shoes.push(newShoe);

  res.status(201).json(newShoe);
});

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
