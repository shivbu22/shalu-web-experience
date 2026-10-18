import React from 'react'
import PageHeader from '../../components/PageHeader'
import { ArrowRight } from 'lucide-react'

const Blog = () => {
    const posts = [
        { title: "The Resurgence of Natural Attars in Modern Perfumery", category: "Trends", date: "Oct 12, 2025" },
        { title: "Understanding the Molecular Difference: Iso E Super", category: "Education", date: "Sep 28, 2025" },
        { title: "Sustainable sourcing of Indian Sandalwood", category: "Sustainability", date: "Sep 15, 2025" },
        { title: "Top 5 Fragrance Notes for Summer 2026", category: "Forecast", date: "Aug 02, 2025" }
    ]

    return (
        <div className="min-h-screen bg-white">
            <PageHeader
                title="Fragrance Journal"
                subtitle="Insights, trends, and educational pieces from our expert perfumers."
                badge="Media"
            />

            <div className="max-w-6xl mx-auto px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {posts.map((post, i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="aspect-video bg-mint-50 rounded-2xl mb-6 overflow-hidden relative">
                                <div className="absolute inset-0 bg-forest-900/5 group-hover:bg-transparent transition-colors" />
                            </div>
                            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-leaf-600 mb-3">
                                <span>{post.category}</span>
                                <span className="text-gray-300">•</span>
                                <span className="text-gray-400">{post.date}</span>
                            </div>
                            <h2 className="text-2xl font-bold text-forest-900 mb-4 group-hover:text-leaf-600 transition-colors">{post.title}</h2>
                            <span className="flex items-center gap-2 text-sm font-bold text-forest-900 group-hover:gap-4 transition-all">Read Article <ArrowRight className="w-4 h-4" /></span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blog
