import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';

export default function App({ page }) {
  return page === 'home' ? <Home /> : <Login />;
}
