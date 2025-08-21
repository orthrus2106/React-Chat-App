import Message from "./Message"
import useActiveChannel from "../../hooks/useActiveChannel"
import { useGetMessagesQuery } from "../../store/api/apiSlice"

const MessagesBox = () => {
    const { activeChannel } = useActiveChannel()
    const { data: messages = []} = useGetMessagesQuery() 
    const filteredMessages = messages?.filter((message) => message.channelId === activeChannel?.id)
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