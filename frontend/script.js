const productsContainer =
  document.getElementById("products");

async function loadProducts() {

  try {

    const shoes = await response.json();

    shoes.forEach(shoe => {

      const card = document.createElement("div");

      card.classList.add("card");

      card.innerHTML = `
        <h2>${shoe.nome}</h2>

        <p>
          <strong>Marca:</strong>
          ${shoe.marca}
        </p>

        <p>
          <strong>Modelo:</strong>
          ${shoe.modelo}
        </p>

        <p class="price">
          R$ ${shoe.preco}
        </p>

        <p>
          <strong>Cores:</strong>
          ${shoe.cores.join(", ")}
        </p>

        <p>
          <strong>Tamanhos:</strong>
          ${shoe.tamanhos.join(", ")}
        </p>

        ${
          shoe.promocao
            ? `<span class="badge">
                Promoção
              </span>`
            : ""
        }
      `;

      productsContainer.appendChild(card);
    });

  } catch (error) {

    console.error(
      "Error ao carregar produtos",
      error
    );
  }
}

loadProducts();