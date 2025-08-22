import { useFormik } from 'formik';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { logIn } from '../../store/slices/authSlice';
import { useAddUserMutation } from '../../store/api/apiSlice';

const SignUpForm = () => {
  const { t } = useTranslation();
  const [addUser, { isLoading }] = useAddUserMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    username: yup
      .string()
      .min(3, t('errors.usernameLength'))
      .max(20, t('errors.usernameLength'))
      .required(t('errors.required')),

    password: yup
      .string()
      .trim()
      .min(6, t('errors.minimumLength'))
      .required(t('errors.required')),

    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], t('errors.passwordMismatch'))
      .required(t('errors.required')),
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
        }).unwrap();
        dispatch(logIn({ token: res.token, username: res.username }));
        localStorage.setItem('token', res.token);
        localStorage.setItem('username', res.username);
        navigate('/');
      } catch (e) {
        if (e?.status === 409) {
          formik.setStatus(t('errors.userExists'));
        } else {
          console.log(e);
        }
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <h1 className="text-center mb-4">{t('buttons.register')}</h1>

      <Form.Group className="mb-3" controlId="username">
        <Form.Label visuallyHidden>{t('auth.username')}</Form.Label>
        <Form.Control
          type="text"
          name="username"
          placeholder={t('auth.username')}
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
        <Form.Label visuallyHidden>{t('auth.password')}</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder={t('auth.password')}
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
        <Form.Label visuallyHidden>{t('auth.confirmPassword')}</Form.Label>
        <Form.Control
          type="password"
          name="confirmPassword"
          placeholder={t('auth.confirmPassword')}
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
        {t('buttons.register')}
      </Button>
    </Form>
  );
};

export default SignUpForm;
