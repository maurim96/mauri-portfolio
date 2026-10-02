"use client";

import { Environment, Lightformer } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Group, MathUtils, Mesh } from "three";
import { SculptureFallback } from "./sculpture-fallback";

type SculptureSceneProps = {
  paused: boolean;
};

function Sculpture({ paused }: SculptureSceneProps) {
  const scale = useThree(({ viewport }) =>
    Math.min(1.02, viewport.width / 4.7),
  );
  const sculpture = useRef<Group>(null);
  const body = useRef<Mesh>(null);
  const orbit = useRef<Group>(null);
  const elapsed = useRef(0);

  useFrame(({ pointer }, frameDelta) => {
    if (paused || !sculpture.current || !body.current || !orbit.current) return;

    const delta = Math.min(frameDelta, 0.05);
    elapsed.current += delta;
    sculpture.current.rotation.x = MathUtils.damp(
      sculpture.current.rotation.x,
      -0.38 + pointer.y * 0.12,
      3,
      delta,
    );
    sculpture.current.rotation.y = MathUtils.damp(
      sculpture.current.rotation.y,
      0.58 + pointer.x * 0.2,
      3,
      delta,
    );
    sculpture.current.position.y = Math.sin(elapsed.current * 0.5) * 0.045;
    body.current.rotation.y = elapsed.current * 0.095;
    orbit.current.rotation.z = 0.22 + elapsed.current * 0.12;
  });

  return (
    <group ref={sculpture} rotation={[-0.38, 0.58, -0.18]} scale={scale}>
      <mesh ref={body}>
        <torusKnotGeometry args={[1.2, 0.355, 256, 32, 2, 3]} />
        <meshPhysicalMaterial
          color="#878b85"
          metalness={1}
          roughness={0.22}
          clearcoat={1}
          clearcoatRoughness={0.16}
          envMapIntensity={1.5}
        />
      </mesh>

      <group ref={orbit} rotation={[1.02, -0.35, 0.22]}>
        <mesh>
          <torusGeometry args={[2.05, 0.028, 12, 192]} />
          <meshStandardMaterial
            color="#ff622b"
            emissive="#ff4f1d"
            emissiveIntensity={0.42}
            metalness={0.6}
            roughness={0.24}
          />
        </mesh>
        <mesh position={[2.015, 0.377, 0]}>
          <sphereGeometry args={[0.125, 32, 24]} />
          <meshPhysicalMaterial
            color="#f0ece0"
            metalness={0.88}
            roughness={0.12}
            clearcoat={1}
          />
        </mesh>
        <mesh position={[-1.836, 0.912, 0]}>
          <sphereGeometry args={[0.082, 24, 16]} />
          <meshStandardMaterial
            color="#ff622b"
            metalness={0.75}
            roughness={0.2}
          />
        </mesh>
        <mesh position={[0.301, -2.028, 0]}>
          <sphereGeometry args={[0.062, 24, 16]} />
          <meshStandardMaterial
            color="#bfc2b8"
            metalness={1}
            roughness={0.12}
          />
        </mesh>
      </group>
    </group>
  );
}

function StudioEnvironment() {
  return (
    <Environment resolution={128} frames={1}>
      <Lightformer
        form="rect"
        color="#fff6df"
        intensity={4}
        position={[-3, 3, 3]}
        scale={[1.1, 6, 1]}
        target={[0, 0, 0]}
      />
      <Lightformer
        form="rect"
        color="#ffffff"
        intensity={3}
        position={[3.5, 1, 2]}
        scale={[0.8, 7, 1]}
        target={[0, 0, 0]}
      />
      <Lightformer
        form="rect"
        color="#faf3e4"
        intensity={2}
        position={[0, 5, -1]}
        scale={[5, 1.3, 1]}
        target={[0, 0, 0]}
      />
      <Lightformer
        form="rect"
        color="#a3aaa3"
        intensity={1.2}
        position={[-4, -1, -4]}
        scale={[3, 5, 1]}
        target={[0, 0, 0]}
      />
      <Lightformer
        form="rect"
        color="#ff622b"
        intensity={0.7}
        position={[2, -3, -3]}
        scale={[1.5, 4, 1]}
        target={[0, 0, 0]}
      />
    </Environment>
  );
}

export default function SculptureScene({ paused }: SculptureSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.5], fov: 42, near: 0.1, far: 40 }}
      dpr={[1, 1.5]}
      frameloop={paused ? "demand" : "always"}
      gl={{ alpha: true, antialias: true, powerPreference: "default" }}
      fallback={<SculptureFallback />}
    >
      <ambientLight intensity={0.2} />
      <directionalLight color="#fff1d8" position={[-3, 5, 5]} intensity={2.5} />
      <directionalLight color="#ff622b" position={[3, -2, 2]} intensity={0.5} />
      <StudioEnvironment />
      <Sculpture paused={paused} />
    </Canvas>
  );
}
