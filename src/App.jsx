import { PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import './app.css'
import Slider from "./components/Slider/Slider";


function App() {
  const [instance, setInstance] = useState("instance1");
  function BlackModel(props) {
    const { scene } = useGLTF('/iphone1.glb');
    return <primitive object={scene} {...props} />;
  }
  
  function BlueModel(props) {
    const { scene } = useGLTF('/iphone.glb');
    return <primitive object={scene} {...props} />;
  }


  return (
    <>
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Canvas
        dpr={[1, 2]}
        shadows
        camera={{ fov: 45 }}
        style={{ width: "600px", height: "400px", margin: "0 auto" }}
      >
        <color attach="background" args={["#101010"]} />
        <PresentationControls
          speed={1.5}
          global
          zoom={0.5}
          polar={[-0.1, Math.PI / 4]}
        >
          <Stage environment="studio">
            {instance === "instance1" ? (
              <BlueModel scale={0.01} />
            ) : (
              <BlackModel scale={0.01} />
            )}
          </Stage>
        </PresentationControls>
      </Canvas>
      <div style={{ marginTop: "20px" }}>
        <button
          style={{ margin: "0 10px" }}
          onClick={() => setInstance("instance1")}
          >
          Instance 1
        </button>
        <button
          style={{ margin: "0 10px" }}
          onClick={() => setInstance("instance2")}
          >
          Instance 2
        </button>
      </div>
    </div>
      <Slider />
    </>
  );
}


export default App;
