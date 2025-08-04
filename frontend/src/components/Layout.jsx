import { useSelector } from "react-redux"
import { selectIsAuthed } from "../store/slices/authSlice"
import LogoutBtn from "./LogoutBtn"

const Layout = ({ children }) => {
    const isAuthed = useSelector(selectIsAuthed)
    return (
        <div className="h-100">
            <div className="d-flex flex-column h-100">
                <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
                <div className="container">
                    <a href="/" className="navbar-brand">Hexlet Chat</a>
                    {isAuthed && <LogoutBtn />}
                </div>
                </nav>
                {children}
            </div>
            </div>
    )
}

export default Layout