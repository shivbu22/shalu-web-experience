import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const TimelineItem = ({ year, title, description, align = 'left' }) => {
    return (
        <div className={`flex w-full mb-12 ${align === 'right' ? 'flex-row-reverse' : ''}`}>
            <div className="w-1/2 px-8 text-right flex flex-col items-end">
                {align === 'left' ? (
                    <>
                        <span className="text-leaf-500 font-serif text-3xl font-bold">{year}</span>
                        <h3 className="text-forest-900 font-bold uppercase tracking-widest mt-2">{title}</h3>
                        <p className="text-forest-800/70 mt-4 leading-relaxed max-w-sm">{description}</p>
                    </>
                ) : <div className="w-4 h-4 rounded-full bg-leaf-400 mt-3" />}
            </div>

            <div className="w-[1px] bg-leaf-200 relative">
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-leaf-600 shimmer-effect" />
            </div>

            <div className="w-1/2 px-8">
                {align === 'right' ? (
                    <>
                        <span className="text-leaf-500 font-serif text-3xl font-bold">{year}</span>
                        <h3 className="text-forest-900 font-bold uppercase tracking-widest mt-2">{title}</h3>
                        <p className="text-forest-800/70 mt-4 leading-relaxed max-w-sm">{description}</p>
                    </>
                ) : <div className="w-4 h-4 rounded-full bg-leaf-400 mt-3" />}
            </div>
        </div>
    )
}

const Heritage = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    // Parallax background line
    const y = useTransform(scrollYProgress, [0, 1], [0, 200])

    return (
        <section id="heritage" ref={ref} className="py-32 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <motion.div style={{ y }} className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-leaf-100 -translate-x-1/2 z-0" />

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-24">
                    <span className="text-leaf-500 uppercase tracking-[0.3em] text-sm font-bold">Our Legacy</span>
                    <h2 className="text-5xl font-serif text-forest-900 mt-4">Generations of <br /><span className="italic relative">Purity <span className="absolute -bottom-2 left-0 w-full h-1 bg-leaf-300/30"></span></span></h2>
                </div>

                <TimelineItem
                    year="1985"
                    title="The Founding"
                    description="Started in the floral heartlands of Kannauj, distilling Rose and Jasmine using traditional deg-bhapka methods."
                    align="left"
                />
                <TimelineItem
                    year="1998"
                    title="Global Expansion"
                    description="Bridging the gap between ancient Indian perfumery and modern French manufacturing standards."
                    align="right"
                />
                <TimelineItem
                    year="2012"
                    title="The Sustainability Promise"
                    description="Implementing ISO 14001 standards and partnering with 500+ local farmers for organic sourcing."
                    align="left"
                />
                <TimelineItem
                    year="2024"
                    title="The Future of Scent"
                    description="Pioneering AI-driven formulations and molecular reconstruction of endangered botanical profiles."
                    align="right"
                />
            </div>
        </section>
    )
}

export default Heritage
