import React, { Suspense } from 'react'
import { motion } from 'framer-motion'
import HeroCanvas from '../components/canvas/HeroCanvas'
import { Link } from 'react-router-dom'
// Importing sections
import Stats from '../sections/Stats'
import CategoryShowcase from '../sections/CategoryShowcase'
import FAQ from '../sections/FAQ'

import industrialFragranceImg from '../assets/images/industrial_fragrances.jpeg'
import perfumeOilImg from '../assets/images/perfume_oils.jpeg'
import essentialOilImg from '../assets/images/essential_oils.jpeg'

import SEO from '../components/SEO'

const Hero = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-white">
            {/* 3D Background */}
            <Suspense fallback={<div className="absolute inset-0 bg-mint-50" />}>
                <HeroCanvas />
            </Suspense>

            {/* Overlay Content */}
            <div className="absolute z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <span className="inline-block py-2 px-4 rounded-full bg-forest-900/5 text-forest-900 font-sans text-xs tracking-[0.2em] uppercase mb-6 font-bold border border-forest-900/10 backdrop-blur-sm">
                        Global Fragrance Manufacturer
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-4xl md:text-6xl font-serif font-medium text-forest-900 mb-6 tracking-tight leading-tight"
                >
                    Industrial Fragrances & <br />
                    <span className="italic text-leaf-600">Essential Oils.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg"
                >
                    Premium wholesale fragrance solutions for perfumes, personal care, and industrial applications. Scientifically crafted for the global market.
                </motion.p>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-8">
                    <Link to="/products">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                            className="px-10 py-4 bg-leaf-500 text-white hover:bg-leaf-600 transition-all duration-300 font-sans tracking-widest uppercase text-xs font-bold rounded-full flex items-center gap-3 shadow-xl shadow-leaf-500/20"
                        >
                            Explore Catalog
                        </motion.button>
                    </Link>

                    <Link to="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-4 bg-white/50 backdrop-blur-sm border border-forest-900/10 text-forest-900 hover:bg-white hover:shadow-lg transition-all duration-300 font-sans tracking-widest uppercase text-xs font-bold rounded-full"
                        >
                            Request Sample
                        </motion.button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

const Home = () => {
    const homeSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Shalu Enterprises",
        "description": "Leading manufacturer of wholesale industrial fragrances, bulk essential oils, and concentrated perfume oils globally.",
        "url": "https://shalu-web-experience.vercel.app",
        "logo": "https://shalu-web-experience.vercel.app/assets/logo.png",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Shop No. 2, Ground Floor, Tirupati Enclave, Lal Kuan",
            "addressLocality": "Ghaziabad",
            "addressRegion": "Uttar Pradesh",
            "postalCode": "201009",
            "addressCountry": "IN"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-8700531741",
            "contactType": "sales",
            "email": "info@shaluenterprises.com"
        }
    };

    return (
        <div className="bg-white">
            <SEO
                title="Industrial Fragrance Manufacturer & Bulk Essential Oils"
                description="Leading wholesale fragrance manufacturer in India. We supply bulk industrial fragrances for detergents, cosmetics, and pure essential oils for global B2B markets."
                keywords="industrial fragrance manufacturer, bulk essential oils wholesale, detergent fragrance suppliers, perfume oil clones wholesale, custom fragrance formulation, Shalu Enterprises India"
                schema={homeSchema}
            />
            <Hero />


            <Stats />

            {/* SEO Rich Text Section */}
            <section className="py-16 bg-white border-b border-mint-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-serif text-forest-900 mb-6">Your B2B Partner in Olfactory Excellence</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        For decades, Shalu Enterprises has been the trusted <strong>fragrance manufacturer</strong> for leading brands across personal care, home care, and fine perfumery. We synthesize highly stable, IFRA-compliant <strong>industrial fragrances</strong> explicitly formulated for liquid detergents, soaps, and cosmetics. Beyond industrial scents, we are global suppliers of wholesale <strong>100% pure essential oils</strong> and premium concentrated <strong>perfume clones</strong>, ensuring unparalleled olfactory performance for your business.
                    </p>
                </div>
            </section>

            <div id="products">
                <CategoryShowcase
                    title="Industrial Fragrances"
                    description="High-performance fragrances designed for industrial applications, ensuring lasting scent profiles and stability."
                    image={industrialFragranceImg}
                    link="/products/category/industrial-fragrances"
                    badge="Industrial"
                />

                <CategoryShowcase
                    title="Fragrance"
                    description="Concentrated, pure fine fragrances providing rich, long-lasting aroma sequences."
                    image={perfumeOilImg}
                    link="/products/category/fragrance"
                    reverse={true}
                    badge="Luxury"
                />

                <CategoryShowcase
                    title="Essential Oils"
                    description="Pure and natural bulk essential oils extracted from the finest botanical sources, perfect for cosmetics, aromatherapy, and wholesale supply."
                    image={essentialOilImg}
                    link="/products/category/essential-oils"
                    badge="Natural Wholesale"
                />
            </div>

            <FAQ />


        </div>
    )
}

export default Home
