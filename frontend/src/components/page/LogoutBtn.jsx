import { useDispatch } from "react-redux"
import { logOut } from "../../store/slices/authSlice"
import { useNavigate } from "react-router-dom"

const LogoutBtn = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogOut = () => {
        dispatch(logOut())
        navigate('/login')
    }
    return <button className="btn btn-primary" onClick={handleLogOut}>Выйти</button>
}

export default LogoutBtn