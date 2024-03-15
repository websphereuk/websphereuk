import React from 'react'
import styles from './button.module.css';
interface buttonProps {
    children: any;
    className: string;
    disabled?: boolean;
}
export const Button: React.FC<buttonProps> = ({ children, className, disabled }) => {

    return (
        <button className={`${className} ${styles.customBtn} ${disabled ? 'opacity-50' : ''} cursor-pointer`} disabled={disabled} >
            {children}</button>
    )
}
