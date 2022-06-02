import React from 'react';

const Box = ({ value, onClick, disabled}) => {
    return (
        <div className="box-item">
            <button value={value} onClick={onClick} className="button" disabled={disabled}>
            </button>
        </div>
    );
};

export default Box;