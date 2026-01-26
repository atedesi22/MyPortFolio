import { useEffect, useState } from "react"
import {motion} from 'framer-motion';


const Header = () => {
    const [visitCount, setVisitCount] = useState(0);
    
    useEffect(() => {
        const savedVisits = localStorage.getItem('visitor_count') || 1240;
        const newCount = parseInt(savedVisits) + 1;
        setVisitCount(newCount);
        localStorage.setItem('visitor_count', newCount);
    }, [])

    return(
        <>
            <section className="relative h-screen flex flex-col justify-center items-center  bg-slate-900 overflow-hidden ">
                <div className="absolute top-0 left-0 w-full opacity-20 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-[120px]"></div>
                    <div className=" absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-[120px]"></div>
                </div>

                <motion.div
                    initial ={{ opacity: 0, y:20 }}
                        animate={{ opacity:1, y:0 }}
                        transition={{ duration:0.8 }}
                        className="z-10 tect-center p-4">
                    <h2 className="text-blue-400 font-mono mb-5 text-lg">Hello, je suis</h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">ATEDESI BOHOLE <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Paul Emmanuel</span></h1>
                    
                    <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-10">
                        Développeur logiciel web Fullstack specialise en <span className="text-white">React.Js, Tailwindcss</span> & <span className="text-white"> Laravel</span>.
                        Je batis des solutions scalables avec une rigeur de niveau GAFAM.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-4xl font-semibold transition-all shadow-lg shadow-blue-500/20">Voir mes projets</button>
                        <button className="px-8 py-4 border-slate-700 hover:bg-slate-800 active:bg-slate-800 border rounded-4xl font-semibold transition-all">Telecharger mon CV</button>
                    </div>
                </motion.div>
                   
                <motion.div 
                    initial={{ opacity:0 }}
                    animate={{ opacity:1 }}
                    transition={{ delay:1 }}
                        className="absolute bottom-10 flex flex-col items-center">
                    <span className=" text-xs uppercase tracking-[0.2em] text-slate-500 mb-2">Live trafic</span>
                    <div className="bg-slate-800/50 backdrop-blur-md border- border-slate-700 px-4 py-2 rounded-full flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="font-mono text-sm text-blue-300"> 
                            {visitCount.toLocaleString()} visiteurs ont ecplore ce profil
                        </span>
                    </div>

                    
                </motion.div>
            </section>
        </>
    )
}

export default Header;