import LoginForm from '../components/LoginForm.jsx';

export default function Login() {
  return (
    <main className="login-page">
      <section className="login-shell">
        <div className="login-hero">
          <span className="flower-symbol" aria-hidden="true">
            ✿
          </span>
          <p className="eyebrow">Floricultura online</p>
          <h1>Florisa</h1>
          <p>
            Buquês, arranjos e flores selecionadas para transformar momentos em
            presentes memoráveis.
          </p>
        </div>

        <div className="login-panel">
          <p className="eyebrow">Acesso rápido</p>
          <h2>Entrar na loja</h2>
          <LoginForm />
        </div>
      </section>
    </main>
  );
}
