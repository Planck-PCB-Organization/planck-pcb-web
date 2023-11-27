import React from 'react';

interface ButtonProps {
    backgroundImage: string;
    text: string;
}

const Button: React.FC<ButtonProps> = ({ backgroundImage, text }) => {
    const buttonStyle: React.CSSProperties = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    return (
        <button style={buttonStyle}>
            {text}
        </button>
    );
};

export default Button;