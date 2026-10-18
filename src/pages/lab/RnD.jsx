import React from 'react'
import PageHeader from '../../components/PageHeader'
import { FlaskConical, Atom, TestTube } from 'lucide-react'

const RnD = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageHeader
                title="Research & Development"
                subtitle="Pioneering the future of olfactory science through molecular innovation."
                badge="Innovation"
            />

            <div className="max-w-7xl mx-auto px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
                    <div>
                        <h2 className="text-3xl font-bold text-forest-900 mb-6">The Innovation Pipeline</h2>
                        <p className="text-gray-500 mb-6 leading-relaxed">
                            Our R&D center focuses on three core pillars: Green Chemistry, Biotechnology, and Scent Extraction efficiency. We are constantly identifying new botanical sources and developing cleaner methods to isolate their key volatiles.
                        </p>
                        <p className="text-gray-500 leading-relaxed">
                            With a dedicated team of 15 chemists and perfumers, we bridge the gap between pure science and artistic creation.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-mint-50 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
                            <FlaskConical className="w-10 h-10 text-leaf-500 mb-4" />
                            <h4 className="font-bold text-forest-900">Green Synthesis</h4>
                        </div>
                        <div className="bg-white border border-leaf-100 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
                            <Atom className="w-10 h-10 text-leaf-500 mb-4" />
                            <h4 className="font-bold text-forest-900">Molecular Isolation</h4>
                        </div>
                        <div className="bg-white border border-leaf-100 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
                            <TestTube className="w-10 h-10 text-leaf-500 mb-4" />
                            <h4 className="font-bold text-forest-900">Fragrance Profiling</h4>
                        </div>
                        <div className="bg-mint-50 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
                            <div className="w-10 h-10 bg-leaf-500 rounded-full flex items-center justify-center text-white font-bold">AI</div>
                            <h4 className="font-bold text-forest-900 mt-4">AI Prediction</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RnD
