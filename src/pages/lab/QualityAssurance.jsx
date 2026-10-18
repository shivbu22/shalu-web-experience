import React from 'react'
import PageHeader from '../../components/PageHeader'
import { CheckCircle } from 'lucide-react'

const QualityAssurance = () => {
    const protocols = [
        { name: "Gas Chromatography (GC)", desc: "Separating volatile compounds for purity analysis." },
        { name: "Mass Spectrometry (MS)", desc: "Identifying molecular structures with high precision." },
        { name: "Refractive Index", desc: "Verifying purity based on light refraction properties." },
        { name: "Optical Rotation", desc: "Checking chirality of chiral molecules." },
        { name: "Specific Gravity", desc: "Density verification against standard benchmarks." },
        { name: "Olfactory Assessment", desc: "Expert panel evaluation for odor profile accuracy." },
    ]

    return (
        <div className="min-h-screen bg-white">
            <PageHeader
                title="Quality Assurance"
                subtitle="Zero compromise on purity. Every batch is rigorously tested against global standards."
                badge="Protocols"
            />

            <div className="max-w-6xl mx-auto px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {protocols.map((p, i) => (
                        <div key={i} className="bg-white border border-leaf-100 p-8 rounded-2xl hover:shadow-lg hover:shadow-leaf-100/50 transition-all group">
                            <div className="flex items-start justify-between mb-4">
                                <h3 className="text-lg font-bold text-forest-900 pr-4">{p.name}</h3>
                                <CheckCircle className="w-6 h-6 text-leaf-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default QualityAssurance
