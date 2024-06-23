import PropTypes from 'prop-types';
import QRCode from 'qrcode.react';
import { useEffect, useState } from 'react';

const QRDisplay = ({ data, config }) => {
    const [qrData, setQrData] = useState(data);

    useEffect(() => {
        setQrData(data);
    }, [data]);

    return (
        <div className="mt-2 flex justify-center items-center bg-white p-3 qr-code-wrapper rounded-lg" id="qr-code">
            {qrData && <QRCode value={qrData} size={config.size} fgColor={config.color} />}
        </div>
    );
};

QRDisplay.propTypes = {
    data: PropTypes.string.isRequired,
    config: PropTypes.shape({
        size: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired,
    }).isRequired,
};

export default QRDisplay;
