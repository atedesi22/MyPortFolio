import React from 'react';
import { Monitor, Server, Terminal } from "lucide-react";
import { motion } from 'framer-motion';


const Expertise = () => {
        const skills =[
            {
                title:'Frontend Development',
                icon: <Monitor className="text-blue-500" size={32}/>,
                tools: ['React18+ ', 'Tailwind CSS ', 'Framer Motion ', 'Vite'],
                desc: "Creation d'interfaces fluides, responsives et perfomantes avec une approche 'User-First'", 
            },
            {
                title:'Backend Development',
                icon: <Server className="text-blue-500" size={32}/>,
                tools: ['Laravel 12+ ', 'MySQL ',' PostgreSQL ', 'REST API ', ' Passport Auth'],
                desc: "Architecture robuste, securisee et scalable pour gerer des donnees complexes et des processus metiers.", 
            },
            {
                title:'DevOps & Workflow',
                icon: <Terminal className="text-blue-500" size={32}/>,
                tools: ['Ubuntu/Linux ', 'Git/GitHub ', 'Vercel ', 'CI/CD'],
                desc: "Maitrise de l'environement de developement et automatisation du deploiement continu.", 
            },
        ];

        return(
                <>
                    <section id="expertise" className="py-20 bg-slate-900 px-6">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className=" text-blue-500 font-mono text-sm uppercase tracking-widest mb-2">// Mes Competences</h2>
                                <h3 className="text-3xl md:text-5xl font-bold text-white">Expertise Technique</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ y: -10 }}
                                        className='p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-all backdrop-blur-sm'
                                    >
                                    <div mb-6>{skill.icon}</div>
                                    <h4 className=" text-xl font-bold text-white mb-4">{skill.title}</h4>
                                    <p className="text-gray-400 mb-6 text-sm leading-relaxed">{skill.desc}</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className=" text-xs font-mono bg-slate-900 text-blue-300 px-3 py-1 rounded-full border border-slate-700">
                                            {skill.tools}
                                        </span>
                                    </div>
                                </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                </>
            )

};

            
export default Expertise;