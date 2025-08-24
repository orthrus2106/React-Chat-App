import { useTranslation } from 'react-i18next'
import useActiveChannel from '../../hooks/useActiveChannel'
import { useGetMessagesQuery } from '../../store/api/apiSlice'
import useAdaptive from '../../hooks/useAdaptive'

const ChatHeader = ({ onBurgerClick }) => {
  const { isMobile } = useAdaptive()
  const { t } = useTranslation()
  const { data: messages = [] } = useGetMessagesQuery()
  const { activeChannel } = useActiveChannel()
  const messagesCount = messages?.filter(message => message.channelId === activeChannel?.id).length
  return (
    <div className="py-2 border-bottom d-flex justify-content-between align-items-center">
      <div>
        <h6 className="m-0 fw-bold">
          #
          {activeChannel?.name}
        </h6>
        <small className="text-muted">
          {messagesCount}
          {' '}
          {t('ui.messages')}
        </small>
      </div>
      {isMobile && (
        <button
          type="button"
          onClick={onBurgerClick}
          className="btn p-0 border-0 bg-transparent"
          aria-label="Открыть меню каналов"
        >
          <i className="bi bi-list fs-1 text-secondary" />
        </button>
      )}
    </div>
  )
}

export default ChatHeader
