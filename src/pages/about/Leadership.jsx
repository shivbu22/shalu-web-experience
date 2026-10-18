import React from 'react'
import PageHeader from '../../components/PageHeader'
import { Linkedin } from 'lucide-react'
import directorImg from '../../assets/images/director.png'

const Leadership = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageHeader
                title="Leadership Team"
                subtitle="Guided by vision, driven by innovation."
                badge="People"
            />

            <div className="max-w-4xl mx-auto px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Leader 1 */}
                    <div className="group text-center">
                        <div className="w-64 h-64 mx-auto bg-mint-50 rounded-full mb-8 overflow-hidden transition-all duration-500 border-4 border-white shadow-lg group-hover:shadow-leaf-200 relative">
                            <img
                                src={directorImg}
                                alt="Deepank Bharadwaj"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-forest-900 mb-2">Deepank Bhardwaj</h3>
                        <span className="text-leaf-600 text-sm font-bold tracking-widest uppercase block mb-4">CEO & Founder</span>
                        <div className="w-12 h-1 bg-leaf-200 mx-auto mb-6 rounded-full"></div>
                        <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                            Leading Shalu Enterprises with a vision to redefine the fragrance industry through innovation and sustainability.
                        </p>
                    </div>

                    {/* Leader 2 */}
                    <div className="group text-center">
                        <div className="w-64 h-64 mx-auto bg-mint-50 rounded-full mb-8 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 border-4 border-white shadow-lg group-hover:shadow-leaf-200 relative">
                            {/* Abstract Placeholder for Avatar */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-forest-900/10 to-leaf-500/10 flex items-center justify-center">
                                <span className="text-4xl font-serif text-leaf-700/20">MR</span>
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-forest-900 mb-2">Dr. Mohmmad Rehan</h3>
                        <span className="text-leaf-600 text-sm font-bold tracking-widest uppercase block mb-4">Head of R&D</span>
                        <div className="w-12 h-1 bg-leaf-200 mx-auto mb-6 rounded-full"></div>
                        <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                            Spearheading our research initiatives to create groundbreaking olfactory experiences.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Leadership
