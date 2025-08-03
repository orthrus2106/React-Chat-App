import { Formik, Form, Field } from 'formik';
import { useState } from 'react';

const LoginForm = () => {
    const [authFailed, setAuthFailed] = useState(false)
    const formik = useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      onSubmit: async (values) => {
        const { username, password } = values
        try {
          
        }
        catch(e) {
          console.log(e)
          setAuthFailed(true)
        }
      },
  });

    return (
        <Formik initialValues={formik.initialValues} onSubmit={formik.onSubmit}>
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