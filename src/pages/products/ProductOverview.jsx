import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowDown } from 'lucide-react'
// Importing images
import detergentImg from '../../assets/images/ocean_breeze.png'
import personalCareImg from '../../assets/images/lavender_n.png'
import airFreshenerImg from '../../assets/images/sandal.png'
import candleImg from '../../assets/images/cinnamon.png'
import industrialImg from '../../assets/images/pineneedle.png'
import fabricImg from '../../assets/images/blossom.png'
import SEO from '../../components/SEO'

const CategoryCard = ({ title, items, image, align = 'left' }) => (
    <div className="relative group overflow-hidden h-[500px] rounded-2xl">
        <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500" />

        <div className={`absolute inset-0 p-8 flex flex-col justify-end ${align === 'right' ? 'items-end text-right' : 'items-start text-left'}`}>
            <div className="bg-white/95 backdrop-blur-md p-8 rounded-xl max-w-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 w-full">
                <h3 className="text-2xl font-serif font-bold text-forest-900 mb-4">{title}</h3>

                {/* Fragrance List */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {items.map((item, idx) => (
                        <span key={idx} className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-mint-50 text-leaf-700 rounded-full border border-leaf-100">
                            {item}
                        </span>
                    ))}
                </div>

                <Link to={`/products/category/${title.toLowerCase().replace(/ /g, '-').replace(/&/g, 'and')}`} className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-leaf-600 uppercase hover:text-forest-900 transition-colors">
                    Explore Details <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    </div>
)

const ProductOverview = () => {
    const categories = [
        {
            title: "Detergent & Cleaning Fragrances",
            items: ["Fresh Linen", "Lemon Burst", "Pine Fresh", "Ocean Breeze", "Green Apple", "Floral Clean", "Eucalyptus Mint", "Herbal Fresh"],
            image: detergentImg
        },
        {
            title: "Personal Care & Cosmetic Bases",
            items: ["White Floral", "Rose Musk", "Lavender Soft", "Jasmine Bloom", "Vanilla Cream", "Aloe Fresh", "Powdery Musk"],
            image: personalCareImg
        },
        {
            title: "Air Freshener & Home Care",
            items: ["Sandalwood", "Amber Fresh", "Aqua Marine", "Citrus Zest", "Oud Light", "Morning Garden", "Cool Breeze"],
            image: airFreshenerImg
        },
        {
            title: "Candles, Incense & Aroma Products",
            items: ["Vanilla Amber", "Rose Oud", "Patchouli Earth", "Lavender Vanilla", "Musk Sandal", "Spiced Cinnamon", "Frankincense"],
            image: candleImg
        },
        {
            title: "Industrial / Institutional Cleaning",
            items: ["Antiseptic Fresh", "Phenyl Floral", "Hospital Clean", "Strong Pine", "Lemon Disinfectant", "Neutral Masking Base"],
            image: industrialImg
        },
        {
            title: "Fabric Softeners & Laundry Care",
            items: ["Baby Soft", "Blossom Fresh", "Cotton Cloud", "Spring Meadow", "Rose Bouquet", "Morning Dew"],
            image: fabricImg
        }
    ]

    const productsSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Industrial Fragrance & Essential Oils Catalog - Shalu Enterprises",
        "description": "Explore our extensive catalog of wholesale industrial fragrances, concentrated perfume bases, and pure essential oils.",
        "url": "https://shalu-web-experience.vercel.app/products",
        "provider": {
            "@type": "Organization",
            "name": "Shalu Enterprises"
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <SEO 
                title="Industrial Fragrance Catalog & Bulk Essential Oils"
                description="Browse our wholesale catalog of industrial fragrances for detergents and cosmetics, concentrated perfume clones, and 100% pure essential oils."
                keywords="fragrance catalog, bulk essential oils list, detergent fragrance wholesale, perfume bases India, Shalu Enterprises products"
                schema={productsSchema}
            />
            {/* Hero Section */}
            <section className="relative h-screen flex items-center px-8 bg-[#E8E6E1]">
                {/* Background Image/Gradient - Placeholder for now using a subtle gradient or pattern */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-[#E8E6E1] opacity-50" />

                {/* Decorative Elements matching the 'glass' feel */}
                <div className="absolute top-20 right-20 w-96 h-96 bg-leaf-100/30 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-20 w-64 h-64 bg-amber-100/30 rounded-full blur-3xl" />

                <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-serif font-medium text-forest-900 leading-tight"
                        >
                            Industrial Fragrances, <br />
                            Fine Fragrances <br />
                            <span className="italic">Manufacturer</span> & <br />
                            Supplier
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-600 text-lg leading-relaxed max-w-xl"
                        >
                            Shalu Enterprises is a premier manufacturer of high-quality industrial fragrances, fine fragrances, and essential oils. We combine advanced olfactory science with sustainable sourcing to deliver consistent, superior scent solutions for the global market.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <button onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })} className="group flex items-center gap-3 text-sm font-bold tracking-widest text-forest-900 uppercase">
                                <span className="w-12 h-[1px] bg-forest-900 group-hover:w-20 transition-all duration-300" />
                                Scroll for More
                                <ArrowDown className="w-4 h-4 animate-bounce" />
                            </button>
                        </motion.div>
                    </div>

                    {/* Hero Visual - Featured Bottles - REMOVED */}
                    <div className="hidden lg:block relative h-[600px]">
                        {/* Bottles removed as per request */}
                    </div>
                </div>
            </section>

            {/* Category Grid */}
            <section className="py-24 px-8 bg-[#f8f5f2]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {categories.map((cat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <CategoryCard {...cat} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Inquiry Form Section */}
            <section className="py-24 px-8 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-serif font-medium text-forest-900 mb-16">Post us your inquiries</h2>

                    <form className="space-y-8 text-left">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-sm font-bold tracking-widest text-forest-900 uppercase">Name *</label>
                                <input type="text" placeholder="Your name" className="w-full bg-gray-50 border-0 p-4 rounded-none focus:ring-2 focus:ring-leaf-500 transition-shadow" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold tracking-widest text-forest-900 uppercase">Email *</label>
                                <input type="email" placeholder="Email" className="w-full bg-gray-50 border-0 p-4 rounded-none focus:ring-2 focus:ring-leaf-500 transition-shadow" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-sm font-bold tracking-widest text-forest-900 uppercase">Phone *</label>
                                <input type="tel" placeholder="Your phone number" className="w-full bg-gray-50 border-0 p-4 rounded-none focus:ring-2 focus:ring-leaf-500 transition-shadow" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold tracking-widest text-forest-900 uppercase">Subject</label>
                                <input type="text" placeholder="Inquiry subject" className="w-full bg-gray-50 border-0 p-4 rounded-none focus:ring-2 focus:ring-leaf-500 transition-shadow" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold tracking-widest text-forest-900 uppercase">Message *</label>
                            <textarea rows="6" placeholder="Your message" className="w-full bg-gray-50 border-0 p-4 rounded-none focus:ring-2 focus:ring-leaf-500 transition-shadow"></textarea>
                        </div>

                        <div className="flex justify-center pt-8">
                            <button className="bg-forest-900 text-white px-12 py-4 font-bold tracking-widest uppercase hover:bg-leaf-600 transition-colors duration-300">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default ProductOverview
