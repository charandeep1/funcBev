'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Toggle function for the mobile menu
    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <header className="w-full bg-white px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-sm md:shadow-none">

            {/* Logo Section */}
            <div className="flex items-center gap-1">
                <Link href="/" className="flex items-center gap-1">
                    <span className="text-2xl font-bold tracking-tight text-blue-600 lowercase">
                        FuncBev<span className="text-xs align-top">®</span>
                    </span>
                </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-900">
                <Link href="/productPage" className="flex items-center gap-1"><NavItem title="Products" /></Link>
                <NavItem title="About Us" />
                <NavItem title="Contact" />
            </nav>

            {/* Mobile Hamburger / X Icon */}
            <button
                className="md:hidden flex flex-col gap-1.5 p-2 z-50"
                onClick={toggleMenu}
                aria-label="Toggle Navigation"
            >
                <span className={`w-6 h-0.5 bg-gray-900 block transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-gray-900 block transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-gray-900 block transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>

            {/* Mobile Navigation Dropdown */}
            <div className={`
                absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg flex flex-col py-6 px-6 gap-6 md:hidden transition-all duration-300 origin-top
                ${isMobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}
            `}>
                <NavItem title="Products" />
                <NavItem title="About Us" />
                <NavItem title="Contact" />
            </div>

        </header >
    );
}

export default Navbar;

// Reusable component for the navigation items with the dropdown chevron
function NavItem({ title }) {
    return (
        <div className="relative group cursor-pointer flex items-center gap-1 hover:text-blue-600 transition-colors w-max">
            <span>{title}</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mt-0.5 group-hover:rotate-180 transition-transform duration-200 md:group-hover:rotate-0"
            >
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
        </div>
    );
}