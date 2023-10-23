import { useState } from 'react'
import { useCallback } from "react";
import './App.css'
import Navbar from "./components/Navbar/Navbar"
import illustration from "./assets/images/illustration3.svg"

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <div className='content'>
          <section id="home">
            <div className='main-container'>
              <div className='main-text-container' style={{ marginTop: "4rem" }}>
                <h1 className='big-size text-black-alpha-80'>Olá! Sou <span className='text-primary underfont'>Michel&nbsp;</span><span className='text-primary underfont'>Freitas</span>,</h1> um desenvolvedor full stack iniciante apaixonado pela criação de aplicativos e serviços web. Tenho experiência com JavaScript, React.js, Node.js e, é claro, Express.js, além de outras bibliotecas e frameworks.
              </div>
              <div className='main-image-container'>
                <img src={illustration} alt="Illustration" />
              </div>
            </div>
          </section>

          <section id="about">
            <div className="about-box">
              <div className='header-section'>
                <div className="header-line"></div>
                <h1 className="section-title big-size">
                  <span className="text-primary font-extrabold">#</span> <span className="underfont">Sobre Mim</span>
                </h1>
              </div>
              <div className="about-content">
                <div className="about-texts">
                  <p className="about-text">
                    Olá! Me chamo Michel, sou um estudante e desenvolvedor apaixonado por programação desde os 12 anos. Atualmente tenho 16 anos e moro em Pirituba - São Paulo. Estou cursando Desenvolvimento de Sistemas na Etec Jaraguá e também faço estágio como Desenvolvedor Web na Focus Têxtil (a maior importadora e exportadora de tecidos do Brasil). Atuo no front-end e no back-end, utilizando as principais tecnologias do Node.js (como React e Express). Por enquanto ando estudando um pouco de C# (ou CSharp para os mais íntimos) e MySQL.
                  </p>

                  <p className="about-text">
                    <br />
                    Saindo um pouco dessa rotina de trabalho e estudos, costumo jogar videogame e vôlei, ouvir música e assistir filmes e séries (quem não gosta de um cineminha, não é mesmo? rsrs). Além disso gosto de viajar, desenvolver alguns projetos, e passear pela cidade. Estou empolgado em continuar explorando o mundo da tecnologia e ansioso para colaborar em projetos inovadores. Vamos construir algo incrível juntos!
                  </p>
                </div>
                <div className="about-skills">
                  <h2 className="skills-title">Minhas Habilidades</h2>
                  <span className="skill">JavaScript</span>
                  <span className="skill">TypeScript</span>
                  <span className="skill">Node.js</span>
                  <span className="skill">React</span>
                  <span className="skill">Express</span>
                  <span className="skill">MongoDB</span>
                  <span className="skill">HTML</span>
                  <span className="skill">CSS</span>
                  <span className="skill">Git</span>
                  <span className="skill">Github</span>
                  <span className="skill">Bitbucket</span>
                  <span className="skill">Vercel</span>
                </div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
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

        Minha paixão pela criação de soluções tecnologicas só cresceu com o tempo. Adoro transformar desafios em código funcional e acredito que a programação é uma forma de arte que combina lógica e criatividade.

        Quando não estou codificando, gosto de jogar, ouvir música e viajar. Estou empolgado em continuar explorando o mundo da tecnologia e ansioso para colaborar em projetos inovadores. Vamos construir algo incrível juntos!

        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      </div>
    </>
  );
}

export default App;
