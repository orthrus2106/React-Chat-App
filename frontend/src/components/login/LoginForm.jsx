import { Formik } from 'formik'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useEffect, useRef } from 'react'
import { Form, Button } from 'react-bootstrap'
import { logIn, selectIsAuthed } from '../../store/slices/authSlice'
import { selectAuthFailed, setAuthFailed } from '../../store/slices/uiSlice'
import routes from '../../api/routes'

const LoginForm = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const isFrom = location.state?.from?.pathname || '/'
  const dispatch = useDispatch()
  const isAuthed = useSelector(selectIsAuthed)
  const authFailed = useSelector(selectAuthFailed)
  const inputRef = useRef()

  const initialValues = {
    username: '',
    password: '',
  }

  const onSubmit = async (values, { setSubmitting }) => {
    const { username, password } = values
    try {
      const res = await axios.post(routes.loginPath(), { username, password })
      await dispatch(logIn({ token: res.data.token, username: res.data.username }))
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('username', res.data.username)
      dispatch(setAuthFailed(false))
    }
    catch (e) {
      if (e.response?.status === 401) {
        dispatch(setAuthFailed(true))
        inputRef.current?.focus()
      }
      else {
        console.log(e)
      }
    }
    finally {
      setSubmitting(false)
    }
  }

  useEffect(() => {
    if (isAuthed) {
      navigate(isFrom)
    }
  }, [isAuthed, navigate, isFrom])

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleChange, handleSubmit, isSubmitting, values }) => (
        <Form noValidate onSubmit={handleSubmit} className="col-12 col-md-6 mt-3 mt-md-0">
          <h1 className="text-center mb-4">{t('buttons.login')}</h1>

          <Form.Group controlId="username" className="form-floating mb-3">
            <Form.Control
              type="text"
              name="username"
              placeholder={t('auth.username')}
              value={values.username}
              onChange={(e) => {
                dispatch(setAuthFailed(false))
                handleChange(e)
              }}
              isInvalid={authFailed}
              required
              ref={inputRef}
            />
            <Form.Label>{t('auth.username')}</Form.Label>
          </Form.Group>

          <Form.Group controlId="password" className="form-floating mb-4">
            <Form.Control
              type="password"
              name="password"
              placeholder={t('auth.password')}
              value={values.password}
              onChange={(e) => {
                dispatch(setAuthFailed(false))
                handleChange(e)
              }}
              isInvalid={authFailed}
              required
            />
            <Form.Label>{t('auth.password')}</Form.Label>
            {authFailed && !isAuthed && !isSubmitting && (
              <Form.Control.Feedback type="invalid" tooltip>
                {t('errors.invalidCredentials')}
              </Form.Control.Feedback>
            )}
          </Form.Group>

          <Button
            className="w-100 mb-2"
            variant="primary"
            type="submit"
            disabled={isSubmitting}
          >
            {t('buttons.login')}
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm
