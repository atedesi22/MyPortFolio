import { Code2, Menu, X } from 'lucide-react';
import '../index.css'
import { useEffect, useState } from 'react';


const Navbar = () =>
{
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Gestion de l'effet de transparence sur le scroll 
    useEffect(() =>{
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        {name: 'Expertise', href: '#espertise'},
        {name: 'Challenge', href: '#challenges'},
        {name: 'Shop', href: '#shop'},
        {name: 'Contact', href: '#contact'},
    ];

    return(
        <>
            <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'
    }`}>
                <div className='max-w-7xl mx-auto px-6 flex justify-between items-center'>
                    <div className='flex items-center gap-2'>
                        <Code2 className='text-blue-500' size={28}/>
                        <span className='font-bold text-xl tracking-tighter text-white'>
                            ATEDESI <span className='text-blue-500'>.</span> DEV
                        </span>
                    </div>
                        {/* DesktopMenu  */}

                    <div className='hidden md:flex items-center gap-8'>
                        {navLinks.map((link) =>(
                            <a 
                            key ={link.name}
                            href={link.href}
                                className='text-sm font-medium  text-gray-300 hover:text-blue-400 active:text-blue-400 transition-colors'
                            >
                                {link.name}
                            </a>
                        ))

                        }
                        <button className='bg-blue-600 hover:bg-blue-700 active:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer'>Recrutez-moi</button>
                    </div>

                        {/* Mobile Toggle  */}
                    <div className='md:hidden'>
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className='text-white'>
                            {mobileMenuOpen ? <X size={28}/> : <Menu size={28}/>}
                        </button>
                    </div>

                   
                </div>
                {mobileMenuOpen && (
                    <div className='absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 p-6 flex flex-col gap-4 md:hidden'>
                        {navLinks.map((link) => (
                            <a 
                            key={link.name} 
                            href={link.href} 
                            className="text-lg text-gray-300"
                            onClick={() => setMobileMenuOpen(false)}
                            >
                            {link.name}
                            </a>
                        ))}
                    </div>
                )}
                
            </nav>
        </>
    )
}

export default Navbar;