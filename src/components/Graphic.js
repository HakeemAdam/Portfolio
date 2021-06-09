import React, { useState, useRef } from 'react'
import { Container } from './Styled'
import { Canvas, useFrame } from '@react-three/fiber'
import { useSpring, animated, config } from "@react-spring/three";

const Boxes = () => {

    const boxMesh = useRef()
    const [active, setActive] = useState(false);

    const { scale } = useSpring({
        scale: active ? 1.5 : 1,
        config: config.wobbly
    });


    useFrame(({ clock }) => {
        const a = clock.getElapsedTime()
        boxMesh.current.rotation.x = a
    })



    return (<animated.mesh ref={boxMesh} scale={scale} >
        <mesh scale={1} position={[1.2, 0, 0]}>
            <icosahedronGeometry />
            <meshPhongMaterial color="#FFB000" />
        </mesh>
        <mesh scale={1} position={[-1.2, 0, 0]}>
            <icosahedronGeometry />
            <meshPhongMaterial color="#FFB000" />
        </mesh>
    </animated.mesh>
    )
}

export const Graphic = () => {
    return (
        <Container>
            <Canvas>
                <Boxes />
                <ambientLight args={[0xff0000]} intensity={0.1} />
                <directionalLight position={[0, 0, 5]} intensity={0.5} />
            </Canvas>
        </Container>
    )
}
