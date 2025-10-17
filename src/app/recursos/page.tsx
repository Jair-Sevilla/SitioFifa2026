import React from 'react';
import Navbar from '../components/navbar'; 
import Footer from '../components/footer';

const RecursosPage = () => {
  return (
    <div className="flex flex-col min-h-screen"> 
      <Navbar/>
      <main className="flex-grow flex items-center justify-center">
        <h1 className="text-3xl font-bold text-[#0B0B45]">En desarrollo</h1>
      </main>
      <Footer/>
    </div>
  );
}

export default RecursosPage;
