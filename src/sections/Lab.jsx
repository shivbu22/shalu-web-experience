import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float } from '@react-three/drei'
import { motion } from 'framer-motion'
import { Star, ShieldCheck, Microscope } from 'lucide-react'

const FloatingMolecule = ({ color = "#22C55E", position = [0, 0, 0], scale = 0.5 }) => {
    const group = useRef()
    useFrame((state) => {
        group.current.rotation.y += 0.005
        group.current.rotation.x += 0.002
    })
    return (
        <group ref={group} position={position} scale={scale}>
            <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[1, 16, 16]} />
                <meshStandardMaterial color={color} roughness={0.3} />
            </mesh>
            {[
                [1.5, 1, 0], [-1.5, -1, 0], [0, 1.5, 1], [0, -1.5, -1]
            ].map((pos, i) => (
                <group key={i}>
                    <mesh position={[pos[0] / 2, pos[1] / 2, pos[2] / 2]} lookAt={new THREE.Vector3(...pos)}>
                        <cylinderGeometry args={[0.2, 0.2, 2]} />
                        <meshStandardMaterial color="#064E3B" />
                    </mesh>
                    <mesh position={pos}>
                        <sphereGeometry args={[0.6, 16, 16]} />
                        <meshStandardMaterial color="#86EFAC" />
                    </mesh>
                </group>
            ))}
        </group>
    )
}
import * as THREE from 'three'

const Lab = () => {
    return (
        <section className="py-32 bg-mint-50/50">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-20">
                    <span className="text-leaf-600 font-bold uppercase tracking-[0.2em] text-sm bg-white px-4 py-2 rounded-full shadow-sm border border-leaf-100">The Science of Purity</span>
                    <h2 className="text-4xl md:text-5xl font-sans font-bold text-forest-900 mt-8">Engineered for Excellence</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white p-10 rounded-2xl shadow-xl shadow-leaf-100/50 border border-transparent hover:border-leaf-200 transition-all duration-300 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Microscope className="w-24 h-24 text-leaf-500" />
                        </div>
                        <div className="w-12 h-12 bg-mint-100 rounded-xl flex items-center justify-center mb-8 text-leaf-600">
                            <Microscope className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-forest-900 mb-4">GC/MS Analyzed</h3>
                        <p className="text-gray-500 leading-relaxed text-sm">
                            Every batch undergoes rigorous Gas Chromatography-Mass Spectrometry to ensure 100% identical molecular profiles.
                        </p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white p-10 rounded-2xl shadow-xl shadow-leaf-100/50 border border-transparent hover:border-leaf-200 transition-all duration-300 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <ShieldCheck className="w-24 h-24 text-leaf-500" />
                        </div>
                        <div className="w-12 h-12 bg-mint-100 rounded-xl flex items-center justify-center mb-8 text-leaf-600">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-forest-900 mb-4">ISO 9001 Certified</h3>
                        <p className="text-gray-500 leading-relaxed text-sm">
                            Manufacturing processes certified for consistent quality management and global export compliance.
                        </p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white p-10 rounded-2xl shadow-xl shadow-leaf-100/50 border border-transparent hover:border-leaf-200 transition-all duration-300 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Star className="w-24 h-24 text-leaf-500" />
                        </div>
                        <div className="w-12 h-12 bg-mint-100 rounded-xl flex items-center justify-center mb-8 text-leaf-600">
                            <Star className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-forest-900 mb-4">Traceability</h3>
                        <p className="text-gray-500 leading-relaxed text-sm">
                            Full batch-level traceability from the raw botanical source to the final shipped compound.
                        </p>
                    </motion.div>
                </div>

                {/* 3D Decor inside the grid area */}
                <div className="h-24 w-full mt-12 relative overflow-hidden rounded-2xl bg-forest-900 flex items-center justify-between px-12">
                    <div className="absolute inset-0 z-0">
                        <Canvas>
                            <ambientLight />
                            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                                <FloatingMolecule position={[5, 0, 0]} />
                                <FloatingMolecule position={[-5, 0, 0]} color="#86EFAC" />
                            </Float>
                        </Canvas>
                    </div>
                    <span className="relative z-10 text-white font-bold text-lg tracking-wide">Download our full Quality Assurance Report (2025)</span>
                    <button className="relative z-10 px-6 py-2 bg-leaf-500 text-white rounded-lg font-bold text-sm hover:bg-leaf-600 transition-colors">Download PDF</button>
                </div>
            </div>
        </section>
    )
}

export default Lab
