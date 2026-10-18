import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Search } from 'lucide-react'
import { products } from '../../data/products'
import ProductModal from '../../components/ProductModal'
import SEO from '../../components/SEO'

const CategoryPage = () => {
    const { categoryId } = useParams()
    const [selectedProduct, setSelectedProduct] = useState(null)

    // Normalize category ID for matching
    // e.g., "detergent-and-cleaning-fragrances" -> "Detergent & Cleaning Fragrances"
    const normalizeCategory = (slug) => {
        if (!slug) return "";
        // Replace 'and' with '&' carefully only if it looks like a conjunction in our context or just try simple replace
        // Our ProductOverview generates: title.toLowerCase().replace(/ /g, '-').replace(/&/g, 'and')
        // So we reverse:

        const knownCategories = [
            "Detergent & Cleaning Fragrances",
            "Personal Care & Cosmetic Bases",
            "Air Freshener & Home Care",
            "Candles, Incense & Aroma Products",
            "Industrial / Institutional Cleaning",
            "Fabric Softeners & Laundry Care"
        ];

        // Try to fuzzy match
        const decoded = slug.replace(/-/g, ' ').replace(/\band\b/g, '&'); // simplistic reverse

        // Find exact match case insensitive
        const match = knownCategories.find(c =>
            c.toLowerCase().replace(/ /g, '-').replace(/&/g, 'and') === slug.toLowerCase() ||
            c.toLowerCase() === decoded.toLowerCase()
        );

        return match || decoded; // Fallback to decoded if no exact known match
    }

    const categoryName = normalizeCategory(categoryId);

    // Filter products
    const displayProducts = products.filter(p =>
        p.category.toLowerCase() === categoryName.toLowerCase() ||
        categoryId.toLowerCase() === 'all'
    );

    // Hero Content Mapping - Simplified to generic fallback based on name since we have dynamic new categories
    // We can define specific colors if we want
    const getHeroStyle = (name) => {
        if (name.includes("Detergent")) return { color: "bg-blue-900", image: products.find(p => p.category === name)?.image };
        if (name.includes("Personal")) return { color: "bg-pink-900", image: products.find(p => p.category === name)?.image };
        if (name.includes("Air")) return { color: "bg-cyan-900", image: products.find(p => p.category === name)?.image };
        if (name.includes("Candle")) return { color: "bg-amber-900", image: products.find(p => p.category === name)?.image };
        if (name.includes("Industrial")) return { color: "bg-gray-800", image: products.find(p => p.category === name)?.image };
        if (name.includes("Fabric")) return { color: "bg-indigo-900", image: products.find(p => p.category === name)?.image };
        if (name.includes("Essential")) return { color: "bg-leaf-800", image: products.find(p => p.category === name)?.image };
        if (name.includes("Fine")) return { color: "bg-purple-900", image: products.find(p => p.category === name)?.image };
        if (name.includes("Perfume")) return { color: "bg-rose-900", image: products.find(p => p.category === name)?.image };
        return { color: "bg-forest-900", image: products.find(p => p.category === name)?.image || products[0].image };
    }



    // ... (existing code)

    const heroStyle = getHeroStyle(categoryName);

    // Dynamic SEO Data
    const getSEO = (cat) => {
        if (cat.includes("Industrial")) return {
            title: "Industrial Fragrance Manufacturer | Bulk Scents for Detergents & Soaps",
            desc: "Leading manufacturer of industrial fragrances for detergents, soaps, and cleaning products. High-performance, long-lasting synthetic blends.",
            kw: "industrial fragrances, detergent scent, soap fragrance manufacturer, cleaning product smells, bulk synthetic fragrance"
        };
        if (cat.includes("Essential")) return {
            title: "Wholesale Essential Oils Manufacturer | 100% Pure & Natural",
            desc: "Supplier of pure, certified essential oils including Lavender, Sandalwood, and Rose. Ethically sourced and scientifically tested for purity.",
            kw: "bulk essential oils, pure essential oil manufacturer, wholesale lavender oil, sandalwood oil supplier, natural extracts"
        };
        if (cat.includes("Fine") || cat.includes("Perfume")) return {
            title: "Fine Fragrance & Perfume Oil Manufacturer | Premium Scents",
            desc: "Exquisite fine fragrances and perfume oils for luxury brands. Custom formulations matching global olfactory trends.",
            kw: "fine fragrance manufacturer, perfume oil wholesale, attar manufacturer, luxury scent supplier, body perfume raw material"
        };
        return {
            title: `${cat} Manufacturer & Supplier | Shalu Enterprises`,
            desc: `Premium quality ${cat} for industrial and personal care applications. Wholesale supply with global shipping.`,
            kw: `${cat}, fragrance manufacturer, bulk supply, Shalu Enterprises`
        };
    }

    const seoData = getSEO(categoryName);

    // Default fallback
    const currentHero = {
        title: categoryName,
        subtitle: `Explore our premium range of ${categoryName}.`,
        color: heroStyle.color,
        image: heroStyle.image || "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&q=80"
    }

    return (
        <div className="min-h-screen bg-white">
            <SEO
                title={seoData.title}
                description={seoData.desc}
                keywords={seoData.kw}
                image={currentHero.image}
                url={`/products/category/${categoryId}`}
            />
            {/* Dynamic Hero Section */}
            <section className={`relative h-[50vh] flex items-center px-8 overflow-hidden`}>
                <div className="absolute inset-0">
                    <img src={currentHero.image} alt={currentHero.title} className="w-full h-full object-cover" />
                    <div className={`absolute inset-0 ${currentHero.color} opacity-80 mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-black/30" />
                </div>

                <div className="relative max-w-7xl mx-auto w-full z-10 pt-20">
                    <Link to="/products" className="inline-flex items-center text-white/80 hover:text-white mb-6 text-sm font-bold tracking-widest uppercase transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Collection
                    </Link>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-serif text-white mb-4 shadow-sm"
                    >
                        {currentHero.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-white/90 max-w-2xl font-light"
                    >
                        {currentHero.subtitle}
                    </motion.p>
                </div>
            </section>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-8 py-16">

                {/* Stats / Intro */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-gray-100 pb-8">
                    <div className="text-gray-500 text-sm">
                        Showing <span className="font-bold text-forest-900">{displayProducts.length}</span> products
                    </div>
                </div>

                {displayProducts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {displayProducts.map((p, i) => (
                            <motion.div
                                key={p.id}
                                layoutId={`product-${p.id}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-leaf-100/40 transition-all duration-300 cursor-pointer"
                                onClick={() => setSelectedProduct(p)}
                            >
                                <div className="aspect-square bg-gray-50 overflow-hidden relative">
                                    <img
                                        src={p.image}
                                        alt={p.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded text-forest-900">
                                        {p.cas !== "Pending" ? "CAS: " + p.cas : "Proprietary"}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-forest-900 mb-2 truncate group-hover:text-leaf-600 transition-colors">{p.name}</h3>
                                    <p className="text-xs text-gray-500 line-clamp-2 h-8 leading-relaxed mb-4">{p.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-gray-50 rounded-2xl p-16 text-center">
                        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
                            <Search className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
                        <p className="text-gray-500 mb-8 max-w-md mx-auto">We are constantly updating our digital catalog. Please contact us directly for the full stock list of {currentHero.title}.</p>
                        <Link to="/contact" className="inline-block bg-forest-900 text-white px-8 py-3 rounded font-bold tracking-widest uppercase text-xs hover:bg-leaf-600 transition-colors">
                            Contact Sales
                        </Link>
                    </div>
                )}
            </div>

            {/* Quick Contact Form (Simplified) */}
            <section className="bg-forest-900 text-white py-20 px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-serif mb-6">Looking for something specific?</h2>
                    <p className="text-white/70 mb-8">Our R&D team specializes in custom formulation for {currentHero.title.toLowerCase()}.</p>
                    <Link to="/contact" className="inline-block bg-white text-forest-900 px-10 py-4 rounded font-bold tracking-widest uppercase hover:bg-leaf-500 hover:text-white transition-colors">
                        Request Formulation
                    </Link>
                </div>
            </section>

            {/* Product Details Modal */}
            <ProductModal
                isOpen={!!selectedProduct}
                onClose={() => setSelectedProduct(null)}
                product={selectedProduct}
            />
        </div>
    )
}

export default CategoryPage
