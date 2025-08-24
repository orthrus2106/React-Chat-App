import { useSelector } from 'react-redux'
import { selectUsername } from '../../store/slices/authSlice'

const Avatar = ({ name, size = 36 }) => {
  const userName = useSelector(selectUsername)
  const currentName = name || userName
  const initials = currentName.slice(0, 1).toUpperCase() || 'U'

  return (
    <span className={`avatar avatar-${size} bg-secondary text-white rounded-circle fw-light align-self-center flex-shrink-0`}>
      {initials}
    </span>
  )
}

export default Avatar
