import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'
import { selectModal } from '../../store/slices/uiSlice'
import { useRemoveChannelMutation } from '../../store/api/apiSlice'

const RemoveChannelModal = ({ onHide }) => {
  const { t } = useTranslation()
  const modal = useSelector(selectModal)
  const { channelId } = modal
  const [removeChannel, { isLoading }] = useRemoveChannelMutation()

  const handleRemove = async () => {
    try {
      console.log('channel id:', channelId)
      await removeChannel(channelId).unwrap()
      toast.success(t('notifications.channelRemoved'))
      onHide()
    }
    catch (e) {
      console.log(e)
    }
  }

  return (
    <Modal show onHide={onHide} backdrop={isLoading ? 'static' : true}>
      <Modal.Header closeButton>
        <Modal.Title>{t('modals.removeChannel')}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <h2 className="h6">{t('modals.areYouSure')}</h2>
        <div className="d-flex justify-content-end">
          <Button
            className="me-2"
            variant="danger"
            type="button"
            onClick={handleRemove}
            disabled={isLoading}
          >
            {t('buttons.remove')}
          </Button>
          <Button
            variant="outline-secondary"
            type="button"
            onClick={onHide}
            disabled={isLoading}
          >
            {t('buttons.cancel')}
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default RemoveChannelModal
