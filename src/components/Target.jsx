import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Target = (props) => {
  const targetRef = useRef();
  let scene = null;
  let error = null;
  try {
    ({ scene } = useGLTF('/models/target-stand/model.glb'));
  } catch (e) {
    error = e;
    console.error('Failed to load model.glb:', e);
  }

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  if (error || !scene) {
    return (
      <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="red" />
        {/* Fallback: Model failed to load */}
      </mesh>
    );
  }
  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;
