const ChatHeader = ({ activeChannel }) => {
    return (
                            <div className="bg-light mb-4 p-3 shadow-sm small">
                                <p className="m-0">
                                    <b># {activeChannel?.name}</b>
                                </p>
                                <span className="m-0">0 сообщений</span>
                            </div>
    )
}

export default ChatHeader