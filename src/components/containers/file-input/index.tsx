import React, { ChangeEvent, useEffect, useState } from 'react';
import style from "./file-input.module.css"
import Image from 'next/image';
import UploadIcon from "/public/images/uploadIcon.png";
import SubmitIcon from "/public/images/submit.png";
interface FileInputProps {
    onChange?: (e: any) => void,
    DataFile?: any,
    DataSetFile?: any;
}



const FileInput: React.FC<FileInputProps> = (props: FileInputProps) => {
    const [error, setError] = useState<Boolean>(false)
    const HandleInputRest = () => {
        props?.DataSetFile('')
    }
    useEffect(() => {
        if (props?.DataFile?.size > 5000000) {
            props?.DataSetFile(null);
            setError(true);
        }
        else if (props?.DataFile?.size < 5000000) {
            setError(false);
        }

    }, [props.DataFile]);
    return (
        <div className='position-relative'>


            <div className={style?.uploadBtnWapper} >
                <button type='reset' className={style?.UploaderBtn}>
                    <div>
                        {
                            !props?.DataFile ?
                                <Image width={120} src={UploadIcon} alt='' />
                                : <Image width={70} className='my-3' src={SubmitIcon} alt='' />}
                    </div>
                    {
                        !props?.DataFile ? 'Click to  upload CV or drag and drop'
                            : 'Your file has been uploaded'
                    }
                    <br />
                    {!!!Boolean(error) ? (<div className='font-size-14 py-3 text-black'>
                        {
                            !props?.DataFile &&
                            '  Maximum  file size 5 MB.'
                        }

                    </div>) : (
                        <div className='font-size-14 py-3 text-danger'>
                            Maximum file uploads size is 5 MB
                        </div>
                    )}

                </button>

                <input disabled={props?.DataFile} type="file" name="file" onChange={props?.onChange} accept=".pdf,.docx,.jpg,.jpeg,.png" />
            </div >
            {
                props?.DataFile &&
                <span onClick={HandleInputRest} className={` text-dark  text-decoration-underline font-italic ${style.uploadText}`}>Erase Uploaded File</span>
            }

        </div>
    );
};

export default FileInput;
