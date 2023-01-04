import {Canvas} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import {Suspense} from 'react';
import {Model} from './Scene';

function Sun()
{
    return(
        <Canvas>
            <ambientLight />
            <OrbitControls />
            <Suspense fallback={null}>
                <Model />
            </Suspense>
        </Canvas>
    )
}

export default Sun;
