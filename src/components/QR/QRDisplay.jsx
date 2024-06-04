import PropTypes from 'prop-types';
import QRCode from 'qrcode.react';
import { useEffect, useState } from 'react';

const QRDisplay = ({ initialData }) => {
    const [qrData, setQrData] = useState(initialData);

    useEffect(() => {
        setQrData(initialData);
    }, [initialData]);

    return (
        <div className="mt-2 flex justify-center items-center bg-white p-3" id="qr-code">
            {qrData && <QRCode value={qrData} size={250} />}
        </div>
    );
};

QRDisplay.propTypes = {
    initialData: PropTypes.string.isRequired,
};

export default QRDisplay;
