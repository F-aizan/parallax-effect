import { useState } from 'react';
import './App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import moon from './moon.jpeg';
import land from './land.png';
import cat from './cat.gif';
import space from './space1.jpg';
import { useRef } from 'react';
function App() {
  const ref = useRef();
return (
  <div>
    
    <Parallax pages={4} ref={ref}>

      <ParallaxLayer 
      factor={2} 
      speed={1} 
      offset={0} 
      style={{backgroundImage:`url(${moon})`,
      backgroundSize:'cover'}}>

      </ParallaxLayer>

      <ParallaxLayer 
      speed={1} 
      offset={1} 
      factor={4} 
      style={{backgroundImage:`url(${land})`,
      backgroundSize:'cover'}}>
      </ParallaxLayer>

      <ParallaxLayer
          sticky={{ start: 1, end: 2.5 }}
          style={{ textAlign: 'center' }}>
          <img src={cat} />
      </ParallaxLayer>


        <ParallaxLayer
          offset={0.}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}>
          <h1>Hello There</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2}
          style={{
          backgroundImage:`url(${space})`,
          backgroundSize:'cover'
          }}
          onClick={() => ref.current.scrollTo(0)}>
          <h2>Welcome To The Virtual World</h2>
        </ParallaxLayer>
      

    </Parallax>

  </div>
);

}

export default App
