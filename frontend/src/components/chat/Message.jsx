const Message = ({ author, body }) => (
  <div className="text-break mb-2">
    <b>{author}</b>
    :
    {' '}
    {body}
  </div>
);

// const Message = ({ author, body }) => {
//   const currentUsername = localStorage.getItem('username')
//   const isOwn = author === currentUsername

//   return (
//     <div className={`d-flex mb-2 ${isOwn ? 'justify-content-end' : 'justify-content-start'}`}>
//       <div className={`p-2 rounded ${isOwn ? 'bg-primary text-white' : 'bg-light'}`}>
//         <b>{author}</b>: {body}
//       </div>
//     </div>
//   )
// }

export default Message;
