import { useState, useEffect } from 'react'
import './Navbar.css'
import { HiBars3BottomRight } from 'react-icons/hi2';
import { IconContext } from 'react-icons';
import Scrollspy from 'react-scrollspy';
import { Link } from 'react-scroll';
import SwitchTheme from '../SwitchTheme/SwitchTheme';
function Navbar() {
    const [mobile, setMobile] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const handleResize = () => {
        if (window.innerWidth <= 1150) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };
    useEffect(() => {
        handleResize();
    }, []);
    useEffect(() => {
        window.removeEventListener('resize', handleResize);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav>
            <div className={mobile && isMobile ? 'navbar border-bottom' : 'navbar'}>
                <div className="navbar-logo">
                    <h1 className='text-primary'>&lt;/<span className='text-secondary'>Michel Freitas</span>&gt;</h1>
                </div>

                <div className={mobile && isMobile ? 'navbar-mobile-items border-bottom' : ''} style={{ transitionDuration: "0.2s", transitionTimingFunction: "ease-in-out" }}>
                    <ul className={mobile && isMobile ? 'navbar-items-mobile' : 'navbar-items-list'}>
                        <Scrollspy items={['home', 'about', 'projects', 'formation', 'carrer']} currentClassName="active" className={mobile && isMobile ? 'navbar-items-mobile' : 'navbar-items-list'}>
                            <li className="nav-item">
                                <Link to="home" offset={-64} spy={true} smooth={true} duration={500}>INÍCIO</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="about" offset={-64} spy={true} smooth={true} duration={500} >SOBRE MIM</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="projects" offset={-64} spy={true} smooth={true} duration={500}>PROJETOS</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="formation" offset={-64} spy={true} smooth={true} duration={500}>FORMAÇÃO</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="carrer" offset={-64} spy={true} smooth={true} duration={500}>CARREIRA</Link>
                            </li>
                        </Scrollspy>
                        <ul className='nav-icons mobile'>
                            <li className='nav-icon'>
                                <i className="pi pi-github" style={{ fontSize: '1.5rem' }}></i>
                            </li>
                            <li className='nav-icon'>
                                <i className="pi pi-envelope" style={{ fontSize: '1.5rem' }}></i>
                            </li>
                            <li className='nav-icon'>
                                <i className="pi pi-linkedin" style={{ fontSize: '1.5rem' }}></i>
                            </li>
                            <li className='nav-icon'>
                                <i className="pi pi-twitter" style={{ fontSize: '1.5rem' }}></i>
                            </li>
                        </ul>
                    </ul>
                </div>
                <div className='nav-icons-container'>
                    <ul className='nav-icons'>
                        <li className='nav-icon'>
                            <i className="pi pi-github" style={{ fontSize: '1.5rem' }}></i>
                        </li>
                        <li className='nav-icon'>
                            <i className="pi pi-envelope" style={{ fontSize: '1.5rem' }}></i>
                        </li>
                        <li className='nav-icon'>
                            <i className="pi pi-linkedin" style={{ fontSize: '1.5rem' }}></i>
                        </li>
                        <li className='nav-icon'>
                            <i className="pi pi-twitter" style={{ fontSize: '1.5rem' }}></i>
                        </li>
                        <li className='nav-icon'>
                            <SwitchTheme></SwitchTheme>
                        </li>
                    </ul>
                    <IconContext.Provider value={{ color: "#14b8a6", size: "35px" }}>
                        <button aria-label="Toggle" className='button-toggle' onClick={() => {
                            setMobile(!mobile)
                        }}><HiBars3BottomRight /></button>
                    </IconContext.Provider>
                </div>
            </div>
        </nav >

    )
}

export default Navbar;
