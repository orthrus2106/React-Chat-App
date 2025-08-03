import { Link } from "react-router-dom"
import Layout from "../components/Layout"

const ChatPage = () => {
    return (
        <Layout>
            <h1>Chat Page!</h1>
            <Link to="/login">Login</Link>
        </Layout>
    )
}

export default ChatPage