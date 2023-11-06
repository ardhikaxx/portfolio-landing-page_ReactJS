import React from 'react';
import './SocialMedia.css';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialMedia: React.FC = () => {
    return (
        <section id="social-media" className="section social-media-section">
            <h2>Connect with Me</h2>
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
        </section>
    );
};

export default SocialMedia;