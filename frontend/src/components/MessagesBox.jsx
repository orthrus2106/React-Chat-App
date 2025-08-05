import Message from "./Message"

const MessagesBox = () => {
    return (
                            <div className="chat-messages overflow-auto px-5" id="messages-box">
                                <Message />
                            </div>
    )
}

export default MessagesBox