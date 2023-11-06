// Navbar.tsx
import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#social-media">Social Media</a>
                </li>
            </ul>
            <div className="social-icons">
                <a href="https://www.instagram.com/yourusername">
                    <FaInstagram />
                </a>
                <a href="https://www.github.com/yourusername">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/yourusername">
                    <FaLinkedin />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;