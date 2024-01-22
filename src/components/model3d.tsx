import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Euler } from "three";

function Model(props: any) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef<any>();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (meshRef.current.rotation.x += delta));

  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh ref={meshRef}>
      <boxGeometry />
      <meshBasicMaterial color="royalblue" />
    </mesh>
  );
}

export default function Model3D() {
  const gltf = useLoader(GLTFLoader, "/models/NE555.glb");
  return (
    <div className="hidden lg:block lg:h-full lg:w-1/2">
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
        />
        <primitive object={gltf.scene} scale={0.5} />
      </Canvas>
    </div>
  );
}
