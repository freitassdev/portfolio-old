import { useState } from 'react'
import { useCallback } from "react";
import Particles from "react-particles";
import AnimatedCursor from "react-animated-cursor"
import { loadSlim } from "tsparticles-slim";
import particlesOptions from "./assets/misc/particles.json"
import './App.css'
import Navbar from "./components/Navbar/Navbar"
function App() {
  const particlesInit = useCallback(async engine => {
    console.log("Carregando particulas....")
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log("Particulas carregadas!");
  }, []);
  return (
    <>
      <div>
        <Navbar></Navbar>
        <AnimatedCursor
          color='141, 208, 255'
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={1.7} />
        <div className='particles-container'>
          <Particles id="tsparticles" options={particlesOptions} init={particlesInit} loaded={particlesLoaded} />
        </div>
        <div className='main-container'>
          <div className='main-text-container'>
            <h1>Olá! Me chamo <span className='text-blue'>Michel</span>,</h1> um desenvolvedor full stack iniciante apaixonado pela criação de aplicativos e serviços web. Tenho experiência com JavaScript, React.js, Node.js e, é claro, Express.js, além de outras bibliotecas e frameworks.
          </div>
        </div>




        <hr style={{ padding: "0", margin: "0", backgroundColor: "var(--primary-color)", border: "none", height: "2px" }} />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />Olá, sou [Seu Nome], um desenvolvedor full stack apaixonado. Comecei a explorar a programação aos 12 anos e desde então estou mergulhado nesse universo fascinante.

        Minha paixão pela criação de soluções tecnológicas só cresceu com o tempo. Adoro transformar desafios em código funcional e acredito que a programação é uma forma de arte que combina lógica e criatividade.

        Quando não estou codificando, gosto de jogar, ouvir música e viajar. Estou empolgado em continuar explorando o mundo da tecnologia e ansioso para colaborar em projetos inovadores. Vamos construir algo incrível juntos!

        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      </div>
    </>
  );
}

export default App;
