import { useSelector } from "react-redux"
import { selectIsAuthed } from "../store/slices/authSlice"
import LogoutBtn from "./LogoutBtn"

const Layout = ({ children }) => {
    const isAuthed = useSelector(selectIsAuthed)
    return (
        <div className="min-vh-100 d-flex flex-column">
        <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
            <div className="container">
            <a href="/" className="navbar-brand">Hexlet Chat</a>
            {isAuthed && <LogoutBtn />}
            </div>
        </nav>
        <main className="flex-grow-1 d-flex justify-content-center align-items-center">
            {children}
        </main>
        </div>
    )
}

export default Layout