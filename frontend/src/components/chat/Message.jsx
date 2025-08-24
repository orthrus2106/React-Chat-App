import Avatar from "../utils/Avatar";

const Message = ({ author, body }) => {
  const currentUsername = localStorage.getItem('username')
  const isOwn = author === currentUsername

return (
    <div className={`d-flex ${isOwn ? 'justify-content-end' : 'justify-content-start'} mb-2`}>
        <div className="d-flex align-items-start gap-2">
      {!isOwn && <Avatar name={author} size={32} />}
      
      <div className={`p-2 rounded ${isOwn ? 'bg-primary text-white' : 'bg-light'}`}>
        {body}
        </div>

      {isOwn && <Avatar name={author} />}
      </div>
    </div>
  );
};

export default Message
