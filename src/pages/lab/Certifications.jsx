import React from 'react'
import PageHeader from '../../components/PageHeader'
import { Award } from 'lucide-react'

const Certifications = () => {
    const certs = [
        "ISO 9001:2015",
        "GMP Certified",
        "Kosher Certified",
        "Halal Certified",
        "FSSAI License",
        "REACH Ready",
        "USDA Organic",
        "IFRA Member"
    ]

    return (
        <div className="min-h-screen bg-white">
            <PageHeader
                title="Certifications"
                subtitle="Accredited by leading global bodies for safety, quality, and environmental management."
                badge="Compliance"
            />

            <div className="max-w-5xl mx-auto px-8 py-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {certs.map((cert, i) => (
                        <div key={i} className="aspect-square flex flex-col items-center justify-center p-8 border border-leaf-100 rounded-3xl bg-mint-50/30 hover:bg-white hover:shadow-xl transition-all duration-300">
                            <Award className="w-12 h-12 text-leaf-500 mb-6" />
                            <span className="font-bold text-forest-900 text-center">{cert}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Certifications
