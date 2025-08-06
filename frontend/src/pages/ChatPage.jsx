import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { selectCurrentChannelId, setCurrentChannel } from "../store/slices/uiSlice";
import { useGetChannelsQuery, useGetMessagesQuery } from "../store/api/apiSlice";
import Spinner from 'react-bootstrap/Spinner';

import ChatLayout from "../components/ChatLayout";
import ChatForm from "../components/ChatForm";
import MessagesBox from "../components/MessagesBox";
import ChatHeader from "../components/ChatHeader";
import ChannelBox from "../components/ChannelsBox";
import Layout from "../components/Layout"

const ChatPage = () => {
    const dispatch = useDispatch()
    const { data: channels = [], isLoading } = useGetChannelsQuery()
    const { data: messages = []} = useGetMessagesQuery() 
    const currentChannelId = useSelector(selectCurrentChannelId)
    const activeChannel = channels.find((c) => c.id === currentChannelId);

    const onSelectChannel = (id) => {
        dispatch(setCurrentChannel(id))
    }

    useEffect(() => {
        if (channels.length > 0 && currentChannelId === null) {
            dispatch(setCurrentChannel(channels[0].id))
        }
    }, [channels, currentChannelId, dispatch])

    if (isLoading) return <Spinner animation="border" />

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
                    <MessagesBox 
                    messages={messages}
                    activeChannel={activeChannel}
                    />
                </div>

                <div className="px-5 py-3">
                    <ChatForm 
                    activeChannel={activeChannel}
                    />
                </div>
                </ChatLayout>
            </div>
            </div>
        </Layout>
    )
}

export default ChatPage