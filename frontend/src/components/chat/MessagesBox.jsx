import Message from "./Message"
import useActiveChannel from "../../hooks/useActiveChannel"
import { useGetMessagesQuery } from "../../store/api/apiSlice"
import { toast } from "react-toastify"
import { useEffect } from "react"
import { useTranslation } from 'react-i18next';

const MessagesBox = () => {
    const { t } = useTranslation()
    const { activeChannel } = useActiveChannel()
    const { data: messages = [], isError} = useGetMessagesQuery() 
    const filteredMessages = messages?.filter((message) => message.channelId === activeChannel?.id)
    useEffect(() => {
        if (isError) {
            toast.error(t('errors.networkError'))
            return null
        }
    }, [isError, t])
    return (
        <div className="chat-messages overflow-auto px-2" id="messages-box">
            {filteredMessages?.map((message) => (
                <Message
                    key={message.id}
                    author={message.username}
                    body={message.body}
                    />
            ))}
        </div>
    )
}

export default MessagesBox