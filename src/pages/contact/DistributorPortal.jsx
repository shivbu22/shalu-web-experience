import React from 'react'
import PageHeader from '../../components/PageHeader'
import { Lock } from 'lucide-react'

const DistributorPortal = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageHeader
                title="Distributor Portal"
                subtitle="Exclusive access for authorized channel partners."
                badge="Login"
            />

            <div className="max-w-md mx-auto px-8 py-20">
                <div className="border border-leaf-100 rounded-3xl p-10 shadow-xl shadow-leaf-100/20 text-center">
                    <Lock className="w-12 h-12 text-leaf-500 mx-auto mb-6" />
                    <h2 className="text-xl font-bold text-forest-900 mb-8">Secure Login</h2>

                    <form className="space-y-4">
                        <input type="text" placeholder="Distributor ID" className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-leaf-500" />
                        <input type="password" placeholder="Password" className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-leaf-500" />
                        <button className="w-full py-3 bg-leaf-500 text-white font-bold rounded-lg hover:bg-leaf-600 transition-colors">Access Dashboard</button>
                    </form>

                    <p className="mt-6 text-xs text-gray-400">Restricted Access. Unauthorized attempts are logged.</p>
                </div>
            </div>
        </div>
    )
}

export default DistributorPortal
