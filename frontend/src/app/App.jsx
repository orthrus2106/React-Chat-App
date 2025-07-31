import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "../pages/LoginPage"
import NotFoundPage from "../pages/NotFoundPage"
import ChatPage from '../pages/ChatPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} /> 
      </Routes>
    </Router>
  )
}

export default App
