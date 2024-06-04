import { useEffect, useState } from 'react';

const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentYear(new Date().getFullYear());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <footer className="bg-gray-900 py-4">
            <div className="container mx-auto text-center text-gray-300">
                <p>&copy; {currentYear}</p>
            </div>
        </footer>
    );
};

export default Footer;
