import { useState } from "react";
import { useRemoveChannelMutation } from "../../store/api/apiSlice"
import { selectModal } from "../../store/slices/uiSlice"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from "react-redux";

const RemoveChannelModal = ({ onHide }) => {
    const modal = useSelector(selectModal)
    const channelId = modal.channelId
    const [removeChannel, { isLoading }] = useRemoveChannelMutation()

    const handleRemove = async () => {
        try {
            console.log('channel id:', channelId)
            await removeChannel(channelId).unwrap()
            onHide()
        }
        catch(e) {
            console.log(e)
        }
    }

    return (
        <Modal show onHide={onHide} backdrop={isLoading ? "static" : true}>
            <Modal.Header closeButton>
                <Modal.Title>Удалить канал</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <h2 className="h6">Уверены?</h2>
           <div className="d-flex justify-content-end">
             <Button 
            className="me-2" variant="danger" type="button" onClick={handleRemove} disabled={isLoading}>Удалить
            </Button>
            <Button
            variant="outline-secondary" type="button" onClick={onHide} disabled={isLoading}>
            Закрыть
            </Button>
           </div>
            </Modal.Body>
        </Modal>
    )
}

export default RemoveChannelModal