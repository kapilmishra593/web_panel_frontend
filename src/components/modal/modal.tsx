import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function DeleteModal(props: any) {
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h2 className='mb-0'>Delete Image</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className='mb-0'>Are you sure you want to delete the selected image?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Yes</Button>
                    <Button onClick={props.onRequestClose}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}