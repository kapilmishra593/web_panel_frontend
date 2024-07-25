import DeleteModal from '@components/components/modal/modal';
import Image from 'next/image';
import React, { useEffect, useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import styles from '../media/media.module.scss';

export default function Media() {

    const [Files, setFiles] = useState<(File & { preview: string })[]>([]);
    const [checkedFiles, setCheckedFiles] = useState<(File & { preview: string })[]>([]);
    const [modalShow, setModalShow] = useState(false);
    const [disabled, setDisabled] = useState(true);

    const handleDrop = async (acceptedFiles: any) => {       
        if (acceptedFiles?.length) {
            setFiles((previousFiles: any) => [
                ...previousFiles,
                ...acceptedFiles.map((file: any) =>
                    Object.assign(file, { preview: URL.createObjectURL(file) })
                )
            ])
        }
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: handleDrop,
        accept: {
            "image/*": [".jpeg", ".png", ".jpg"],
        },
    })

    const handleCheckFile = (file: any) => {             
        if (checkedFiles.includes(file)) {
            setDisabled(true)
            setCheckedFiles(checkedFiles.filter(checkedFile => checkedFile !== file));
        } else {
            setDisabled(false)
            setCheckedFiles([...checkedFiles, file]);
        }
    };

    const handleDeleteSelected = () => {
        setModalShow(true);        
    };

    const handleConfirmDelete = () => {
        const updatedFiles = Files.filter(file => !checkedFiles.includes(file));
        setFiles(updatedFiles);
        setModalShow(false);
        setDisabled(true);
    };

    const handleCancelDelete = () => {
        setModalShow(false);
    };

    return (
        <>
            <form>
                <div className={styles.media}>
                    <div className={styles.flexItem}>
                        <h2 className={`${styles.title} text-3xl font-semibold`}>Media Library</h2>
                        {disabled ? <button type='button' className={`${styles.crossIcon} ${checkedFiles.length === 0 ? 'disabled' : 'enable'} crossIcon`} onClick={handleDeleteSelected} disabled >Delete</button> : <button type='button' className={`${styles.crossIcon} ${checkedFiles.length === 0 ? 'disabled' : 'enable'} crossIcon`} onClick={handleDeleteSelected} >Delete</button>}
                    </div>
                    <div {...getRootProps()}
                        className={`${isDragActive ? '' : ''
                            } text-center text-xl`}
                        style={{
                            transition: 'background-color 500ms',
                        }}>
                        <div className={`${styles.dragBG} p-10 border-blue-900 border-dashed border-2`}>
                            <input {...getInputProps()} />
                            <p className='text-white-50 mb-0'>Drag n drop some files here, or click to select files</p>
                        </div>
                    </div>
                </div>

                <div className={styles.mediaScroll}>
                    <ul className={`${styles.gridList} pl-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-8 gap-6`}>
                        {Files.map((file: any, index: any) => (
                            <li key={index} className={`${styles.imageBG} ${checkedFiles.includes(file) ? 'selected' : ''} relative image-item`} onClick={() => handleCheckFile(file)}>
                                <div className={styles.imgFlex}>
                                    <Image
                                        src={file.preview}
                                        alt="Uploaded"
                                        width={0}
                                        height={0}
                                        style={{ width: '60px', height: '60px' }}
                                        onLoad={() => {
                                            (file.preview)
                                        }}
                                    />
                                    <p className='mt-3 font-medium'>
                                        {file.name}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <DeleteModal show={modalShow}
                    onHide={() => handleConfirmDelete()}
                    onRequestClose={() => handleCancelDelete()}
                />
            </form>
        </>
    )
}