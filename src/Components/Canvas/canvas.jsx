
import  {Suspense, useEffect, useState} from 'react';
import { Model } from "../../Assets/Textures/Scene";
import { Canvas} from "@react-three/fiber";





const Vision = () => {
  const [screenWidth, setScreenWidth] = useState(0);

 

 
  useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.addEventListener('resize', () => {
      setScreenWidth(window.innerWidth);
    })
    

    return () => {
      window.removeEventListener('resize', () => {
        setScreenWidth(window.innerWidth);
      })
    }
      }, []);

      
  return (
    <div className='canvas'>
  <Canvas camera={{fov: screenWidth > 1050 ? 25 : screenWidth <= 500 ? 65 : screenWidth <= 350 ? 75 : 50, position: screenWidth > 1050 ? [0, 25, 25] : [0, 15, 15]}}>

  <Suspense fallback={null}>
    <ambientLight/>
      <pointLight position={[10, 20, 10]}intensity={3}/>
      <Model scale={[0.5, 0.5, 0.5]}/>
      </Suspense>
    </Canvas>
    </div>
  )
}

export default Vision;