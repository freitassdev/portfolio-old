import { useState } from 'react'
import { useCallback } from "react";
import './App.css'
import Navbar from "./components/Navbar/Navbar"
import Navbar2 from './components/Navbar2/Navbar2';
function App() {
  return (
    <>
      <div>
        <Navbar2></Navbar2>
        <div className='content'>

          <section id="home">
            <div className='main-container'>
              <div className='main-text-container' style={{ marginTop: "4rem" }}>
                <h1 className='big-size text-black-alpha-80'>Olá! Sou <span className='text-primary underfont'>Michel Freitas</span>,</h1> um desenvolvedor full stack iniciante apaixonado pela criação de aplicativos e serviços web. Tenho experiência com JavaScript, React.js, Node.js e, é claro, Express.js, além de outras bibliotecas e frameworks.
              </div>
            </div>
          </section>

          <section id="about">
            <div className='main-container'>
              <div className='main-text-container' style={{ marginTop: "4rem" }}>
                <h1 className='big-size text-color'>Michel <span className='text-primary'>Freitas</span>,</h1> um desenvolvedor full stack iniciante apaixonado pela criação de aplicativos e serviços web. Tenho experiência com JavaScript, React.js, Node.js e, é claro, Express.js, além de outras bibliotecas e frameworks.
              </div>
            </div>
          </section>


          <section id="projects">
            <div className='main-container'>
              <div className='main-text-container' style={{ marginTop: "4rem" }}>
                <h1 className='big-size'>Michel <span className='text-primary'>Freitas</span>,</h1> um desenvolvedor full stack iniciante apaixonado pela criação de aplicativos e serviços web. Tenho experiência com JavaScript, React.js, Node.js e, é claro, Express.js, além de outras bibliotecas e frameworks.
              </div>
            </div>
          </section>

          <section id="formation">
            <div className='main-container'>
              <div className='main-text-container' style={{ marginTop: "4rem" }}>
                <h1 className='big-size'>Michel <span className='text-primary'>Freitas</span>,</h1> um desenvolvedor full stack iniciante apaixonado pela criação de aplicativos e serviços web. Tenho experiência com JavaScript, React.js, Node.js e, é claro, Express.js, além de outras bibliotecas e frameworks.
              </div>
            </div>
          </section>

          <section id="carrer">
            <div className='main-container'>
              <div className='main-text-container' style={{ marginTop: "4rem" }}>
                <h1 className='big-size'>Michel <span className='text-primary'>Freitas</span>,</h1> um desenvolvedor full stack iniciante apaixonado pela criação de aplicativos e serviços web. Tenho experiência com JavaScript, React.js, Node.js e, é claro, Express.js, além de outras bibliotecas e frameworks.
              </div>
            </div>
          </section>
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
