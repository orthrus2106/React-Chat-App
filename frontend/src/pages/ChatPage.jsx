import ChatLayout from '../components/chat/ChatLayout'
import ChatForm from '../components/chat/ChatForm'
import MessagesBox from '../components/chat/MessagesBox'
import ChatHeader from '../components/chat/ChatHeader'
import ChannelBox from '../components/chat/ChannelsBox'
import Layout from '../components/page/Layout'
import useAdaptive from '../hooks/useAdaptive'
import { useState } from 'react'
import { Offcanvas, Button } from 'react-bootstrap'

const ChatPage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { isMobile } = useAdaptive()
  return (
  <Layout>
      <div className="container-lg h-100 my-0 my-lg-4 rounded rounded-lg overflow-hidden">
        <div className="row h-100 bg-white flex-md-row">
          {isMobile && (
            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <ChannelBox />
              </Offcanvas.Body>
            </Offcanvas>
          )}
          {!isMobile && <ChannelBox />}
          <ChatLayout>
            <ChatHeader onBurgerClick={handleShow}/>

          <div className="flex-grow-1 overflow-auto px-0 px-md-5 mt-xl-2">
            <MessagesBox />
          </div>

            <div className="">
              <ChatForm />
            </div>
          </ChatLayout>
        </div>
      </div>
    </Layout>
)
}

export default ChatPage
