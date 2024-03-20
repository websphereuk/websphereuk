import React from 'react';
import styles from './button.module.css';

interface ButtonProps {
    children: React.ReactNode;
    className: string;
    disabled?: boolean;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ({ children, className, disabled, type, onClick }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${className} ${styles.customBtn} ${disabled ? 'opacity-50' : ''} cursor-pointer`}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
