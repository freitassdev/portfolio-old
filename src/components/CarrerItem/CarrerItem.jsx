import './CarrerItem.css';
import PropTypes from 'prop-types';

const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quaerat voluptates Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, laborum tempore mollitia pariatur cum iure delectus necessitatibus";

// eslint-disable-next-line no-unused-vars
const CarrerItem = ({ github, url, inDevelopment = false, title = "Em breve.", description = lorem, tech = "HTML - CSS - JS" }) => {
    CarrerItem.propTypes = {
        github: PropTypes.string,
        url: PropTypes.string,
        inDevelopment: PropTypes.bool,
        title: PropTypes.string,
        description: PropTypes.string,
        tech: PropTypes.string,
        imageUrl: PropTypes.string
    };

    return (
        <div className='carrer-item'>
            <div className="title-and-date">
                <h3>Focus Têxtil</h3>
                <p>2023/06 - Atualmente</p>
            </div>
            <div className="role-and-city">
                <h3>Desenvolvedor FullStack</h3>
                <p>São Paulo</p>
            </div>
            <div className="description">
                Estagiário na Focus Têxtil, onde atuo no desenvolvimento de sistemas web utilizando diversas tecnologias web, como React.js, TypeScript, e Express.js. Tenho experiência em desenvolvimento FullStack e estou sempre em busca de novos desafios e aprendizados.
            </div>
            <div className="carrer-skills">
                <div className="carrer-skill">
                    <span className="skill">React.js</span>
                </div>
                <div className="carrer-skill">
                    <span className="skill">TypeScript</span>
                </div>
                <div className="carrer-skill">
                    <span className="skill">JS Vanilla</span>
                </div>
                <div className="carrer-skill">
                    <span className="skill">JQuery</span>
                </div>
                <div className="carrer-skill">
                    <span className="skill">Angular</span>
                </div>
                <div className="carrer-skill">
                    <span className="skill">Express.js</span>
                </div>
                <div className="carrer-skill">
                    <span className="skill">Nest.js</span>
                </div>
                <div className="carrer-skill">
                    <span className="skill">MongoDB</span>
                </div>
            </div>
        </div>
    );
};

export default CarrerItem;