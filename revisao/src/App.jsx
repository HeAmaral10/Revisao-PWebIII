import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import ListaUsuarios from './pages/ListaUsuarios';
import Contador from './pages/Contador';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usuarios" element={<ListaUsuarios />} />
        <Route path="/contador" element={<Contador />} />
      </Routes>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/usuarios">Lista de Usuários</Link></li>
          <li><Link to="/contador">Contador</Link></li>
        </ul>
      </nav>
    </BrowserRouter>
  )
}

export default App;
