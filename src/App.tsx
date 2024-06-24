import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './pages/Home/Home';
import { Mapping } from './pages/Mapping/Mapping';
import { RequireAuth } from './contexts/Auth/RequireAuth';

const App: React.FC = () => {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/mapeamento' element={
          <RequireAuth> 
            <Mapping/> 
          </RequireAuth>
          } />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
