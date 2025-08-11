import { useDispatch, useSelector } from "react-redux"
import { openModal, closeModal } from "../../store/slices/uiSlice"
import AddChannelModal from "./AddChannelModal"

const ModalRoot = () => {
    const modal = useSelector((state) => state.ui.modal)
    const dispatch = useDispatch()
    const onHide = () => dispatch(closeModal())
 console.log('ModalRoot modal =', modal);
    if (modal.modalType === null) return null

    if (modal.modalType === 'add') {
        return <AddChannelModal onHide={onHide} />
    }
}

export default ModalRoot