import React, { useState } from 'react'
import { products } from '../data/products'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const SearchResults = () => {
    const [query, setQuery] = useState('')

    const filteredProducts = query.length > 0
        ? products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()))
        : []

    return (
        <div className="pt-32 px-8 min-h-screen bg-white">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-serif text-forest-900 mb-8 text-center">Search Collection</h1>

                <div className="max-w-2xl mx-auto mb-16">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full p-4 border border-leaf-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-leaf-500 focus:border-transparent text-lg shadow-sm"
                        placeholder="Search for fragrances (e.g., Amber, Rose, Musk)..."
                    />
                </div>

                {query && (
                    <div className="mb-8 text-forest-600">
                        Found {filteredProducts.length} result{filteredProducts.length !== 1 && 's'} for "{query}"
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">
                    {filteredProducts.map((p) => (
                        <div key={p.id} className="border border-leaf-100 p-8 rounded-2xl hover:shadow-xl hover:shadow-leaf-100/30 transition-all group bg-white">
                            <h3 className="text-xl font-bold text-forest-900 mb-2 capitalize">{p.name}</h3>
                            <div className="aspect-square w-full mb-4 overflow-hidden rounded-lg bg-gray-50">
                                <img src={p.image} alt={p.name} className="w-full h-full object-cover hover:scale-105 transition-all duration-500" />
                            </div>
                            <p className="text-gray-500 text-sm mb-6 leading-relaxed">{p.description}</p>

                            <Link to="#" className="inline-flex items-center gap-2 text-sm font-bold text-forest-900 group-hover:text-leaf-600 transition-colors">
                                View Details <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SearchResults
