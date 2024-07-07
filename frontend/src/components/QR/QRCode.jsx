import { useState } from "react";
import ActionButtons from "./ActionButtons";
import QRDisplay from "./QRDisplay";
import TextInput from "./TextInput";
import PropTypes from 'prop-types';
import QRConfigurator from './QRConfigurator';

const QRCode = ({ initialData }) => {
    const [qrData, setQrData] = useState(initialData);
    const [qrConfig, setQrConfig] = useState({ size: 300, color: '#000000' });

    const handleConfigChange = (config) => {
        setQrConfig(config);
    };

    return (
        <div className="flex flex-col md:flex-row mt-16 md:mt-20">
            <section className="w-full md:w-1/2 flex flex-col items-center justify-center p-10">
                <div className="w-full max-w-xs">
                    <TextInput setQrData={setQrData} initialData={initialData} />
                    <QRConfigurator onConfigChange={handleConfigChange} />
                    <ActionButtons qrData={qrData} />
                </div>
            </section>
            <section className="w-full md:w-1/2 flex items-center justify-center pb-14 md:pb-0">
                <div className="qr-container">
                    <QRDisplay data={qrData} config={qrConfig} />
                </div>
            </section>
        </div>
    );
};

QRCode.propTypes = {
    initialData: PropTypes.string.isRequired,
};

export default QRCode;
