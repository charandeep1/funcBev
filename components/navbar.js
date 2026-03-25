'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'; // <-- Import the hook to track routes

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname(); // <-- Get the current route

    // Toggle function for the mobile menu
    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    // CRITICAL FIX: Close the mobile menu automatically whenever the route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    return (
        <header className="w-full bg-white px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-sm md:shadow-none">

            {/* Logo Section */}
            <div className="flex items-center gap-1">
                <Link href="/" className="flex items-center gap-1">
                    <span className="text-2xl font-bold tracking-tight text-blue-600 lowercase">
                        mizu<span className="text-xs align-top">®</span>
                    </span>
                </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-900">
                {/* Now passing href directly to NavItem */}
                <NavItem title="Products" href="/products/" currentPath={pathname} />
                <NavItem title="About Us" href="/about/" currentPath={pathname} />
                <NavItem title="Contact" href="/Contact" currentPath={pathname} />
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
                <NavItem title="Products" href="/products/" currentPath={pathname} />
                <NavItem title="About Us" href="/about/" currentPath={pathname} />
                <NavItem title="Contact" href="/Contact/" currentPath={pathname} />
            </div>

        </header >
    );
}

export default Navbar;

// Reusable component updated to be an actual Next.js Link
function NavItem({ title, href = "#", currentPath }) {
    // Check if the current URL matches this link's destination
    const isActive = currentPath === href;

    return (
        <Link href={href} className="relative group flex items-center gap-1 w-max">
            {/* Applies blue text if active, otherwise gray but turns blue on hover */}
            <span className={`transition-colors duration-200 ${isActive ? 'text-blue-600' : 'text-gray-900 group-hover:text-blue-600'}`}>
                {title}
            </span>

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
                className={`mt-0.5 transition-transform duration-200 md:group-hover:rotate-0 ${isActive ? 'text-blue-600' : 'text-gray-900 group-hover:text-blue-600 group-hover:rotate-180'}`}
            >
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
        </Link>
    );
}