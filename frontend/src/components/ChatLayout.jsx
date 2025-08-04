const ChatLayout = ({ children }) => {
    return (
        <div className="col p-0 h-100">
            <div className="d-flex flex-column h-100">
            {children}
            </div>
        </div>
    )
}

export default ChatLayout