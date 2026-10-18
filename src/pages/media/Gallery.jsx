import { products } from '../../data/products'

const Gallery = () => {
    // Get a mix of images
    const galleryImages = products.slice(0, 12);

    return (
        <div className="min-h-screen bg-white">
            <PageHeader
                title="Visual Archive"
                subtitle="A glimpse into our manufacturing processes and sourcing expeditions."
                badge="Gallery"
            />

            <div className="max-w-7xl mx-auto px-8 py-20">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {galleryImages.map((item, index) => (
                        <div key={index} className="aspect-square bg-gray-50 rounded-xl overflow-hidden relative group cursor-pointer hover:shadow-xl transition-all">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-forest-900/0 group-hover:bg-forest-900/20 transition-colors duration-500" />
                            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <span className="text-xs font-bold text-forest-900 bg-white/90 px-3 py-1.5 rounded-full backdrop-blur-md shadow-sm">
                                    {item.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Gallery
