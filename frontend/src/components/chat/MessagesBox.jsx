import { toast } from 'react-toastify'
import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import Message from './Message'
import useActiveChannel from '../../hooks/useActiveChannel'
import { useGetMessagesQuery } from '../../store/api/apiSlice'

const MessagesBox = () => {
  const lastMessageRef = useRef(null)
  const { t } = useTranslation()
  const { activeChannel } = useActiveChannel()
  const { data: messages = [], isError } = useGetMessagesQuery()
  const filteredMessages = messages?.filter(message => message.channelId === activeChannel?.id)
  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [filteredMessages])
  useEffect(() => {
    if (isError) {
      toast.error(t('errors.networkError'))
    }
  }, [isError, t])
  return (
    <div className="chat-messages overflow-auto px-1 py-1" id="messages-box">
      {filteredMessages?.map(message => (
        <Message
          key={message.id}
          author={message.username}
          body={message.body}
        />
      ))}
      <div ref={lastMessageRef}/>
    </div>
  )
}

export default MessagesBox
