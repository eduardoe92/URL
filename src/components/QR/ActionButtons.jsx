import PropTypes from 'prop-types';
import { FaDownload, FaShare } from 'react-icons/fa';
import domtoimage from 'dom-to-image';

const ActionButtons = ({ qrData }) => {
    const handleDownload = () => {
        const qrElement = document.getElementById('qr-code');
        
        domtoimage.toPng(qrElement) 
            .then((dataUrl) => {
                var link = document.createElement('a');
                link.download = 'qr-code.png';
                link.href = dataUrl;
                link.click();
            })
            .catch((error) => {
                console.error('Error al capturar el código QR:', error);
            });
    };

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'QRCode',
                    text: 'Mira este código QR!',
                    url: qrData,
                });
            } catch (error) {
                console.error('Error al compartir:', error);
            }
        } else {
            console.log('No compatible.');
        }
    };

    return (
        <div className="flex mt-4">
            <button
                className="btn flex-1 flex items-center justify-center mr-4 bg-tertiary rounded-lg text-secondary border border-gray-600 hover:bg-gray-600"
                onClick={handleDownload}
            >
                <span>Descargar</span>
                <FaDownload className="ml-2" />
            </button>
            <button
                className="btn flex-1 flex items-center justify-center py-1 bg-tertiary rounded-lg text-secondary border border-gray-600 hover:bg-gray-600"
                onClick={handleShare}
            >
                <span>Compartir</span>
                <FaShare className="ml-2" />
            </button>
        </div>
    );
};

ActionButtons.propTypes = {
    qrData: PropTypes.string.isRequired,
};

export default ActionButtons;
