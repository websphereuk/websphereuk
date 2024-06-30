import React, { ComponentProps } from 'react';
import styles from './Checkbox.module.css';

interface CheckboxProps extends ComponentProps<'input'> {
    labelText?: string;
    checked?: boolean;
    readonly?: boolean;
    name: string;
    onChange?: (e: React.ChangeEvent<any>) => void;
    errors?: any;
    touched?: any; 
    className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ className, labelText, checked, readonly, name, onChange }) => {
    return (
        <div className={`${styles.checkboxWrapper} `}>
            <input
                type="checkbox"
                id={name}
                name={name}
                checked={checked}
                onChange={onChange}
                disabled={readonly}
                data-testid={name}
                className="checkbox"
            />
            <label htmlFor={name} className={className}>
                <span className="box_wrap"></span> <span>
                    {labelText}
                </span>
            </label>
        </div>
    );
};

export default Checkbox;
