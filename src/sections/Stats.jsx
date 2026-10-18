import React from 'react'
import { motion } from 'framer-motion'
import { FlaskConical, Globe, Award, Leaf } from 'lucide-react'

const StatItem = ({ number, label, icon: Icon, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay }}
            className="flex flex-col items-center text-center p-6 border border-leaf-100/50 rounded-2xl bg-white/50 backdrop-blur-sm hover:shadow-xl hover:shadow-leaf-100/20 transition-all duration-300 group"
        >
            <div className="w-12 h-12 bg-mint-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-6 h-6 text-leaf-600" />
            </div>
            <h3 className="text-4xl font-serif font-bold text-forest-900 mb-2">{number}</h3>
            <p className="text-sm font-bold tracking-widest uppercase text-gray-500">{label}</p>
        </motion.div>
    )
}

const Stats = () => {
    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-leaf-500 blur-3xl" />
                <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-forest-900 blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-leaf-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Manufacturing Excellence</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-forest-900">Partner of Choice for <br /><span className="italic text-leaf-600">Global Brands.</span></h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <StatItem number="500+" label="Unique Formulations" icon={FlaskConical} delay={0.1} />
                    <StatItem number="100%" label="Quality Assured" icon={Award} delay={0.2} />
                    <StatItem number="Global" label="Supply Network" icon={Globe} delay={0.3} />
                </div>
            </div>
        </section>
    )
}

export default Stats
