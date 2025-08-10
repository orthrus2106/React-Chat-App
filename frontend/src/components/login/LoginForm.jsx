import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import routes from '../../api/routes';
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import { logIn } from '../../store/slices/authSlice';
import { useDispatch } from 'react-redux'

const LoginForm = () => {
    const [authFailed, setAuthFailed] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const isFrom = location.state?.from?.pathname || '/'
    const dispatch = useDispatch()

    const initialValues = {
        username: "",
        password: "",
    }

    const onSubmit = async (values) => {
        const { username, password } = values
        try {
          const res = await axios.post(routes.loginPath(), { username, password })
          dispatch(logIn(res.data.token))
          localStorage.setItem('token', res.data.token)
          setAuthFailed(false)
          navigate(isFrom)
        }
        catch(e) {
          console.log(e)
          setAuthFailed(true)
        }
    }

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {() => (
                <Form className='col-12 col-md-6 mt-3 mt-md-0'>
                    <h1 className='text-center mb-4'>Войти</h1>
                    <div className='form-floating mb-3'>
                        <Field
                            type="username"
                            name="username"
                            className="form-control"
                            placeholder="Ваш ник"
                            />
                        <label htmlFor="username">Ваш ник</label>
                    </div>
                    <div className='form-floating mb-4'>
                        <Field
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Пароль"
                            />
                        <label htmlFor="password">Пароль</label>
                        <div className={`invalid-feedback ${authFailed ? 'd-block' : ''}`}>the username or password is incorrect</div>
                    </div>
                    <button type="submit" className='w-100 mb-3 btn btn-outline-primary'>Войти</button>
                </Form>
            )}
        </Formik>
    )
}

export default LoginForm