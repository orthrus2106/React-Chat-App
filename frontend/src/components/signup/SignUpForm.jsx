import { useFormik } from "formik";
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap'
import * as yup from 'yup'
import { useAddUserMutation } from "../../store/api/apiSlice";
import { useNavigate } from "react-router-dom";
import { logIn } from "../../store/slices/authSlice";
import { useDispatch } from "react-redux";

const SignUpForm = () => {
    const [addUser, { isLoading }] = useAddUserMutation()
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const schema = yup.object().shape({
        username: yup
            .string()
            .min(3, 'Минимум 3 символа')
            .max(20, 'Максимум 20 символов')
            .required('Обязательное поле'),
            
        password: yup
            .string()
            .trim()
            .min(6, 'Минимум 6 символов')
            .required('Обязательное поле'),
            
        confirmPassword: yup
            .string()
            .oneOf([yup.ref('password'), null], 'Пароли должны совпадать')
            .required('Обязательное поле'),
    });
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: schema,
        onSubmit: async (value) => {
            try {
                const res = await addUser({
                    username: value.username,
                    password: value.password,
                }).unwrap()
                console.log(res)
                dispatch(logIn(res.token))
                localStorage.setItem('token', res.token)
                navigate('/')
            }
            catch(e) {
                if (e?.status === 409) {
                    formik.setStatus('Пользователь уже существует')
                } else {
                    console.log(e)
                }
            }
        }
    })

    return (
        <Form onSubmit={formik.handleSubmit}>
            <h1 className="text-center mb-4">Регистрация</h1>

            <Form.Group className="mb-3" controlId="username">
                <Form.Label visuallyHidden>Имя пользователя</Form.Label>
                <Form.Control
                    type="text"
                    name="username"
                    placeholder="Имя пользователя"
                    size="md"
                    autoFocus
                    required
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                    isInvalid={formik.errors.username}
                    autoComplete="username"
                />
                <Form.Control.Feedback type="invalid">
                    {formik.errors.username}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label visuallyHidden>Пароль</Form.Label>
                <Form.Control
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    size="md"
                    required
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    isInvalid={formik.errors.password}
                    autoComplete="new-password"
                />
                <Form.Control.Feedback type="invalid">
                    {formik.errors.password}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-4" controlId="confirmPassword">
                <Form.Label visuallyHidden>Подтвердите пароль</Form.Label>
                <Form.Control
                    type="password"
                    name="confirmPassword"
                    placeholder="Подтвердите пароль"
                    size="md"
                    required
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                    isInvalid={formik.errors.confirmPassword}
                    autoComplete="new-password"
                />
                <Form.Control.Feedback type="invalid">
                    {formik.errors.confirmPassword}
                </Form.Control.Feedback>
            </Form.Group>

            {formik.status && (
                <div className="text-danger mb-3">{formik.status}</div>
            )}

            <Button type="submit" variant="primary" className="w-100" size="md" disabled={formik.isSubmitting || isLoading}>
                Зарегистрироваться
            </Button>
        </Form>
    )
}

export default SignUpForm