import Footer from './components/Footer/Footer';
import './App.css'
import Navbar from "./components/Navbar/Navbar"
import ProjectCard from './components/ProjectCard/ProjectCard';
import Loader from './components/Loader/Loader';
import CarrerItem from './components/CarrerItem/CarrerItem';
import Timeline from './components/Timeline/Timeline';
function App() {
  return (
    <>
      <div className='main-div'>
        <Loader></Loader>
        <Navbar></Navbar>
        <div className='content'>
          <section id="home">
            <div className='main-container'>
              <div className='main-text-container' style={{ marginTop: "4rem" }}>
                <div className="main-hello-text">
                  <h1><span className='emoji'>👋🏼 </span>Olá, me chamo <span className="text-primary fw500">Michel Freitas</span>!</h1>
                </div>
                <div className="main-principal-title">
                  <h1>Arquitetando o <span className="text-primary">Futuro</span> com <span className="text-primary">Tecnologia</span> e <span className="text-primary">Criatividade</span></h1>
                </div>
                <div className="main-subtitle">
                  <p><span className="text-primary fw500">Apresentando</span> meu próprio portfólio como um reflexo da minha <span className="text-primary fw500">paixão</span> por esta área. Um <span className="text-primary fw500">desenvolvedor</span> comprometido com a arte de criar experiências únicas, tanto no <span className="text-primary fw500">Front-End</span> quanto no <span className="text-primary fw500">Back-End</span>. Seja bem-vindo!</p>
                </div>
              </div>
            </div>
          </section>
          <section id="box">
            <div className="box">
              <div id="about">
                <div className='header-section'>
                  <div className="header-line"></div>
                  <h1 className="section-title big-size">
                    <span className="text-primary font-extrabold">#</span> <span className="underfont">Sobre Mim</span>
                  </h1>
                </div>
                <div className="about-content">
                  <div className="about-texts">
                    <p className="about-text">
                      Olá! Me chamo Michel, sou um estudante e desenvolvedor apaixonado por programação desde os 12 anos. Atualmente tenho 16 anos e moro em São Paulo. Estou cursando Desenvolvimento de Sistemas em uma Etec e também faço estágio como Desenvolvedor Web na empresa Focus Têxtil. Atuo no front-end e no back-end, utilizando as principais tecnologias do Node.js (como React, Express e um pouquinho de Angular). Por enquanto ando estudando um pouco de C# (ou CSharp para os mais íntimos) e MySQL.
                    </p>

                    <p className="about-text">
                      <br />
                      Saindo um pouco dessa rotina de estágio e estudos, costumo jogar videogame e vôlei, ouvir música e assistir filmes e séries (quem não gosta de um cineminha, não é mesmo? rsrs). Além disso gosto de viajar, desenvolver alguns projetos, e passear pela cidade. Estou empolgado em continuar explorando o mundo da tecnologia e ansioso para colaborar em projetos inovadores. Vamos construir algo incrível juntos!
                    </p>
                  </div>
                  <div className="about-skills">
                    <h2 className="skills-title" style={{ width: "100%" }}>Minhas Habilidades</h2>
                    <span className="skill">JavaScript</span>
                    <span className="skill">TypeScript</span>
                    <span className="skill">Node.js</span>
                    <span className="skill">React</span>
                    <span className="skill">Shadcn/ui</span>
                    <span className="skill">TailWind CSS</span>
                    <span className="skill">PrimeReact</span>
                    <span className="skill">Express</span>
                    <span className="skill">MongoDB</span>
                    <span className="skill">HTML</span>
                    <span className="skill">CSS</span>
                    <span className="skill">Git</span>
                    <span className="skill">Github</span>
                    <span className="skill">Bitbucket</span>
                    <span className="skill">Vercel</span>
                  </div>
                </div>
              </div>
              <div id="projects">
                <br className='select-none' />
                <br className='select-none' />
                <br className='select-none' />
                <div className='header-section' style={{ flexDirection: "row" }}>
                  <div className="header-line"></div>
                  <h1 className="section-title big-size">
                    <span className="underfont">Projetos</span><span className="text-primary font-extrabold">&nbsp;#</span>
                  </h1>
                </div>
                <div className="projects-container">
                  <ProjectCard
                    inDevelopment
                    title='Chat App'
                    tech='React - TypeScript - Express - MongoDB'
                    description='Desenvolvido como uma plataforma de comunicação instantânea, semelhante ao WhatsApp, este site possibilita a troca de mensagens em tempo real de maneira eficiente e intuitiva.'
                    github='https://github.com/freitassdev/chat-frontend'
                    url='https://chat.michelfreitas.com' />

                  <ProjectCard
                    title='Inteligência Artificial'
                    tech='Python - Coco Dataset - Yolo'
                    description='No Hackathon 2023 do Centro Paula Souza, desenvolvi uma inteligência artificial com o propósito de identificar em tempo real resíduos poluentes que foram descartados inadequadamente, como garrafas plásticas.'
                    github='https://github.com/freitassdev' />

                  <ProjectCard
                    title='DS Jaraguá'
                    tech='React - Node - PrimeReact'
                    description='Elaborado com o objetivo de promover meu curso e atrair novos alunos para minha Etec, este projeto contou com a participação de outros dois amigos. Na liderança da equipe, ministrei instruções básicas sobre React.js e node.js para eles.'
                    github='https://github.com/freitassdev/ds-etecjaragua'
                    url='https://ds-jaragua.vercel.app' />

                  <ProjectCard
                    title='GPT Free'
                    tech='React - Node - Shadcn/ui - TailWind'
                    description='Elaborado com o objetivo de promover meu curso e atrair novos alunos para minha Etec, este projeto contou com a participação de outros dois amigos. Na liderança da equipe, ministrei instruções básicas sobre React.js e node.js para eles.'
                    github='https://github.com/freitassdev/ds-etecjaragua'
                    url='https://ds-jaragua.vercel.app'
                  />
                  <ProjectCard />
                  <ProjectCard />
                </div>
              </div>
            </div>
          </section>

          <section id="formation">
            <div className="formation-container">
              <div className='header-section'>
                <div className="header-line"></div>
                <h1 className="section-title big-size">
                  <span className="text-primary font-extrabold">#</span> <span className="underfont">Formação</span>
                </h1>
              </div>
              <div className="timeline-container">
                <Timeline />
              </div>
            </div>
          </section>

          <section id="carrer">
            <div className="carrer-container">
              <div className='header-section' style={{ flexDirection: "row" }}>
                <div className="header-line"></div>
                <h1 className="section-title big-size">
                  <span className="underfont">Carreira</span><span className="text-primary font-extrabold">&nbsp;#</span>
                </h1>
              </div>
              <div className="carrer-box">
                <CarrerItem />
              </div>
            </div>
          </section>
        </div>
        <br />
        <div className="footer-container">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
