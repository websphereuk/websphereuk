import React, { ComponentProps } from 'react';
import styles from './TextArea.module.css';


interface TextAreaProps extends Omit<ComponentProps<'textarea'>, 'onChange'> {
    labelText?: string;
    className?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    readOnly?: boolean;
    id?:string
}

const TextArea: React.FC<TextAreaProps> = ({
    labelText,
    name,
    className,
    value,
    onChange,
    readOnly,
    placeholder,
    onBlur,
    onFocus,
    rows,
    id
}) => {
    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (onChange) {
            onChange(e);
        }
    };
    return (
        <div className={styles.textAreWrapper}>
            <textarea id={id} name={name} rows={3}  onChange={handleTextAreaChange}  className={className} value={value}  placeholder={placeholder}>
             
            </textarea>
        </div>
    )
}
export default TextArea
