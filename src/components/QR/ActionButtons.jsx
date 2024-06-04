import PropTypes from 'prop-types';
import { FaDownload, FaShare } from 'react-icons/fa';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

const ActionButtons = ({ qrData }) => {
    const handleDownload = () => {
        const qrElement = document.getElementById('qr-code');
        html2canvas(qrElement).then(canvas => {
            canvas.toBlob(blob => {
                saveAs(blob, 'QRCode.png');
            });
        }).catch(error => {
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
                className="btn flex-1 flex items-center justify-center mr-4 bg-gray-700 rounded-md text-white"
                onClick={handleDownload}
            >
                <span>Descargar</span>
                <FaDownload className="ml-1" />
            </button>
            <button
                className="btn flex-1 flex items-center justify-center bg-gray-700 rounded-md text-white"
                onClick={handleShare}
            >
                <span>Compartir</span>
                <FaShare className="ml-1" />
            </button>
        </div>
    );
};

ActionButtons.propTypes = {
    qrData: PropTypes.string.isRequired,
};

export default ActionButtons;
