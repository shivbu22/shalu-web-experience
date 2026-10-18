import React from 'react'
import PageHeader from '../../components/PageHeader'
import { Database, Activity, Wind } from 'lucide-react'

const Infrastructure = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageHeader
                title="Infrastructure"
                subtitle="State-of-the-art manufacturing facilities equipped with advanced distillation and fractionation columns."
                badge="Capability"
            />

            <div className="max-w-7xl mx-auto px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
                    <div className="bg-mint-50 h-[400px] rounded-2xl flex items-center justify-center relative overflow-hidden">
                        {/* Conceptual Graphic */}
                        <div className="absolute inset-0 bg-forest-900/5" />
                        <Wind className="w-32 h-32 text-leaf-200" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-forest-900 mb-6">Advanced Distillation Units</h2>
                        <p className="text-gray-500 mb-6 leading-relaxed">
                            Our facility houses 24 dedicated stainless steel distillation columns capable of handling high-volume extraction while maintaining precise temperature controls to preserve heat-sensitive volatiles.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Vacuum Distillation Units",
                                "Fractional Distillation Columns",
                                "Molecular Distillation (Short Path)",
                                "Solvent Extraction Plants"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-forest-800 font-medium">
                                    <div className="w-2 h-2 rounded-full bg-leaf-500" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-8 border border-leaf-100 rounded-2xl hover:shadow-lg transition-all">
                        <Database className="w-10 h-10 text-leaf-500 mb-6" />
                        <h3 className="text-xl font-bold text-forest-900 mb-3">Storage Capacity</h3>
                        <p className="text-gray-500 text-sm">
                            Climate-controlled warehousing with a capacity of over 500 Metric Tonnes ensures consistency of raw materials year-round.
                        </p>
                    </div>
                    <div className="p-8 border border-leaf-100 rounded-2xl hover:shadow-lg transition-all">
                        <Activity className="w-10 h-10 text-leaf-500 mb-6" />
                        <h3 className="text-xl font-bold text-forest-900 mb-3">QC Laboratory</h3>
                        <p className="text-gray-500 text-sm">
                            In-house advanced lab integrated with the production floor for real-time quality monitoring during synthesis.
                        </p>
                    </div>
                    <div className="p-8 border border-leaf-100 rounded-2xl hover:shadow-lg transition-all">
                        <Wind className="w-10 h-10 text-leaf-500 mb-6" />
                        <h3 className="text-xl font-bold text-forest-900 mb-3">Effluent Treatment</h3>
                        <p className="text-gray-500 text-sm">
                            Zero Liquid Discharge (ZLD) facility ensuring 100% recycling of water used in the cooling and steam processes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Infrastructure
