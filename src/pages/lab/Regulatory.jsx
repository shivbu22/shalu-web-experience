import React from 'react'
import PageHeader from '../../components/PageHeader'
import { ShieldAlert, FileText, Globe } from 'lucide-react'

const Regulatory = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageHeader
                title="Regulatory Compliance"
                subtitle="Navigating the complex landscape of global chemical safety and transport regulations."
                badge="Safety"
            />

            <div className="max-w-4xl mx-auto px-8 py-20 space-y-12">
                <div className="flex gap-8 items-start">
                    <div className="w-12 h-12 bg-mint-100 rounded-xl flex items-center justify-center shrink-0">
                        <ShieldAlert className="w-6 h-6 text-leaf-600" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-forest-900 mb-2">IFRA Standards</h3>
                        <p className="text-gray-500 leading-relaxed">
                            We strictly adhere to the latest Code of Practice established by the International Fragrance Association, ensuring all our compounds are safe for their intended use in consumer products.
                        </p>
                    </div>
                </div>

                <div className="flex gap-8 items-start">
                    <div className="w-12 h-12 bg-mint-100 rounded-xl flex items-center justify-center shrink-0">
                        <Globe className="w-6 h-6 text-leaf-600" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-forest-900 mb-2">REACH (EU)</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Our core portfolio for the European market is REACH registered, allowing for seamless export and distribution within the EU zone.
                        </p>
                    </div>
                </div>

                <div className="flex gap-8 items-start">
                    <div className="w-12 h-12 bg-mint-100 rounded-xl flex items-center justify-center shrink-0">
                        <FileText className="w-6 h-6 text-leaf-600" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-forest-900 mb-2">Documentation Support</h3>
                        <p className="text-gray-500 leading-relaxed mb-4">
                            We provide comprehensive regulatory documentation for every shipment:
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {["SDS (Safety Data Sheets)", "COA (Certificate of Analysis)", "Allergen Declarations", "Non-GMO Statements"].map(item => (
                                <li key={item} className="flex items-center gap-2 text-sm font-bold text-forest-800">
                                    <div className="w-1.5 h-1.5 bg-leaf-500 rounded-full" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Regulatory
