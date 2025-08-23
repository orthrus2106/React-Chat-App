import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import useActiveChannel from '../../hooks/useActiveChannel'
import { openModal } from '../../store/slices/uiSlice'
import ChannelItem from './ChannelItem'
import useAdaptive from '../../hooks/useAdaptive'
import { Button } from 'react-bootstrap'

const ChannelBox = () => {
  const { t } = useTranslation()
  const { channels, activeChannel, onSelectChannel, isError } = useActiveChannel()
  const dispatch = useDispatch()
  const { isMobile } = useAdaptive()
  
  const handleOpenAddModal = () => {
    dispatch(openModal({ modalType: 'add', channelId: null }))
  }
  const handleOpenRenameModal = (id) => {
    dispatch(openModal({ modalType: 'rename', channelId: id }))
  }
  const handleOpenRemoveModal = (id) => {
    dispatch(openModal({ modalType: 'remove', channelId: id }))
  }

  useEffect(() => {
    if (isError) {
      toast.error(t('errors.networkError'))
    }
  }, [t, isError])

  return isMobile ? (
    <div className="px-3 pt-3">
      <Button variant="btn" className="w-100 d-flex align-items-center gap-2" onClick={handleOpenAddModal}>
        <i className="bi bi-plus-lg" />
        {t('modals.addChannel')}
      </Button>
      <hr className="my-2" />
        <ul className='nav flex-column'>
          {channels.map((channel) => (
          <ChannelItem
              key={channel.id}
              channel={channel}
              isActive={channel.id === activeChannel?.id}
              onSelect={onSelectChannel}
              onRename={() => handleOpenRenameModal(channel.id)}
              onRemove={() => handleOpenRemoveModal(channel.id)}
            />
          ))}
        </ul>
    </div>
  ) : (
    <div className="col-4 col-md-2 border-end px-0 bg-white flex-column h-100 d-flex">
      <div className="d-flex align-items-center justify-content-between px-3 py-2 border-bottom">
        <span className="fw-semibold small text-uppercase text-muted">{t('ui.channels')}</span>
        <button
          type="button"
          className="btn btn-sm p-1 border-0 bg-transparent text-secondary"
          onClick={handleOpenAddModal}
          aria-label={t('ui.plus')}
        >
          <i className="bi bi-plus-lg"></i>
        </button>
      </div>

      <ul className="nav flex-column px-2 py-2">
        {channels.map((channel) => (
          <ChannelItem
            key={channel.id}
            channel={channel}
            isActive={channel.id === activeChannel?.id}
            onSelect={onSelectChannel}
            onRename={() => handleOpenRenameModal(channel.id)}
            onRemove={() => handleOpenRemoveModal(channel.id)}
          />
        ))}
      </ul>
    </div>
  )
}


export default ChannelBox
