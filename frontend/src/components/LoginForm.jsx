import { Formik, Form, Field } from 'formik';

const LoginForm = () => {
    const initialValues = {
        username: '',
        password: '',
    }
    const handleSubmit = (values) => {
        console.log(values)
    }
    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
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
                    </div>
                    <button type="submit" className='w-100 mb-3 btn btn-outline-primary'>Войти</button>
                </Form>
            )}
        </Formik>
    )
}

export default LoginForm