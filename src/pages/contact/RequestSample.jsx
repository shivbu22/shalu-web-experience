import React from 'react'
import PageHeader from '../../components/PageHeader'
import { Package } from 'lucide-react'

const RequestSample = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageHeader
                title="Request Samples"
                subtitle="Qualified businesses can request trial samples of our compounds."
                badge="Sampling"
            />

            <div className="max-w-3xl mx-auto px-8 py-20">
                <div className="bg-mint-50 p-8 rounded-3xl border border-leaf-100 flex gap-6 items-start mb-12">
                    <Package className="w-12 h-12 text-leaf-500 shrink-0" />
                    <div>
                        <h3 className="font-bold text-forest-900 text-lg">Sampling Policy</h3>
                        <p className="text-sm text-gray-500 leading-relaxed mt-2">
                            We offer standard 10g samples for most aroma chemicals and 5g for fine fragrances. Samples are free of charge for registered business entities; shipping fees may apply for international locations.
                        </p>
                    </div>
                </div>

                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input type="text" placeholder="First Name" className="w-full p-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-leaf-500" />
                        <input type="text" placeholder="Last Name" className="w-full p-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-leaf-500" />
                    </div>
                    <input type="email" placeholder="Business Email" className="w-full p-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-leaf-500" />
                    <input type="text" placeholder="Company Name" className="w-full p-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-leaf-500" />
                    <textarea placeholder="List required products..." className="w-full p-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-leaf-500 h-32"></textarea>

                    <button className="w-full py-4 bg-forest-900 text-white font-bold rounded-lg hover:bg-leaf-600 transition-colors uppercase tracking-widest">Submit Request</button>
                </form>
            </div>
        </div>
    )
}

export default RequestSample
