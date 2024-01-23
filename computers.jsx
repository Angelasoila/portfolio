import {usestate, useeffect, suspense} from 'react' ;
import{canvas} from '@react-three fibre';
import{orbitcontrols, preload, useGLTF} from '@react-three/drei';
import canvasloader from '/...loader';
const computers =(isMobile) =>{
    const computers =useGLTF('./desktop_pc scene.gltf')
    return(
        <mesh>
            <hemispherelight intensity={0.15} groungcolor="black"/>
            <pointlight intensity={1}/>
            <spotlight 
            position={[-20, 50, 10]}
            angle={0.12}
            penumbra={1}
            intensity={1}
            castshadow
            shadow-map-size={1024}
            />
            <primitive 
            object= {computer.scene}/>
            scale={isMobile ? 0.7:0.75}
            position={isMobile ? [0, -3, -2.2]:[0, -3.25, -1.5]}
            rotation={[-0.01, -0.2, -0.1]}
        </mesh>
    )
}
const computerscanvas =() =>{
    const [ismobile, setismobile] =usestate(false);
    useeffect(()=> {
        const mediaQuery=window.matchMedia('(maxwidth:500px)');
        setismobile(MediaQuery.matches);
        const handleMediaQuerychange =(event) =>{
            setismobile(event.matches);
        }
       mediaQuery.addeventlistener('change',handleMediaQuerychange);
    })
    return ()=>{
        MediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
};[]
return(
    <canvas
        frameloop="demand"
        shadows
        camera={{position:[20,3,5], fov:25 }}
        gl={{preserveDrawingBuffer}}
        >
            <suspense fallback={<canvasloader/>}>
            <orbitcontrols
            enablezoom={false}
            maxPolarangle={Math.PI/2}
            minPolarangle={Math.PI/2}
            />
            <computers/>
            </suspense>
            <preloadall/>
    </canvas>
)

export default computers