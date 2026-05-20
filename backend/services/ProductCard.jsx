export default function ProductCard({ shoe }) {
  return (
    <div className="card">
      <h2>{shoe.nome}</h2>
      <p>Marca: {shoe.marca}</p>
      <p>Modelo: {shoe.modelo}</p>
      <p>Preço: R$ {shoe.preco}</p>

      <p>
        Cores:
        {shoe.cores.join(", ")}
      </p>

      <p>
        Tamanhos:
        {shoe.tamanhos.join(", ")}
      </p>

      {shoe.promocao && (
        <span className="badge">
          Promoção
        </span>
      )}
    </div>
  );
}
