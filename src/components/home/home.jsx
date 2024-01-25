import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei';
import Model from './Models'
import './home.css'

export default function home() {
    return (
        <div className='cam'> 
            <Link>
                <Canvas camera={{ position: [-3.5, 1, -2]}}>
                    <Suspense fallback={null}>
                        <Environment files="assets/anime_art_style_minecraft_style_daylight_standing_-min-min.hdr" background />
                        <Model rotation={[0,1/50,0]}/>
                    </Suspense>
                </Canvas>
            </Link>

            {/* <div className='home'>
                <div className='hometop'>
                    <h1>GameDevUtopia</h1>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h3>
                </div>
                <div className='Menuhome'>
                    <h1><Link > Games</Link></h1>
                    <h1>The Gallery</h1>
                    <h1>Our Achievements</h1>
                    <h1>The Council</h1>
                    <h1>Join The Club</h1>
                </div>


            </div> */}
        </div>
    );
}