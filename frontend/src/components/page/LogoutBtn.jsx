import { useDispatch } from "react-redux"
import { logOut } from "../../store/slices/authSlice"
import { useNavigate } from "react-router-dom"
import { useTranslation } from 'react-i18next';

const LogoutBtn = () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogOut = () => {
        dispatch(logOut())
        navigate('/login')
    }
    return <button className="btn btn-primary" onClick={handleLogOut}>{t('buttons.logout')}</button>
}

export default LogoutBtn