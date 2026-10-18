import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float, MeshTransmissionMaterial } from '@react-three/drei'
import * as THREE from 'three'

const Droplet = () => {
    const mesh = useRef()

    useFrame((state) => {
        const time = state.clock.getElapsedTime()
        // Subtle wobble animation
        mesh.current.position.y = Math.sin(time / 2) * 0.2
        mesh.current.rotation.x = Math.sin(time / 2) * 0.1
        mesh.current.rotation.z = Math.sin(time / 3) * 0.05

        // Distortion effect on mouse move could be added here with interactions
    })

    return (
        <group>
            {/* Main Droplet */}
            <mesh ref={mesh} scale={1.8}>
                <sphereGeometry args={[1, 64, 64]} />
                {/* Viscous Glassy Green Material */}
                <MeshTransmissionMaterial
                    backside
                    backsideThickness={5}
                    thickness={2}
                    roughness={0}
                    transmission={1}
                    ior={1.5}
                    chromaticAberration={0.2}
                    anisotropy={1}
                    color="#86EFAC" // Light Green Tint
                    distortion={0.5}
                    distortionScale={0.5}
                    temporalDistortion={0.1}
                />
            </mesh>

            {/* Inner "Essence" Core */}
            <mesh scale={0.8} position={[0, 0, 0]}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial
                    color="#22C55E"
                    emissive="#16A34A"
                    emissiveIntensity={0.5}
                    roughness={0.2}
                    transparent
                    opacity={0.8}
                />
            </mesh>
        </group>
    )
}

const HeroCanvas = () => {
    const [isMobile, setIsMobile] = React.useState(false)

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    if (isMobile) {
        return (
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-mint-50 to-white flex items-center justify-center overflow-hidden">
                <div className="w-[150vw] h-[150vw] bg-gradient-to-br from-leaf-200/20 to-mint-200/20 rounded-full blur-3xl absolute -top-1/4 -right-1/4 animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="w-[150vw] h-[150vw] bg-gradient-to-tl from-leaf-200/20 to-mint-200/20 rounded-full blur-3xl absolute -bottom-1/4 -left-1/4 animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />

                {/* Static Fallback for Droplet */}
                <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-leaf-300 to-leaf-500 opacity-20 blur-2xl" />
            </div>
        )
    }

    return (
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-mint-50 to-white">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 1.5]}>
                <ambientLight intensity={1} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#ffffff" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#22C55E" />

                <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5} floatingRange={[-0.2, 0.2]}>
                    <Droplet />
                </Float>

                <Environment preset="studio" />
            </Canvas>
        </div>
    )
}

export default HeroCanvas
