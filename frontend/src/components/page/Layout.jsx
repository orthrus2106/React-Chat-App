import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { selectIsAuthed } from '../../store/slices/authSlice'
import LogoutBtn from './LogoutBtn'
import { Link } from 'react-router-dom'

const Layout = ({ children }) => {
  const { t } = useTranslation()
  const isAuthed = useSelector(selectIsAuthed)
  return (
    <div className="h-100">
      <div className="d-flex flex-column h-100">
        <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
          <div className="container">
            <Link to="/" className="navbar-brand">{t('ui.appName')}</Link>
            {isAuthed && <LogoutBtn />}
          </div>
        </nav>
        {children}
      </div>
    </div>
  )
}

export default Layout
