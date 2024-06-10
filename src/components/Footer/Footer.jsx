import { useEffect, useState } from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import LogoIcon from '../Logo/LogoIcon';
import { BiLink } from 'react-icons/bi';

const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentYear(new Date().getFullYear());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <footer className="bg-black py-4">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-gray-300">
                <div className="flex items-center">
                    <LogoIcon/>
                </div>
                <div className="text-center my-2 md:my-0">
                    <strong>&copy; {currentYear}</strong>
                    <p>Diseñado por Eduardo Chacon</p>
                </div>
                <div className="flex space-x-4">
                    <a href="https://eduardoeliaschacon-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                        <BiLink size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/eduardoe92/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="https://github.com/eduardoe92" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://www.instagram.com/eduardo.e" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                        <FaInstagram size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
