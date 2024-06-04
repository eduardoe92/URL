import { FaDownload, FaShare } from 'react-icons/fa';

const ActionButtons = () => {
    return (
        <div className="flex mt-4">
            <a
                href="#"
                className="btn flex-1 flex items-center justify-center mr-4 bg-gray-700 rounded-md text-white"
            >
                <span>Descargar</span>
                <FaDownload className="ml-1" />
            </a>
            <button
                className="btn flex-1 flex items-center justify-center  bg-gray-700 rounded-md text-white"
            >
                <span>Compartir</span>
                <FaShare className="ml-1" />
            </button>
        </div>
    );
};

export default ActionButtons;
