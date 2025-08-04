import Layout from "../components/Layout"
import { useDispatch, useSelector } from "react-redux"
import { channelSelectors, setChannels, selectCurrentChannelId, setCurrentChannel } from "../store/slices/channelSlice";
import { selectToken } from "../store/slices/authSlice"
import axios from 'axios';
import { useEffect } from "react";
import routes from "../api/routes";
import ChatLayout from "../components/ChatLayout";
import ChatForm from "../components/ChatForm";
import MessagesBox from "../components/MessagesBox";
import ChatHeader from "../components/ChatHeader";
import ChannelBox from "../components/ChannelsBox";

const ChatPage = () => {
    const dispatch = useDispatch()
    const channels = useSelector(channelSelectors.selectAll);
    const currentChannelId = useSelector(selectCurrentChannelId)
    const token = useSelector(selectToken)
    const activeChannel = channels.find((c) => c.id === currentChannelId);

    const onSelectChannel = (id) => {
        dispatch(setCurrentChannel(id))
    }

    useEffect(() => {
        const requestChannels = async () => {
            try {
                const res = await axios.get(routes.channelsPath(), {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            dispatch(setChannels(res.data))
            console.log(res.data)
            }
            catch(e) {
                console.log(e)
            }
        }
        requestChannels()
    }, [token])
    return (
        <Layout>
            <div className="container h-100 my-4 overflow-hidden rounded shadow">
            <div className="row h-100 bg-white flex-md-row">
                <ChannelBox
                channels={channels}
                activeChannel={activeChannel}
                onSelectChannel={onSelectChannel}
                />
                <ChatLayout>
                <ChatHeader activeChannel={activeChannel} />

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
}

export default ChatPage