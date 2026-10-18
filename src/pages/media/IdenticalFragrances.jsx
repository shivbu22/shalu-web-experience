import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Search, Star, Droplets } from 'lucide-react'
import SEO from '../../components/SEO'

// Import images
import img1 from './identical-fragrances/IMG_4908.PNG'
import img2 from './identical-fragrances/IMG_4909.PNG'
import img3 from './identical-fragrances/IMG_4910.PNG'
import img4 from './identical-fragrances/IMG_4911.PNG'
import img5 from './identical-fragrances/IMG_4912.PNG'
import img6 from './identical-fragrances/IMG_4913.PNG'
import img7 from './identical-fragrances/IMG_4914.PNG'
import img8 from './identical-fragrances/IMG_4915.PNG'

// Array of images to cycle through
const productImages = [img1, img2, img3, img4, img5, img6, img7, img8];

// Helper to get random description
const descriptions = [
    "A sophisticated blend of floral and woody notes.",
    "Crisp, refreshing, and undeniably captivating.",
    "Rich, warm tones with a lingering elegant finish.",
    "Bright citrus top notes meeting a deep musk base.",
    "An enchanting aroma that defines modern luxury.",
    "Subtle yet powerful, designed for lasting impression.",
    "A timeless classic reimagined for the contemporary era."
];

const fragrances = [
    // List 1
    { name: "Good Girl Blush", category: "Inspired" },
    { name: "Most Wanted", category: "Inspired" },
    { name: "Barbari Her", category: "Inspired" },
    { name: "Imperial Valley", category: "Inspired" },
    { name: "Ombre Leather", category: "Inspired" },
    { name: "Tiger", category: "Inspired" },
    { name: "Tobacco Honey", category: "Inspired" },

    // List 2
    { name: "Dragon", category: "Signature" },
    { name: "Baccarat Rouge", category: "Inspired" },
    { name: "Magnet", category: "Inspired" },
    { name: "Hamilton", category: "Inspired" },
    { name: "Premium Black", category: "Inspired" },
    { name: "Black Afgano", category: "Inspired" },
    { name: "Goddess", category: "Inspired" },
    { name: "Angel Elixir", category: "Inspired" },
    { name: "Shanaya", category: "Inspired" },
    { name: "La Vie Est Belle L'Extrait", category: "Inspired" },
    { name: "Because It's You", category: "Inspired" },
    { name: "Reflection", category: "Inspired" },
    { name: "My Way", category: "Inspired" },
    { name: "Lexcess", category: "Inspired" }
].map((item, index) => ({
    ...item,
    image: productImages[index % productImages.length],
    description: descriptions[index % descriptions.length]
}));



const IdenticalFragrances = () => {
    const fragranceKeywords = fragrances.map(f => f.name).join(", ") + ", fragrance clones, perfume dupes, inspired by perfumes, bulk fragrance oil";

    return (
        <div className="min-h-screen bg-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <SEO
                title="Identical Fragrances | Inspired Perfume Oils & Clones"
                description="High-quality identical fragrances and perfume oils inspired by top global brands. Premium dupes for bulk manufacturing and personal care."
                keywords={fragranceKeywords}
                url="/media/identical-fragrances"
            />
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-light text-emerald-900 mb-6 font-display tracking-tight">
                        Identical Fragrances
                    </h1>
                    <p className="text-lg text-emerald-700/70 max-w-2xl mx-auto leading-relaxed">
                        Discover our meticulously crafted collection of inspired fragrances, engineered to match the olfactory profiles of world-renowned scents.
                    </p>
                </motion.div>

                {/* Fragrance Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-24">
                    {fragrances.map((fragrance, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-2xl transition-all duration-300 border border-neutral-100 flex flex-col items-center text-center group"
                        >
                            <div className="w-full relative mb-6 flex justify-center items-center bg-neutral-50 rounded-xl p-8 aspect-square overflow-hidden">
                                <span className="absolute top-4 right-4 text-[10px] font-bold tracking-widest uppercase text-emerald-800 bg-white px-3 py-1 rounded-full shadow-sm z-10">
                                    Proprietary
                                </span>
                                <img
                                    src={fragrance.image}
                                    alt={fragrance.name}
                                    className="h-full w-auto object-contain drop-shadow-lg transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-emerald-800 transition-colors">
                                {fragrance.name}
                            </h3>

                            <p className="text-sm text-neutral-500 leading-relaxed max-w-[90%]">
                                {fragrance.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA / Contact Section */}
                <div className="bg-emerald-50 rounded-3xl p-12 text-center relative overflow-hidden shadow-lg border border-emerald-100">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=2070&auto=format&fit=crop')] opacity-5 bg-cover bg-center mix-blend-overlay" />
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl text-emerald-900 font-light mb-6">
                            Looking for something specific?
                        </h2>
                        <p className="text-emerald-800/80 mb-8 max-w-2xl mx-auto text-lg">
                            Our laboratory can analyze and recreate almost any fragrance profile. Contact us for custom formulation requests.
                        </p>
                        <button className="px-8 py-3 bg-emerald-900 text-white rounded-full font-medium hover:bg-emerald-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200">
                            Request Custom Formulation
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IdenticalFragrances
