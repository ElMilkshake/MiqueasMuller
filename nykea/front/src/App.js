import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './componentes/layout/Header';
import Footer from './componentes/layout/Footer';
import Nav from './componentes/layout/Nav';

import DecoracionesPage from './pages/DecoracionesPage';
import NosotrosPage from './pages/NosotrosPage';
import IndexPage from './pages/IndexPage';
import DiseñosPage from './pages/DiseñosPage';
import ContactoPage from './pages/ContactoPage';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/DecoracionesPage" element={<DecoracionesPage />} />
          <Route path="/NosotrosPage" element={<NosotrosPage />} />
          <Route path="/DiseñosPage" element={<DiseñosPage />} />
          <Route path="/ContactoPage" element={<ContactoPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;