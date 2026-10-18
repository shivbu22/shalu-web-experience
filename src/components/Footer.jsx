import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Linkedin, Instagram, ArrowRight, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="bg-white pt-24 pb-8 border-t border-leaf-100 relative overflow-hidden">
            {/* Background Pattern - Subtle Molecular/Organic feel */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-leaf-50/50 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

                    {/* Brand Column (4 cols) */}
                    <div className="lg:col-span-4 space-y-8">
                        <Link to="/" className="block">
                            <span className="text-2xl font-serif font-bold tracking-wide text-forest-900">
                                SHALU ENTERPRISES
                            </span>
                        </Link>
                        <p className="text-gray-600 leading-relaxed text-sm max-w-sm">
                            A leading manufacturer and supplier of industrial fragrances, candle fragrances, perfume oils and essential oils. Crafting olfactory excellence for the global market.
                        </p>
                        <div className="flex flex-col space-y-3">
                            <div className="flex space-x-4">
                                <a href="https://www.facebook.com/shaluenterprises.official" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-leaf-50 flex items-center justify-center text-forest-800 hover:bg-forest-900 hover:text-white transition-all duration-300">
                                    <Facebook className="w-4 h-4" />
                                </a>
                                <a href="https://www.instagram.com/shaluenterprises.official" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-leaf-50 flex items-center justify-center text-forest-800 hover:bg-forest-900 hover:text-white transition-all duration-300">
                                    <Instagram className="w-4 h-4" />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-leaf-50 flex items-center justify-center text-forest-800 hover:bg-forest-900 hover:text-white transition-all duration-300">
                                    <Linkedin className="w-4 h-4" />
                                </a>
                            </div>
                            <p className="text-sm font-medium text-leaf-600">@shaluenterprises.official</p>
                        </div>
                    </div>

                    {/* Products Column (2 cols) */}
                    <div className="lg:col-span-2 lg:col-start-6">
                        <h4 className="font-bold text-sm tracking-widest uppercase text-forest-900 mb-8 border-b-2 border-leaf-100 inline-block pb-1">Our Essence</h4>
                        <ul className="space-y-4 text-sm text-gray-600">
                            {/* Note: 'Fine Fragrances' link might need adjustment if category slug differs, but keeping as is for now based on previous code */}
                            <li><Link to="/products/category/fine-fragrances" className="hover:text-leaf-600 transition-colors block">Fine Fragrances</Link></li>
                            <li><Link to="/products/category/industrial-fragrances" className="hover:text-leaf-600 transition-colors block">Industrial Fragrances</Link></li>
                            <li><Link to="/products/category/essential-oils" className="hover:text-leaf-600 transition-colors block">Essential Oils</Link></li>
                            <li><Link to="/products/category/perfume-oils" className="hover:text-leaf-600 transition-colors block">Perfume Oils</Link></li>
                        </ul>
                    </div>

                    {/* Company Column (2 cols) */}
                    <div className="lg:col-span-2">
                        <h4 className="font-bold text-sm tracking-widest uppercase text-forest-900 mb-8 border-b-2 border-leaf-100 inline-block pb-1">Company</h4>
                        <ul className="space-y-4 text-sm text-gray-600">
                            <li><Link to="/about/our-story" className="hover:text-leaf-600 transition-colors block">Our Story</Link></li>
                            <li><Link to="/about/leadership" className="hover:text-leaf-600 transition-colors block">Leadership</Link></li>
                            <li><Link to="/about/sustainability" className="hover:text-leaf-600 transition-colors block">Sustainability</Link></li>
                            <li><Link to="/contact/careers" className="hover:text-leaf-600 transition-colors block">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Contact/Newsletter Column (4 cols) */}
                    <div className="lg:col-span-4 lg:col-start-10 md:col-span-2">
                        <h4 className="font-bold text-sm tracking-widest uppercase text-forest-900 mb-8 border-b-2 border-leaf-100 inline-block pb-1">Stay Connected</h4>
                        <div className="space-y-6">
                            <ul className="space-y-4 text-sm text-gray-600">
                                <li className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-leaf-600 shrink-0 mt-0.5" />
                                    <span>Shop No. 2, Ground Floor, Tirupati Enclave, Lal Kuan, Ghaziabad - 201009, Uttar Pradesh, INDIA</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-leaf-600 shrink-0" />
                                    <a href="tel:+918700531741" className="hover:text-forest-900 transition-colors">+91 8700531741</a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-leaf-600 shrink-0" />
                                    <a href="mailto:info@shaluenterprises.com" className="hover:text-forest-900 transition-colors">info@shaluenterprises.com</a>
                                </li>
                            </ul>

                            {/* Newsletter Input */}
                            <div className="pt-4">
                                <p className="text-xs text-forest-900 mb-2 uppercase tracking-wider font-bold">Subscribe for Market Insights</p>
                                <div className="flex border-b border-gray-300 pb-2 focus-within:border-leaf-600 transition-colors">
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="bg-transparent border-none outline-none text-forest-900 placeholder-gray-400 text-sm w-full"
                                    />
                                    <button className="text-leaf-600 hover:text-forest-900 transition-colors">
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Shalu Enterprises. All rights reserved.</p>
                    <div className="flex items-center gap-8">
                        <Link to="#" className="hover:text-forest-900 transition-colors">Privacy Policy</Link>
                        <Link to="#" className="hover:text-forest-900 transition-colors">Terms of Use</Link>
                        <Link to="#" className="hover:text-forest-900 transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
