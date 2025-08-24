import { useDispatch, useSelector } from 'react-redux'
import { closeModal, setCanvas } from '../../store/slices/uiSlice'
import AddChannelModal from './AddChannelModal'
import RenameChannelModal from './RenameChannelModal'
import RemoveChannelModal from './RemoveChannelModal'

const ModalRoot = () => {
  const modal = useSelector(state => state.ui.modal)
  const dispatch = useDispatch()
  const onHide = () => {
    dispatch(closeModal())
    dispatch(setCanvas(false))
  }

  if (modal.modalType === null) return null

  if (modal.modalType === 'add') {
    return <AddChannelModal onHide={onHide} />
  }
  if (modal.modalType === 'rename') {
    return <RenameChannelModal onHide={onHide} />
  }
  if (modal.modalType === 'remove') {
    return <RemoveChannelModal onHide={onHide} />
  }
  return null
}

export default ModalRoot
