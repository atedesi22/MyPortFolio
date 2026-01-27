import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [visitCount, setVisitCount] = useState(0);

  // Simulation d'appel API pour le compteur (À lier à ton backend plus tard)
  useEffect(() => {
    // Ici, tu feras un fetch('https://ton-api.com/increment-visitor')
    // Pour l'instant, on simule une récupération de données
    const savedVisits = localStorage.getItem('visitor_count') || 0;
    const newCount = parseInt(savedVisits) + 1;
    setVisitCount(newCount);
    localStorage.setItem('visitor_count', newCount);
  }, []);

  return (
    <section className="relative h-screen flex flex-col justify-center items-center bg-slate-900 text-white overflow-hidden">
      {/* Background Effect (Style GAFAM) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <img src="/yoyo.png" alt="" className=" w-full"/>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-[120px]"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center px-4"
      >
        <h2 className="text-blue-400 font-mono mb-4 text-lg">// Hello, je suis</h2>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          ATEDESI BOHOLE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Paul Emmanuel
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-10">
          Ingénieur Logiciel Fullstack spécialisé en <span className="text-white">React</span> & <span className="text-white">Laravel</span>. 
          Je bâtis des solutions scalables avec une rigueur de niveau GAFAM.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-700 rounded-4xl font-semibold transition-all shadow-lg shadow-blue-500/20">
            Voir mes projets
          </button>
          <a href="/CV_Atedesi.pdf" download className="px-8 py-4 border border-slate-700 hover:bg-slate-800 active:bg-slate-800 rounded-4xl font-semibold transition-all">
            Télécharger mon CV
          </a>
        </div>
      </motion.div>

      {/* Compteur de Visiteurs */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 flex flex-col items-center"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-2">Live traffic</span>
        <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700 px-4 py-2 rounded-full flex items-center gap-3">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="font-mono text-sm text-blue-300">
            {visitCount.toLocaleString()} visiteurs ont exploré ce profil
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default Header;