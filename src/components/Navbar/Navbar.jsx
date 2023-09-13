import { useState } from 'react'
import './Navbar.css'
function App() {

  return (
    <nav className='nav'>
        <div className='nav-content'>
            <div className='nav-logo'>
                <h1 className='bold'>
                    <span className='text-blue'>&lt;</span> Michel
                    <span className='text-blue'> Freitas </span>
                    <span className='text-blue' style={{ fontFamily: "var(--font-family)" }}>/</span>
                    <span className='text-blue'>&gt;</span></h1>
            </div>
            <div className='nav-items-container'>
                <ul className='nav-items'>
                    <li className='nav-item active'>
                        Home
                    </li>
                    <li className='nav-item'>
                        Sobre Mim
                    </li>
                    <li className='nav-item'>
                        Projetos
                    </li>
                    <li className='nav-item'>
                        Formação Acadêmica
                    </li>
                    <li className='nav-item'>
                        Carreira
                    </li>
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
                </ul>
            </div>
        </div>
    </nav>
  );
}

export default App;
