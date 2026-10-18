import React from 'react'
import PageHeader from '../../components/PageHeader'
import { Mail, Phone, MapPin } from 'lucide-react'
import SEO from '../../components/SEO'

const ContactUs = () => {
    return (
        <div className="min-h-screen bg-white">
            <SEO 
                title="Contact Us | Shalu Enterprises"
                description="Get in touch with Shalu Enterprises for custom fragrance formulations, bulk wholesale inquiries, and essential oil samples. Global shipping available."
                keywords="contact Shalu Enterprises, wholesale fragrance inquiry, buy essential oils in bulk, Indian perfume manufacturer contact"
                url="/contact/contact-us"
            />
            <PageHeader
                title="Get in Touch"
                subtitle="Connect with our specialists for custom formulation inquiries."
                badge="Contact"
            />

            <section className="py-20 px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
                    {/* Contact Info / Abstract Map Placeholder */}
                    <div className="flex flex-col justify-center space-y-12">
                        <div className="space-y-2">
                            <h3 className="text-2xl font-bold text-forest-900">Shalu Enterprises</h3>
                            <p className="text-gray-500">Excellence in every drop.</p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 rounded-full bg-mint-50 flex items-center justify-center text-leaf-600 group-hover:bg-leaf-500 group-hover:text-white transition-all">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-forest-900 mb-1">Visit Us</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        Shop No. 2, Ground Floor, Tirupati Enclave,<br />
                                        Lal Kuan, Ghaziabad - 201009, Uttar Pradesh, INDIA.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 rounded-full bg-mint-50 flex items-center justify-center text-leaf-600 group-hover:bg-leaf-500 group-hover:text-white transition-all">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-forest-900 mb-1">Email Us</h4>
                                    <p className="text-gray-500 text-sm">info@shaluenterprises.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 rounded-full bg-mint-50 flex items-center justify-center text-leaf-600 group-hover:bg-leaf-500 group-hover:text-white transition-all">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-forest-900 mb-1">Call Us</h4>
                                    <p className="text-gray-500 text-sm">+91 8700531741</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Clean Form */}
                    <div className="bg-white p-2">
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="block text-xs font-bold uppercase tracking-widest text-leaf-600">Name</label>
                                    <input type="text" className="w-full bg-mint-50/50 border-0 border-b-2 border-gray-200 focus:border-leaf-500 focus:ring-0 px-4 py-3 transition-colors rounded-t-lg" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-xs font-bold uppercase tracking-widest text-leaf-600">Company</label>
                                    <input type="text" className="w-full bg-mint-50/50 border-0 border-b-2 border-gray-200 focus:border-leaf-500 focus:ring-0 px-4 py-3 transition-colors rounded-t-lg" placeholder="Organization Ltd." />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-xs font-bold uppercase tracking-widest text-leaf-600">Email</label>
                                <input type="email" className="w-full bg-mint-50/50 border-0 border-b-2 border-gray-200 focus:border-leaf-500 focus:ring-0 px-4 py-3 transition-colors rounded-t-lg" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="block text-xs font-bold uppercase tracking-widest text-leaf-600">Query Type</label>
                                <select className="w-full bg-mint-50/50 border-0 border-b-2 border-gray-200 focus:border-leaf-500 focus:ring-0 px-4 py-3 transition-colors rounded-t-lg text-forest-900">
                                    <option>Bulk Manufacturing Inquiry</option>
                                    <option>Custom Formulation</option>
                                    <option>Request Sample</option>
                                    <option>Regulatory Compliance</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-xs font-bold uppercase tracking-widest text-leaf-600">Message</label>
                                <textarea className="w-full bg-mint-50/50 border-0 border-b-2 border-gray-200 focus:border-leaf-500 focus:ring-0 px-4 py-3 transition-colors h-40 resize-none rounded-t-lg" placeholder="Tell us about your requirements..."></textarea>
                            </div>

                            <button className="px-10 py-4 bg-forest-900 text-white font-bold uppercase tracking-widest hover:bg-leaf-600 transition-colors rounded-full w-full md:w-auto">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactUs
