import { Code2, Menu, X } from 'lucide-react';
import '../index.css'
import { useEffect, useState } from 'react';


const Navbar = () =>
{
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobleMenuOpen, setMobileMenuOpen] = useState(false);

    // Gestion de l'effet de transparence sur le scroll 
    useEffect(() =>{
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    })

    const navLinks = [
        {name: 'Expertise', href: '#espertise'},
        {name: 'Challenge', href: '#challenges'},
        {name: 'Shop', href: '#shop'},
        {name: 'Contact', href: '#contact'},
    ];

    return(
        <>
            <nav className='{`fixed w-full z-50 transition duration-300 ${isScrolled ? "bg-slate-900/90 backdrop-blur-md py-4 shadow-xl" : "bg-transparent py-6}`}'>
                <div className='max-w-7xl mx-auto px-6 flex justify-between items-center'>
                    <div className='flex items-center gap-2'>
                        <Code2 className='text-blue-500' size={28}/>
                        <span className='font-bold text-xl tracking-tighter text-white'>
                            ATEDESI <span className='text-blue-500'>.</span> DEV
                        </span>
                    </div>
                    
                </div>

                {/* DesktopMenu  */}

                <div>
                    <a href=""></a>
                    <button>Recrutez-moi</button>
                </div>

                {/* Mobile Toggle  */}
                <div>
                    <button>
                        <X/> <Menu/>
                    </button>
                </div>

                <div>
                    <a href=""></a>
                </div>
            </nav>
        </>
    )
}

export default Navbar;