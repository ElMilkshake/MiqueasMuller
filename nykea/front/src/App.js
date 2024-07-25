import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './componentes/layout/Footer';
import Header from './componentes/layout/Header';
import DecoracionesPage from './pages/DecoracionesPage';
import NosotrosPage from './pages/NosotrosPage';
import IndexPage from './pages/IndexPage';
import DiseñosPage from './pages/DiseñosPage';
import ContactoPage from './pages/ContactoPage';
import LinkNav from './componentes/layout/LinkNav';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <MenuConceptos/>
          <Route path="/" element={<IndexPage />} />
          <Route path="/DecoracionesPage" element={<DecoracionesPage />} />
          <Route path="/NosotrosPage" element={<NosotrosPage />} />
          <Route path="/DiseñosPage" element={<DiseñosPage />} />
          <Route path="/ContactoPage" element={<ContactoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
