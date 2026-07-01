import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '' });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((currentData) => ({ ...currentData, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    navigate('/home');
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label>
        Nome
        <input
          name="name"
          type="text"
          placeholder="Seu nome"
          value={formData.name}
          onChange={handleChange}
        />
      </label>

      <label>
        E-mail
        <input
          name="email"
          type="email"
          placeholder="voce@email.com"
          value={formData.email}
          onChange={handleChange}
        />
      </label>

      <button className="primary-button" type="submit">
        Entrar
      </button>
    </form>
  );
}
