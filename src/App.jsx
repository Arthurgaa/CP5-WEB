import Nav from './components/Nav';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Navbar no topo */}
      <Nav />
      
      {/* Outlet (conteúdo da página) ocupa o espaço flexível */}
      <div style={{ flexGrow: 1 }}>
        <Outlet />
      </div>
      
      {/* Footer no final da página */}
      <Footer />
    </div>
  );
}

export default App;
