import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { logOut } from '../../store/slices/authSlice'
import { Dropdown } from 'react-bootstrap'
import Avatar from './Avatar'

const LogoutBtn = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogOut = () => {
    dispatch(logOut())
    navigate('/login')
  }

  return (
    <Dropdown>
      <Dropdown.Toggle as='div'>
        <Avatar />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={handleLogOut}>{t('buttons.logout')}</Dropdown.Item>
        <Dropdown.Item>Another action</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default LogoutBtn
