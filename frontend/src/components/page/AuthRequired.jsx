import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuthed } from '../../store/slices/authSlice';

const AuthRequired = ({ children }) => {
  const isAuthed = useSelector(selectIsAuthed);
  return isAuthed ? children : <Navigate to="login" />;
};

export default AuthRequired;
