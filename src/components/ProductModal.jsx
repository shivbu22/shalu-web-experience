import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, Info } from 'lucide-react'
import { Link } from 'react-router-dom'

const ProductModal = ({ isOpen, onClose, product }) => {
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    if (!isOpen || !product) return null

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
                />

                {/* Modal Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-forest-900 hover:bg-leaf-500 hover:text-white transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    {/* Left: Image Side */}
                    <div className="w-full md:w-1/2 bg-gray-100 relative min-h-[300px] md:min-h-full">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6 text-white md:hidden">
                            <h2 className="text-2xl font-serif font-bold">{product.name}</h2>
                            <p className="text-sm opacity-90">{product.category}</p>
                        </div>
                    </div>

                    {/* Right: Details Side */}
                    <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col">
                        <div className="mb-6 hidden md:block">
                            <span className="inline-block px-3 py-1 bg-leaf-50 text-leaf-700 text-xs font-bold tracking-widest uppercase rounded-full mb-3">
                                {product.category}
                            </span>
                            <h2 className="text-4xl font-serif font-bold text-forest-900 mb-2">{product.name}</h2>
                        </div>

                        <div className="space-y-6 flex-grow">
                            {/* CAS Number */}
                            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-leaf-600 shadow-sm">
                                    <Info className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">CAS Number</p>
                                    <p className="text-forest-900 font-mono font-medium">{product.cas || "Pending/Proprietary"}</p>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="prose prose-sm text-gray-600">
                                <h3 className="text-forest-900 font-bold text-sm uppercase tracking-wider mb-2">Description</h3>
                                <p className="leading-relaxed">
                                    {product.description || "A premium quality fragrance ingredient meticulously crafted for superior olfactory performance."}
                                </p>
                            </div>

                            {/* Olfactory Notes (if present) */}
                            {product.olfactoryNotes && (
                                <div className="p-4 bg-mint-50/50 rounded-xl border border-mint-100/50">
                                    <h3 className="text-leaf-800 font-bold text-sm uppercase tracking-wider mb-4">Olfactory Profile</h3>
                                    <div className="space-y-3">
                                        <div className="flex">
                                            <span className="w-16 text-xs font-bold text-forest-900 uppercase tracking-wider">Top:</span>
                                            <span className="text-sm text-gray-600">{product.olfactoryNotes.top}</span>
                                        </div>
                                        <div className="flex">
                                            <span className="w-16 text-xs font-bold text-forest-900 uppercase tracking-wider">Heart:</span>
                                            <span className="text-sm text-gray-600">{product.olfactoryNotes.heart}</span>
                                        </div>
                                        <div className="flex">
                                            <span className="w-16 text-xs font-bold text-forest-900 uppercase tracking-wider">Base:</span>
                                            <span className="text-sm text-gray-600">{product.olfactoryNotes.base}</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Application Areas */}
                            <div>
                                <h3 className="text-forest-900 font-bold text-sm uppercase tracking-wider mb-3">Ideal Applications</h3>
                                <div className="flex flex-wrap gap-2">
                                    {(product.applications || ['Fine Fragrance', 'Personal Care', 'Home Care']).map(tag => (
                                        <span key={tag} className="px-3 py-1 border border-gray-200 rounded-full text-xs font-medium text-gray-500 bg-white">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col gap-4">
                            <Link
                                to="/contact"
                                onClick={onClose}
                                className="w-full py-4 bg-forest-900 text-white text-center font-bold tracking-widest uppercase rounded-xl hover:bg-leaf-600 transition-colors shadow-lg hover:shadow-xl hover:shadow-leaf-100/50 flex items-center justify-center gap-2"
                            >
                                Request Sample <ArrowRight className="w-4 h-4" />
                            </Link>
                            <p className="text-center text-xs text-gray-400">
                                Need technical documents? <Link to="/contact" className="text-leaf-600 hover:underline">Contact our regulatory team</Link>.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    )
}

export default ProductModal
