import React from 'react'
import PageHeader from '../../components/PageHeader'

const News = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageHeader
                title="News & Events"
                subtitle="Latest company announcements and exhibition schedules."
                badge="Press"
            />

            <div className="max-w-4xl mx-auto px-8 py-20 space-y-8">
                <div className="border border-leaf-100 p-8 rounded-2xl hover:shadow-lg transition-all bg-white">
                    <span className="inline-block px-3 py-1 bg-leaf-100 text-leaf-700 text-xs font-bold rounded-full mb-4">UPCOMING EVENT</span>
                    <h3 className="text-2xl font-bold text-forest-900 mb-2">BeautyWorld Middle East 2026</h3>
                    <p className="text-gray-500 mb-4">Join us at Dubai World Trade Centre. Hall 2, Stand A-24.</p>
                    <p className="text-sm font-bold text-forest-800">Oct 26-28, 2026 • Dubai, UAE</p>
                </div>

                <div className="border border-leaf-100 p-8 rounded-2xl hover:shadow-lg transition-all bg-white">
                    <span className="inline-block px-3 py-1 bg-mint-100 text-forest-700 text-xs font-bold rounded-full mb-4">PRESS RELEASE</span>
                    <h3 className="text-2xl font-bold text-forest-900 mb-2">Expansion of Distillation Capacity</h3>
                    <p className="text-gray-500">Shalu Enterprises announces the commissioning of a new 50-tonne essential oil unit in Kannauj.</p>
                </div>
            </div>
        </div>
    )
}

export default News
