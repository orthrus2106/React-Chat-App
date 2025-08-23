import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import useActiveChannel from '../../hooks/useActiveChannel'
import { openModal } from '../../store/slices/uiSlice'
import ChannelItem from './ChannelItem'

const ChannelBox = () => {
  const { t } = useTranslation()
  const {
    channels, activeChannel, onSelectChannel, isError,
  } = useActiveChannel()
  const dispatch = useDispatch()

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

  return (
    <div className="col-4 col-md-2 border-end px-0 bg-light flex-column h-100 d-flex">
      <div className="d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4">
        <b>{t('ui.channels')}</b>
        <button type="button" className="p-0 text-primary btn btn-group-vertical" onClick={handleOpenAddModal}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20" fill="currentColor" className="bi bi-plus-square">
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
          </svg>
          <span className="visually-hidden">{t('ui.plus')}</span>
        </button>
      </div>
      <ul id="channels-box" className="nav flex-column nav-pills nav-fill px-2 mb-3 overflow-auto h-100 d-block">
        {channels && channels.map(channel => (
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
