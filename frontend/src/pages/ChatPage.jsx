import ChatLayout from '../components/chat/ChatLayout'
import ChatForm from '../components/chat/ChatForm'
import MessagesBox from '../components/chat/MessagesBox'
import ChatHeader from '../components/chat/ChatHeader'
import ChannelBox from '../components/chat/ChannelsBox'
import Layout from '../components/page/Layout'

const ChatPage = () => (
  <Layout>
    <div className="container h-100 my-4 overflow-hidden rounded shadow">
      <div className="row h-100 bg-white flex-md-row">
        <ChannelBox />
        <ChatLayout>
          <ChatHeader />

          <div className="overflow-auto px-5 mb-3" style={{ flexGrow: 1 }}>
            <MessagesBox />
          </div>

          <div className="px-5 py-3">
            <ChatForm />
          </div>
        </ChatLayout>
      </div>
    </div>
  </Layout>
)

export default ChatPage
