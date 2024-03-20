import React from 'react';
import style from "./select-fields.module.css"
interface SelectFieldsProps {
    selectValue: string;
    optionValue: any;
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    dynamicOption?: string[];
    className?: string
}

const SelectFields: React.FC<SelectFieldsProps> = ({ className, selectValue, optionValue, handleChange, dynamicOption }) => {
    return (
        <label className='w-100 text-start' htmlFor="">
            Choose your country
            <select className={`${style.select} ${className}`} value={selectValue} onChange={handleChange}>
                <option value="">{optionValue}</option>
                {
                    dynamicOption && dynamicOption.map((v, index) => {
                        return (
                            <>
                                <option key={index} value={v}>{v}</option>
                            </>
                        )
                    })
                }
            </select>
        </label>
    );
};

export default SelectFields;
