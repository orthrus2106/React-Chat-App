import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { useTranslation } from 'react-i18next'
import { selectIsAuthed } from '../../store/slices/authSlice'
import LogoutBtn from './UserComponent'
import useAdaptive from "../../hooks/useAdaptive"

const Nav = () => {
    const { t } = useTranslation()
    const isAuthed = useSelector(selectIsAuthed)
    const { isMobile } = useAdaptive()
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container">
            <Link to="/" className="navbar-brand">{t('ui.appName')}</Link>
            {isAuthed && <LogoutBtn />}
          </div>
        </nav>
    )
}

export default Nav