import React from 'react'
import PageHeader from '../../components/PageHeader'

const Careers = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageHeader
                title="Join Our Team"
                subtitle="Build the future of scent with us."
                badge="Careers"
            />

            <div className="max-w-4xl mx-auto px-8 py-20 text-center">
                <h2 className="text-2xl font-bold text-forest-900 mb-6">Current Openings</h2>
                <p className="text-gray-500 mb-12">There are currently no open positions listed online.</p>

                <div className="bg-mint-50 p-12 rounded-2xl">
                    <p className="text-forest-800 font-medium mb-4">Don't see a role for you? We are always looking for talent.</p>
                    <button className="px-8 py-3 bg-leaf-500 text-white font-bold rounded-full hover:bg-leaf-600 transition-colors">Email your Resume</button>
                </div>
            </div>
        </div>
    )
}

export default Careers
