import React from 'react'
import PageHeader from '../../components/PageHeader'
import { Leaf, Droplets, Users } from 'lucide-react'

const Sustainability = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageHeader
                title="Sustainability Promise"
                subtitle="We believe in giving back to nature more than what we take from it."
                badge="Impact"
            />

            <div className="max-w-7xl mx-auto px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Environment */}
                    <div className="bg-mint-50/50 p-10 rounded-3xl border border-leaf-100">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-leaf-600 shadow-sm mb-8">
                            <Leaf className="w-8 h-8" />
                        </div>
                        <h2 className="text-2xl font-bold text-forest-900 mb-4">Carbon Footprint</h2>
                        <p className="text-gray-500 leading-relaxed mb-6">
                            We have reduced our carbon emissions by 40% through the installation of solar panels at our production facility and transitioning to biomass boilers for steam generation.
                        </p>
                        <div className="h-2 w-full bg-white rounded-full overflow-hidden">
                            <div className="h-full w-[60%] bg-leaf-500 rounded-full" />
                        </div>
                        <p className="text-xs font-bold text-leaf-600 mt-2 tracking-wider">GOAL: NET ZERO BY 2030</p>
                    </div>

                    {/* Water */}
                    <div className="bg-mint-50/50 p-10 rounded-3xl border border-leaf-100">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-leaf-600 shadow-sm mb-8">
                            <Droplets className="w-8 h-8" />
                        </div>
                        <h2 className="text-2xl font-bold text-forest-900 mb-4">Water Stewardship</h2>
                        <p className="text-gray-500 leading-relaxed mb-6">
                            Implementing rigorous rainwater harvesting and closed-loop cooling systems allows us to recycle 95% of water used in distillation.
                        </p>
                        <div className="h-2 w-full bg-white rounded-full overflow-hidden">
                            <div className="h-full w-[95%] bg-blue-400 rounded-full" />
                        </div>
                        <p className="text-xs font-bold text-blue-500 mt-2 tracking-wider">95% WATER RECYCLED</p>
                    </div>

                    {/* Community */}
                    <div className="bg-mint-50/50 p-10 rounded-3xl border border-leaf-100">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-leaf-600 shadow-sm mb-8">
                            <Users className="w-8 h-8" />
                        </div>
                        <h2 className="text-2xl font-bold text-forest-900 mb-4">Farmer Support</h2>
                        <p className="text-gray-500 leading-relaxed mb-6">
                            We tackle the root of the supply chain by providing 500+ local farmers with organic seeds, fair pricing contracts, and education on sustainable farming practices.
                        </p>
                        <div className="h-2 w-full bg-white rounded-full overflow-hidden">
                            <div className="h-full w-[100%] bg-orange-400 rounded-full" />
                        </div>
                        <p className="text-xs font-bold text-orange-500 mt-2 tracking-wider">500+ FARMERS SUPPORTED</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sustainability
