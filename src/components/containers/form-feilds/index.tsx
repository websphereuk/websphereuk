import React, { ComponentProps } from 'react'
import styles from './form-fields.module.css';


interface FormFieldProps extends ComponentProps<'input'> {
    labelText?: string;
    OptionalText?: string;
    readonly?: boolean;
    className?: string;
    type: string;
    title?: string;
}
const FormFields: React.FC<FormFieldProps> = ({
    name,
    type,
    onChange,
    value,
    readonly,
    placeholder,
    title,
    onFocus,
    onBlur,
    className,
    labelText

}) => {
    return (
        <label className='w-100 text-start' htmlFor="">
            {labelText}
            <div className={styles.formFieldWrapper}>
                <input
                    name={name}
                    type={type}
                    className={`form-control ${className}`}
                    onChange={onChange}
                    value={value}
                    placeholder={placeholder}
                    readOnly={readonly}
                    title={title}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    required
                //   onInput={(e) => numbersWithRestrictedLimit && numberOnly(e)}
                //   maxLength={maxLength}
                />
            </div>
        </label>
    )
}

export default FormFields