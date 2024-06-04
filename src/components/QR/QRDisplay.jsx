import PropTypes from 'prop-types';
import QRCode from 'qrcode.react';

const QRDisplay = ({ qrData }) => {
    return (
        <div className="mt-2">
            {qrData && <QRCode value={qrData} size={250} />}
        </div>
    );
};

QRDisplay.propTypes = {
    qrData: PropTypes.string.isRequired,
};

export default QRDisplay;
