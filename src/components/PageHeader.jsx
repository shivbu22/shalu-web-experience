import React from 'react'
import { motion } from 'framer-motion'

const PageHeader = ({ title, subtitle, badge }) => {
    return (
        <div className="pt-32 pb-12 px-8 bg-white border-b border-mint-50">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block py-2 px-4 rounded-full bg-mint-100 text-leaf-600 font-bold text-xs tracking-[0.2em] uppercase mb-6">
                        {badge}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-sans font-bold text-forest-900 mb-6 tracking-tight">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                            {subtitle}
                        </p>
                    )}
                </motion.div>
            </div>
        </div>
    )
}

export default PageHeader
