import React from 'react';
import Mapping from './pages/Mapping';
import { Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Header } from './components/AllPages/Header';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <div className='flex flex-row h-screen'>
        <main className='w-full'>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path='/mapeamento' element={<Mapping />}/>
            </Routes>
        </main>
      </div>
    </>
  );
};

export default App;
