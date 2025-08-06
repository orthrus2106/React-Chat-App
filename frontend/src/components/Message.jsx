const Message = ({ author, body }) => {
    return <div className="text-break mb-2"><b>{author}</b>: {body}</div>
}

export default Message