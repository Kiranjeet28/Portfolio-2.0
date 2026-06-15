import { useState } from 'react';

import { navLinks } from '../constants/index.js';

const NavItems = ({ onClick = () => { } }) => (
    <ul className="nav-ul">
        {navLinks.map((item) => (
            <li key={item.id} className="nav-li">
                <a href={item.href} className="nav-li_a" onClick={onClick}>
                    {item.name}
                </a>
            </li>
        ))}
    </ul>
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-50 rounded-full glassmorphism border border-white/5 shadow-2xl px-6 transition-all duration-300">
            <div className="mx-auto">
                <div className="flex justify-between items-center py-3 mx-auto c-space">
                    <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7] animate-pulse" />
                        Kiranjeet
                    </a>

                    <button
                        onClick={toggleMenu}
                        className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
                        aria-label="Toggle menu">
                        <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="w-6 h-6" />
                    </button>

                    <nav className="sm:flex hidden">
                        <NavItems />
                    </nav>
                </div>
            </div>

            <div className={`nav-sidebar rounded-2xl ${isOpen ? 'max-h-screen mt-2 border border-white/5' : 'max-h-0'}`}>
                <nav className="p-5">
                    <NavItems onClick={closeMenu} />
                </nav>
            </div>
        </header>
    );
};

export default Navbar;