import { useCart } from '../context/CartContext.jsx';

function formatCurrency(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

export default function CartDrawer() {
  const {
    cartTotal,
    checkout,
    isCartOpen,
    items,
    removeFromCart,
    setIsCartOpen,
  } = useCart();

  return (
    <>
      <div
        className={`drawer-backdrop ${isCartOpen ? 'is-visible' : ''}`}
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />

      <aside className={`cart-drawer ${isCartOpen ? 'is-open' : ''}`}>
        <div className="drawer-header">
          <div>
            <span className="eyebrow">Carrinho</span>
            <h2>Sua seleção</h2>
          </div>
          <button
            className="icon-button"
            type="button"
            onClick={() => setIsCartOpen(false)}
            aria-label="Fechar carrinho"
          >
            ×
          </button>
        </div>

        {items.length === 0 ? (
          <p className="empty-cart">Seu carrinho está vazio.</p>
        ) : (
          <div className="cart-items">
            {items.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>
                    {item.quantity} × {formatCurrency(item.price)}
                  </p>
                </div>
                <button
                  className="remove-button"
                  type="button"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remover
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="drawer-footer">
          <div className="cart-total">
            <span>Total</span>
            <strong>{formatCurrency(cartTotal)}</strong>
          </div>
          <button
            className="primary-button"
            type="button"
            onClick={checkout}
            disabled={items.length === 0}
          >
            Finalizar compra
          </button>
        </div>
      </aside>
    </>
  );
}
