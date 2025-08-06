import Message from "./Message"

const MessagesBox = ({ messages, activeChannel }) => {
    const filteredMessages = messages?.filter((message) => message.channelId === activeChannel?.id)
    console.log(filteredMessages)
    return (
        <div className="chat-messages overflow-auto px-5" id="messages-box">
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