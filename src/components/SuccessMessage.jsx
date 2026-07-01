import { useCart } from '../context/CartContext.jsx';

export default function SuccessMessage() {
  const { setSuccessMessage, successMessage } = useCart();

  if (!successMessage) {
    return null;
  }

  return (
    <div className="success-toast" role="status">
      <span>{successMessage}</span>
      <button
        className="icon-button"
        type="button"
        onClick={() => setSuccessMessage('')}
        aria-label="Fechar mensagem"
      >
        ×
      </button>
    </div>
  );
}
