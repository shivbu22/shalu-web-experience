import React from 'react'
import PageHeader from '../../components/PageHeader'
import SEO from '../../components/SEO'

const OurStory = () => {
    return (
        <div className="min-h-screen bg-white">
            <SEO 
                title="About Shalu Enterprises | Fragrance & Essential Oil Manufacturers"
                description="Learn about the heritage and innovation behind Shalu Enterprises, leading wholesale manufacturers of industrial fragrances and pure essential oils in India."
                keywords="about Shalu Enterprises, industrial fragrance company, b2b essential oil suppliers India, wholesale perfume manufacturer"
                url="/about/our-story"
            />
            <PageHeader
                title="Our Story"
                subtitle="From the floral heartlands of Kannauj to the global stage of molecular perfumery."
                badge="Heritage"
            />

            <div className="max-w-4xl mx-auto px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-leaf-600">Ceaseless Innovation</h2>
                        <p className="text-gray-500 leading-relaxed">
                            We cater to all types of product customisations and also assist our customers with any technical queries or issues as required. Our commitment to innovation drives us to explore new olfactory territories constantly.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-leaf-600">Economic Solutions</h2>
                        <p className="text-gray-500 leading-relaxed">
                            We provide our customers with cost-effective solutions to meet their product needs without compromising on the quality of the products. Excellence need not always come at a premium price.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-leaf-600">Experienced Professionals</h2>
                        <p className="text-gray-500 leading-relaxed">
                            Our highly experienced Marketing team and channel partners conduct in-depth market research to identify and analyse current global trends, curating region-specific solutions that resonate with local preferences.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-leaf-600">Deliverables</h2>
                        <p className="text-gray-500 leading-relaxed">
                            We are cognizant of the competitive and fast-paced nature of today's market and dedicate ourselves to deliver impressive results in a short turn-around time. Speed and quality go hand in hand at Shalu Enterprises.
                        </p>
                    </div>
                </div>

                <div className="bg-mint-50 p-12 rounded-2xl text-center border border-leaf-100">
                    <h3 className="text-sm uppercase tracking-widest text-forest-900 mb-6 font-bold">Global Headquarters</h3>
                    <p className="text-forest-800/80 mb-6 leading-relaxed">
                        Shalu Enterprises<br />
                        Shop No. 2, Ground Floor, Tirupati Enclave,<br />
                        Lal Kuan, Ghaziabad - 201009<br />
                        Uttar Pradesh, INDIA.
                    </p>
                    <a href="mailto:info@shaluenterprises.com" className="text-leaf-600 font-bold hover:text-leaf-700 transition-colors">
                        info@shaluenterprises.com
                    </a>
                </div>
            </div>
        </div>
    )
}

export default OurStory
