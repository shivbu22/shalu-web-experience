import React from 'react'
import { Routes, Route } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'

// About
import OurStory from './pages/about/OurStory'
import Leadership from './pages/about/Leadership'

import Sustainability from './pages/about/Sustainability'

// Products
import ProductOverview from './pages/products/ProductOverview'
import CategoryPage from './pages/products/CategoryPage'

// Lab
import RnD from './pages/lab/RnD'
import QualityAssurance from './pages/lab/QualityAssurance'
import Certifications from './pages/lab/Certifications'
import Regulatory from './pages/lab/Regulatory'

// Media
import Blog from './pages/media/Blog'
import News from './pages/media/News'
import Gallery from './pages/media/Gallery'
import IdenticalFragrances from './pages/media/IdenticalFragrances'

// Contact
import ContactUs from './pages/contact/ContactUs'
import RequestSample from './pages/contact/RequestSample'
import Careers from './pages/contact/Careers'
import DistributorPortal from './pages/contact/DistributorPortal'

function App() {
    return (
        <Routes>
            <Route path="/" element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path="search" element={<SearchResults />} />

                <Route path="about">
                    <Route path="our-story" element={<OurStory />} />
                    <Route path="leadership" element={<Leadership />} />

                    <Route path="sustainability" element={<Sustainability />} />
                </Route>

                <Route path="products">
                    <Route index element={<ProductOverview />} />
                    <Route path="category/:categoryId" element={<CategoryPage />} />
                </Route>

                <Route path="lab">
                    <Route path="rnd" element={<RnD />} />
                    <Route path="quality" element={<QualityAssurance />} />
                    <Route path="certifications" element={<Certifications />} />
                    <Route path="regulatory" element={<Regulatory />} />
                </Route>

                <Route path="media">
                    <Route path="blog" element={<Blog />} />
                    <Route path="news" element={<News />} />
                    <Route path="gallery" element={<Gallery />} />
                    <Route path="identical-fragrances" element={<IdenticalFragrances />} />
                </Route>

                <Route path="contact">
                    <Route index element={<ContactUs />} />
                    <Route path="request-sample" element={<RequestSample />} />
                    <Route path="careers" element={<Careers />} />
                    <Route path="distributor" element={<DistributorPortal />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default App
