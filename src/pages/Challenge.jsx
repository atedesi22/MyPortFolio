import React from 'react';
import { ExternalLink, Github, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const Challenges = () => {
  const allChallenges = [
    {
      week: "Semaine 01",
      title: "FinanceFlow Dashboard",
      status: "En cours", // ou "Terminé"
      tech: ["React", "Recharts", "Tailwind"],
      description: "Système de gestion de micro-crédits avec visualisation de données en temps réel.",
      image: "https://via.placeholder.com/400x250/1e293b/60a5fa?text=FinanceFlow+Preview",
      link: 'https://financeflow-eosin.vercel.app',
      code: 'https://github.com/atedesi22/FinanceFlow-Dashboard.git' 
    },
    // Les prochains challenges s'ajouteront ici
  ];

  return (
    <section id="challenges" className="py-20 bg-slate-900 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-blue-500 font-mono text-sm uppercase tracking-widest mb-2">// 1 Semaine = 1 Template</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white">Mes Challenges</h3>
          </div>
          <p className="text-gray-400 max-w-md text-sm">
            Chaque semaine, je conçois et développe un template complet pour affiner ma maîtrise technique et explorer de nouveaux secteurs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allChallenges.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="group bg-slate-800/40 border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all"
            >
              <div className="relative h-48 bg-slate-700 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                    {item.week}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-white">{item.title}</h4>
                  <span className="text-[10px] text-blue-400 border border-blue-400/30 px-2 py-0.5 rounded italic">
                    {item.status}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tech.map((t, i) => (
                    <span key={i} className="text-[10px] bg-slate-900 text-slate-300 px-2 py-1 rounded border border-slate-700">{t}</span>
                  ))}
                </div>
                <div className="flex gap-4 border-t border-slate-700 pt-4">
                  <a href={item.link} blank className="flex items-center gap-2 text-xs text-white hover:text-blue-400 transition-colors">
                    <ExternalLink size={14} /> Démo
                  </a>
                  <a href={item.code} blank className="flex items-center gap-2 text-xs text-white hover:text-blue-400 transition-colors">
                    <Github size={14} /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;