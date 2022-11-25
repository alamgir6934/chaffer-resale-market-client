import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button
            className="btn bg-gradient-to-r from-sky-500 to-indigo-500">{children}
        </button>
    );
};

export default PrimaryButton;