import ChatLayout from "../components/ChatLayout";
import ChatForm from "../components/ChatForm";
import MessagesBox from "../components/MessagesBox";
import ChatHeader from "../components/ChatHeader";
import ChannelBox from "../components/ChannelsBox";
import Layout from "../components/Layout"

const ChatPage = () => {
    return (
        <Layout>
            <div className="container h-100 my-4 overflow-hidden rounded shadow">
            <div className="row h-100 bg-white flex-md-row">
                <ChannelBox/>
                <ChatLayout>
                <ChatHeader/>

                <div className="overflow-auto px-5 mb-3" style={{ flexGrow: 1 }}>
                    <MessagesBox/>
                </div>

                <div className="px-5 py-3">
                    <ChatForm/>
                </div>
                </ChatLayout>
            </div>
            </div>
        </Layout>
    )
}

export default ChatPage