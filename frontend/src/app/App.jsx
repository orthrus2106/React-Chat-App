import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "../pages/LoginPage"
import SignUpPage from '../pages/SignUpPage';
import NotFoundPage from "../pages/NotFoundPage"
import ChatPage from '../pages/ChatPage';
import AuthRequired from '../components/page/AuthRequired';
import ModalRoot from '../components/modals/ModalRoot';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
        <AuthRequired>
          <ChatPage />
        </AuthRequired>
      } />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="*" element={<NotFoundPage />} /> 
      </Routes>
      <ModalRoot />
    </Router>
  )
}

export default App
