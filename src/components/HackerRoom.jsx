
import { useGLTF, useTexture } from '@react-three/drei';

export function HackerRoom(props) {
  const gltf = useGLTF('/models/hacker-room-draco.glb');
  const nodes = gltf?.nodes ?? {};
  const materials = gltf?.materials ?? {};

  const monitortxt = useTexture('textures/desk/monitor.png');
  const screenTxt = useTexture('textures/desk/screen.png');

  return (
    <group {...props} dispose={null}>
      {nodes.screen_screens_0 && (
        <mesh geometry={nodes.screen_screens_0.geometry} material={materials.screens}>
          <meshMatcapMaterial map={screenTxt} />
        </mesh>
      )}
      {nodes.screen_glass_glass_0 && <mesh geometry={nodes.screen_glass_glass_0.geometry} material={materials.glass} />}
      {nodes.table_table_mat_0_1 && <mesh geometry={nodes.table_table_mat_0_1.geometry} material={materials.table_mat} />}
      {nodes.table_table_mat_0_2 && (
        <mesh geometry={nodes.table_table_mat_0_2.geometry} material={materials.computer_mat}>
          <meshMatcapMaterial map={monitortxt} />
        </mesh>
      )}
      {nodes.table_table_mat_0_3 && <mesh geometry={nodes.table_table_mat_0_3.geometry} material={materials.server_mat} />}
      {nodes.table_table_mat_0_4 && <mesh geometry={nodes.table_table_mat_0_4.geometry} material={materials.vhsPlayer_mat} />}
      {nodes.table_table_mat_0_5 && <mesh geometry={nodes.table_table_mat_0_5.geometry} material={materials.stand_mat} />}
      {nodes.table_table_mat_0_6 && <mesh geometry={nodes.table_table_mat_0_6.geometry} material={materials.mat_mat} />}
      {nodes.table_table_mat_0_7 && <mesh geometry={nodes.table_table_mat_0_7.geometry} material={materials.arm_mat} />}
      {nodes.table_table_mat_0_8 && (
        <mesh geometry={nodes.table_table_mat_0_8.geometry} material={materials.tv_mat}>
          <meshMatcapMaterial map={monitortxt} />
        </mesh>
      )}
      {nodes.table_table_mat_0_9 && <mesh geometry={nodes.table_table_mat_0_9.geometry} material={materials.cables_mat} />}
      {nodes.table_table_mat_0_10 && <mesh geometry={nodes.table_table_mat_0_10.geometry} material={materials.props_mat} />}
      {nodes.table_table_mat_0_11 && <mesh geometry={nodes.table_table_mat_0_11.geometry} material={materials.ground_mat} />}
      {nodes.table_table_mat_0_12 && <mesh geometry={nodes.table_table_mat_0_12.geometry} material={materials.key_mat} />}
    </group>
  );
}

useGLTF.preload('/models/hacker-room-draco.glb');