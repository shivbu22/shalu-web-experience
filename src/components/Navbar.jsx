import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        let timeoutId = null
        const handleScroll = () => {
            if (timeoutId) return
            timeoutId = setTimeout(() => {
                setScrolled(window.scrollY > 50)
                timeoutId = null
            }, 100)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => {
            window.removeEventListener('scroll', handleScroll)
            if (timeoutId) clearTimeout(timeoutId)
        }
    }, [])

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'INDUSTRIAL FRAGRANCES', path: '/products/category/industrial-fragrances' },
        {
            name: 'FRAGRANCE',
            path: '/products',
            dropdown: [
                { name: 'Fragrance Overview', path: '/products' },
                { name: 'Identical Fragrances', path: '/media/identical-fragrances' },
            ]
        },
        { name: 'ESSENTIAL OILS', path: '/products/category/essential-oils' },
        {
            name: 'About',
            path: '/about/our-story',
            dropdown: [
                { name: 'Our Company', path: '/about/our-story' },
                { name: 'Leadership', path: '/about/leadership' },
                { name: 'Sustainability', path: '/about/sustainability' },
            ]
        },
        { name: 'Contact', path: '/contact' },
    ]

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm h-20' : 'bg-transparent h-24'}`}>
            <div className="max-w-[1920px] mx-auto px-8 h-full flex items-center justify-between">
                {/* Logo */}
                {/* Logo */}
                <Link to="/" className="flex items-center gap-4 group">
                    <img
                        src="/assets/logo.png"
                        alt="Shalu Enterprises Logo"
                        className="h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Optional: If the logo image already contains text, we might want to hide this. 
                        But assuming it's an icon/mark, we keep the text but standardizing it. 
                        The user asked for "WEBSITE NAMED AS SHALU ENTERPRISES" so we ensure the text is there. */}
                    <div className="flex flex-col">
                        <span className="text-xl font-serif font-bold tracking-[0.2em] text-forest-900 leading-none group-hover:text-leaf-600 transition-colors">
                            SHALU
                        </span>
                        <span className="text-[10px] font-sans font-bold tracking-[0.4em] text-leaf-600 uppercase leading-none mt-1">
                            ENTERPRISES
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden xl:flex items-center space-x-10">
                    {navLinks.map((link) => (
                        <div
                            key={link.name}
                            className="relative group h-full flex items-center"
                            onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                            onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
                        >
                            <Link
                                to={link.path}
                                className="flex items-center text-xs font-bold tracking-widest uppercase text-forest-900 hover:text-leaf-600 transition-colors py-2"
                            >
                                {link.name}
                                {link.dropdown && <ChevronDown className="w-3 h-3 ml-1" />}
                            </Link>

                            {/* Thin Green Underline */}
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-leaf-500 transition-all duration-300 group-hover:w-full" />

                            {/* Dropdown Menu */}
                            {link.dropdown && (
                                <AnimatePresence>
                                    {activeDropdown === link.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-12 left-0 w-64 bg-white/95 backdrop-blur-md shadow-xl border border-leaf-100 rounded-lg py-2 overflow-hidden"
                                        >
                                            {link.dropdown.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    to={item.path}
                                                    className="block px-6 py-3 text-sm text-forest-700 hover:bg-mint-50 hover:text-leaf-600 transition-colors font-medium"
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            )}
                        </div>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="xl:hidden p-2 text-forest-900 hover:text-leaf-600 transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="xl:hidden bg-white/95 backdrop-blur-md border-t border-leaf-100 overflow-hidden"
                    >
                        <div className="flex flex-col p-8 space-y-6">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-lg font-bold text-forest-900 block mb-2 hover:text-leaf-600 transition-colors"
                                        onClick={() => !link.dropdown && setIsMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                    {link.dropdown && (
                                        <div className="pl-4 space-y-3 border-l-2 border-leaf-200 mt-2">
                                            {link.dropdown.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    to={item.path}
                                                    className="block text-sm text-forest-600 hover:text-leaf-600 transition-colors"
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
