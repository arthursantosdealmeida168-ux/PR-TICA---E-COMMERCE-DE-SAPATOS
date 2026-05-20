const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const shoes = [
  {
    id: 1,
    nome: "Air Max 90",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRceMnT9l-Pq75muix021m-RvpjA7Lh0mfWyw&s",
    marca: "Nike",
    preco: 699.90,
    modelo: "Esportivo",
    cores: ["Preto", "Branco"],
    estoque: 20,
    tamanhos: [38,39,40,41,42],
    promocao: true
  },
  {
    id: 2,
    nome: "Ultra Boost",
    img : "https://static.netshoes.com.br/produtos/tenis-adidas-ultraboost-5-masculino/06/FB9-8787-006/FB9-8787-006_zoom9.jpg?ts=1779185954&ims=544x",
    marca: "Adidas",
    preco: 799.90,
    modelo: "Running",
    cores: ["Azul", "Branco"],
    estoque: 10,
    tamanhos: [39,40,41],
    promocao: false
  }
];

app.get("/api/shoes", (req, res) => {

  const visibleProducts = shoes.map(
    ({ estoque, ...shoe }) => shoe
  );

  res.json(visibleProducts);
});

app.listen(3001, () => {
  console.log(
    "Servidor rodando em http://localhost:3001"
  );
});