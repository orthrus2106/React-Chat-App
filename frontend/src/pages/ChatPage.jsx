import ChatLayout from '../components/chat/ChatLayout'
import ChatForm from '../components/chat/ChatForm'
import MessagesBox from '../components/chat/MessagesBox'
import ChatHeader from '../components/chat/ChatHeader'
import ChannelBox from '../components/chat/ChannelsBox'
import Layout from '../components/page/Layout'
import useAdaptive from '../hooks/useAdaptive'
import { Offcanvas } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { selectCanvasOpened, setCanvas } from '../store/slices/uiSlice'
import { useDispatch, useSelector } from 'react-redux'

const ChatPage = () => {
  const { t } = useTranslation()
  const isCanvasOpened = useSelector(selectCanvasOpened)
  const dispatch = useDispatch()
  const handleClose = () => dispatch(setCanvas(false))
  const handleShow = () => dispatch(setCanvas(true))
  const { isMobile } = useAdaptive()
  return (
  <Layout>
      <div className="container-lg h-100 my-0 my-lg-4 rounded rounded-lg overflow-hidden">
        <div className="row h-100 bg-white flex-md-row">
          {isMobile && (
            <Offcanvas show={isCanvasOpened} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>{t('ui.channels')}</Offcanvas.Title>
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

            <div>
              <ChatForm />
            </div>
          </ChatLayout>
        </div>
      </div>
    </Layout>
)
}

export default ChatPage
