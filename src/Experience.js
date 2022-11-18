import { Environment, ContactShadows, Float, useGLTF, OrbitControls, PresentationControls, Html, Text } from '@react-three/drei'

export default function Experience() {
	const computer = useGLTF('/model.gltf')
	const headset = useGLTF('/headset.gltf')

	return <>
		<Environment preset="city" />
		<color args={['#695b5b']} attach="background" />

		<PresentationControls
			global
			rotation={[0.13, -0.2, 0]}
			polar={[-0.4, 0.4]}
			azimuth={[-1, 0.75]}
			config={{ mass: 2, tension: 400 }}
			snap={{ mass: 4, tension: 400 }}
		>
			<Float rotationIntensity={0.4}>
				<rectAreaLight
				  width={2.5}
				  height={1.65}
				  intensity={65}
				  color={'hsl(327, 81%, 40%)'}
				  rotation={[0.1, Math.PI, 0]}
				  position={[ 0, 0.55, -1.15]}
		  />
				<primitive position-y={-1.2} object={computer.scene} >
					<Html 
					  transform
					  rotation-x={-0.256} 
					  position={[0, 1.56, -1.4]}
					  distanceFactor={0.98} 
					  wrapperClass="htmlScreen">
					  <iframe src="https://kode24.no"></iframe>
					</Html>
				</primitive>
				<primitive  position-x={1.5} rotation-y={1.4} scale={0.65} position-y={-0.2} object={headset.scene} />
				{/* <Text fontSize={1} position={[2, 0.75, 0.75]}rotation-y={ -1.25} font="/bangers-v20-latin-regular.woff">Kode 24</Text> */}
			</Float>
		</PresentationControls>
		<ContactShadows position-y={-1.4} />
	</>
}
