import { useCart } from '../context/CartContext.jsx';

function formatCurrency(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

export default function FlowerCard({ flower }) {
  const { addToCart } = useCart();

  return (
    <article className="flower-card">
      <img src={flower.image} alt={flower.name} />
      <div className="flower-card-content">
        <h3>{flower.name}</h3>
        <p>{flower.description}</p>
        <strong>{formatCurrency(flower.price)}</strong>
        <button
          className="secondary-button"
          type="button"
          onClick={() => addToCart(flower)}
        >
          Adicionar ao carrinho
        </button>
      </div>
    </article>
  );
}
