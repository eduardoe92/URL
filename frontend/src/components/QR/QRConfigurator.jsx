import React, { useState, useEffect, useCallback } from 'react';
import { SketchPicker } from 'react-color';
import PropTypes from 'prop-types';

const MemoizedSketchPicker = React.memo(SketchPicker);

const QRConfigurator = ({ onConfigChange }) => {
    const [size, setSize] = useState(300);
    const [color, setColor] = useState('#000000');
    const [showColorPicker, setShowColorPicker] = useState(false);

    const handleSizeChange = (e) => {
        const newSize = parseInt(e.target.value, 10);
        setSize(newSize);
        onConfigChange({ size: newSize, color });
    };

    const handleManualSizeChange = (e) => {
        const newSize = parseInt(e.target.value, 10);
        setSize(newSize);
        onConfigChange({ size: newSize, color });
    };

    const handleColorChange = (color) => {
        setColor(color.hex);
        onConfigChange({ size, color: color.hex });
    };

    const toggleColorPicker = () => setShowColorPicker(!showColorPicker);

    const handleClose = useCallback(() => {
        setShowColorPicker(false);
    }, []);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                showColorPicker &&
                !document.querySelector(".color-picker-modal").contains(event.target)
            ) {
                handleClose();
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [showColorPicker, handleClose]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape" && showColorPicker) {
                handleClose();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [showColorPicker, handleClose]);

    return (
        <div className="relative p-4 rounded-lg shadow-lg bg-tertiary">
            <div className="mb-4">
                <div className="flex items-center justify-between">
                    <label className="font-bold text-secondary">Tamaño del QR:</label>
                    <input
                        type="number"
                        min="100"
                        max="600"
                        value={size}
                        onChange={handleManualSizeChange}
                        className="w-20 h-8 px-2 ml-4 border-2 rounded-lg text-primary border-border"
                    />
                </div>
                <div className="flex items-center mt-4">
                    <input
                        type="range"
                        min="100"
                        max="600"
                        value={size}
                        onChange={handleSizeChange}
                        className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-background"
                    />
                </div>
            </div>
            <div className="flex items-center justify-between">
                <label className="font-bold text-secondary">Color del QR:</label>
                <div
                    className="w-10 h-10 rounded-full cursor-pointer"
                    style={{ backgroundColor: color, border: "2px solid white" }}
                    onClick={toggleColorPicker}
                ></div>
            </div>
            {showColorPicker && (
                <div className="absolute top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-opacity-50 bg-border">
                    <div
                        className="relative p-5 rounded-lg bg-border color-picker-modal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <MemoizedSketchPicker
                            color={color}
                            onChange={handleColorChange}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

QRConfigurator.propTypes = {
    onConfigChange: PropTypes.func.isRequired,
};

export default QRConfigurator;
