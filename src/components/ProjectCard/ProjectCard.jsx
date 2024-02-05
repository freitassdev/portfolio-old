import './ProjectCard.css';
import PropTypes from 'prop-types';

const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quaerat voluptates Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, laborum tempore mollitia pariatur cum iure delectus necessitatibus";

const ProjectCard = ({ github, url, inDevelopment = false, title = "Em breve.", description = lorem, tech = "HTML - CSS - JS" }) => {
    // Component code here

    ProjectCard.propTypes = {
        github: PropTypes.string,
        url: PropTypes.string,
        inDevelopment: PropTypes.bool,
        title: PropTypes.string,
        description: PropTypes.string,
        tech: PropTypes.string,
        imageUrl: PropTypes.string


    };

    return (
        <div>
            <div className="badges-container">
                {
                    inDevelopment ? <div className="badge">Em desenvolvimento</div> : ""
                }
            </div>
            <div className="project-card">
                <div className="project-card-image">
                    <div className="image-container">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXTb14H0pL8piAfDyR1f5Ua-m14lva9t9POQ&usqp=CAU" alt="image" />
                    </div>
                </div>
                <div className="project-card-title">
                    <h2 className="poppins font-bold">{title}</h2>
                    <div className="header-line"></div>
                    { github ? <a aria-label="Github Link" href={github} rel="noreferrer" target='_blank'><i className="pi pi-github" href={github} style={{ color: "var(--primary-color)", fontSize: '1.3rem' }}></i></a> : "" }
                    { url ? <a aria-label="Visit Link" href={url} rel="noreferrer" target='_blank'><i className="pi pi-link" href={url} style={{ color: "var(--primary-color)", fontSize: '1.3rem' }}></i></a> : "" }
                </div>
                <div className="bold project-card-tech">
                    <p>{tech}</p>
                </div>
                <div className="project-card-description">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;