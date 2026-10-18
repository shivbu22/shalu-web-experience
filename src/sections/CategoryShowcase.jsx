import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const CategoryShowcase = ({ title, description, image, link, reverse = false, badge }) => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-8">
                <div className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${reverse ? 'lg:flex-row-reverse' : ''}`}>

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-2xl shadow-leaf-100/30">
                            <img
                                src={image}
                                alt={title}
                                loading="lazy"
                                decoding="async"
                                width="800"
                                height="600"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-forest-900/10 group-hover:bg-transparent transition-colors duration-500" />

                            {/* Decorative Badge */}
                            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-forest-900 tracking-widest uppercase shadow-sm">
                                {badge}
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-1/2"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-forest-900 mb-6 leading-tight">{title}</h2>
                        <div className="w-20 h-1 bg-leaf-500 mb-8" />
                        <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                            {description}
                        </p>

                        <Link to={link} className="inline-flex items-center gap-3 text-forest-900 font-bold tracking-widest uppercase text-sm hover:text-leaf-600 transition-colors group">
                            Discover Collection
                            <span className="w-8 h-8 rounded-full bg-mint-50 flex items-center justify-center group-hover:bg-leaf-500 group-hover:text-white transition-all duration-300">
                                <ArrowRight className="w-4 h-4" />
                            </span>
                        </Link>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default CategoryShowcase
