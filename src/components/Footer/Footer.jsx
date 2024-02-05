// import React, { useState, useEffect } from "react";
import './Footer.css';
import { FaRegCopyright } from "react-icons/fa6";
const Footer = () => {
    let linksColumn = [
        {
            title: "Links Importantes",
            links: [
                {
                    name: "Início",
                    link: "#home"
                },
                {
                    name: "Sobre Mim",
                    link: "#about"
                },
                {
                    name: "Projetos",
                    link: "#projects"
                },
                {
                    name: "Formação",
                    link: "#formation"
                },
                {
                    name: "Carreira",
                    link: "#carrer"
                },
                {
                    name: "Contato",
                    link: "#contact"
                }
            ]
        },
        {
            title: "Info. de Contato",
            links: [
                {
                    name: "+55 (11) 99999-9999",
                    link: "#home"
                },
                {
                    name: "dev.michelfreitas@gmail.com",
                    link: "#"
                },
                {
                    name: "Pirituba - São Paulo, SP",
                    link: "#"
                }
            ]
        },
        {
            title: "Redes Sociais",
            links: [
                {
                    name: "+55 (11) 99999-9999",
                    link: "#home"
                },
                {
                    name: "dev.michelfreitas@gmail.com",
                    link: "#"
                },
                {
                    name: "Pirituba - São Paulo, SP",
                    link: "#"
                }
            ]
        }
    ];
    return (
        <div>
            <div className='footer'>
                <div className="footer-content">
                    <div className="footer-name">
                        <h1>Michel de Freitas</h1>
                        <p>Apresentando meu próprio portfólio como um reflexo da minha paixão por esta área. Um desenvolvedor comprometido com a arte de criar experiências únicas, tanto no Front-End quanto no Back-End. Seja bem-vindo!</p>
                    </div>
                    <div className="footer-links">
                        {
                            linksColumn.map((column) => {
                                return (
                                    <ul className='link-column' key={column.title}>
                                        <li className='link-title font-sans'>
                                            <h2> 
                                                {column.title}
                                            </h2>
                                        </li>
                                        {
                                            column.links.map((link) => {
                                                return (
                                                    <li className='footer-link' key={link.name}>
                                                        <a href={link.link}>{link.name}</a>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <i><FaRegCopyright style={{ fontSize: "13px" }}/></i>
                <p> 2024 - Michel Freitas | All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;