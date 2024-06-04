import PropTypes from 'prop-types';

const TextInput = ({ setQrData }) => {
    const handleInputChange = (event) => {
        setQrData(event.target.value);
    };

    return (
        <input
            type="text"
            className="block w-full mt-2 mb-4 p-4 bg-gray-800 border border-gray-300 rounded-md"
            placeholder="Ingresa el enlace / texto"
            onChange={handleInputChange}
        />
    );
};

TextInput.propTypes = {
    setQrData: PropTypes.func.isRequired,
};

export default TextInput;
