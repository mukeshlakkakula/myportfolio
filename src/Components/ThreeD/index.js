// import React from "react";
// import { Canvas } from "@react-three/fiber";
// import { MeshWobbleMaterial, OrbitControls } from "@react-three/drei";
// import { MeshStandardMaterial } from "three";

// const ThreeD = () => {
//   return (
//     <Canvas
//       style={{ color: "orange", backgroundColor: "blue", height: "100vh" }}
//     >
//       <mesh>
//         <boxGeometry />
//         <MeshWobbleMaterial color="hotpink" />
//       </mesh>
//       {/* orbitalcontrols and MeshWobbleMaterial are imp */}
//       <OrbitControls />
//     </Canvas>
//   );
// };

// export default ThreeD;
// import React, { useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";

// function Box({ color }) {
//   const mesh = React.useRef();
//   useFrame(() => {
//     mesh.current.rotation.x += 0.0009;
//     mesh.current.rotation.y += 0.0009;
//   });

//   return (
//     <mesh ref={mesh} scale={[1.5, 1.5, 1.5]}>
//       {/* <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={color} /> */}
//       <sphereGeometry args={[1, 32, 32]} />

//       <meshStandardMaterial color={color} wireframe />
//       {/* orbitalcontrols and MeshWobbleMaterial are imp */}
//       <OrbitControls enableZoom={false} />
//     </mesh>
//   );
// }

// function ThreeD() {
//   const [color, setColor] = useState("#fff");

//   return (
//     <>
//       <Canvas style={{ height: "90vh" }}>
//         <ambientLight />
//         <pointLight position={[10, 10, 10]} />
//         <Box color={color} />
//       </Canvas>
//       <div>
//         <label htmlFor="colorInput">Pick Color for Sphere </label>
//         <input
//           id="colorInput"
//           type="color"
//           value={color}
//           onChange={(event) => setColor(event.target.value)}
//         />
//       </div>
//     </>
//   );
// }

// export default ThreeD;

import React, { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const RotatingSphere = ({ color, setRotationEnabled }) => {
  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.x += 0.0009;
    mesh.current.rotation.y += 0.0009;
  });
  return (
    <mesh
      ref={mesh}
      onPointerOver={() => setRotationEnabled(true)}
      onPointerOut={() => setRotationEnabled(false)}
    >
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial color={color} wireframe />
    </mesh>
  );
};

const ThreeD = () => {
  const [color, setColor] = useState("#fff");
  const [rotationEnabled, setRotationEnabled] = useState(false);

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <>
      <div
        style={{
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: "120px",
        }}
      >
        <Canvas style={{ height: "75vh" }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <RotatingSphere
            color={color}
            setRotationEnabled={setRotationEnabled}
          />
          <OrbitControls enableZoom={false} enabled={rotationEnabled} />
        </Canvas>{" "}
        <div className="d-flex gap-1 fw-bold">
          <span className="text-white ">Change the Color </span>
          <input type="color" value={color} onChange={handleColorChange} />
        </div>
      </div>
    </>
  );
};

export default ThreeD;
