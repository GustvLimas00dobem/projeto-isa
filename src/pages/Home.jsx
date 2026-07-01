import CartDrawer from '../components/CartDrawer.jsx';
import FlowerCard from '../components/FlowerCard.jsx';
import Header from '../components/Header.jsx';
import SuccessMessage from '../components/SuccessMessage.jsx';
import { flowers } from '../data/flowers.js';

export default function Home() {
  return (
    <div className="home-page">
      <Header />

      <main>
        <section className="catalog-hero">
          <div>
            <p className="eyebrow">Coleção da estação</p>
            <h1>Flores frescas para todos os gestos</h1>
          </div>
          <p>
            Escolha seus arranjos favoritos e monte um pedido simulado em poucos
            cliques.
          </p>
        </section>

        <section className="catalog-grid" aria-label="Catálogo de flores">
          {flowers.map((flower) => (
            <FlowerCard flower={flower} key={flower.id} />
          ))}
        </section>
      </main>

      <CartDrawer />
      <SuccessMessage />
    </div>
  );
}
