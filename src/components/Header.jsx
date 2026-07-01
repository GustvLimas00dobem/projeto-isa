import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

export default function Header() {
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <header className="site-header">
      <Link className="brand" to="/home" aria-label="Ir para a home">
        <span className="brand-mark" aria-hidden="true">
          ✿
        </span>
        <span>Florisa</span>
      </Link>

      <button
        className="cart-button"
        type="button"
        onClick={() => setIsCartOpen(true)}
        aria-label={`Abrir carrinho com ${cartCount} itens`}
      >
        <span aria-hidden="true">🛒</span>
        <span className="cart-count">{cartCount}</span>
      </button>
    </header>
  );
}
