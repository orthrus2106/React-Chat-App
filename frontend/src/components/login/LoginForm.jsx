import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { logIn } from '../../store/slices/authSlice';
import routes from '../../api/routes';

const LoginForm = () => {
  const { t } = useTranslation();
  const [authFailed, setAuthFailed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isFrom = location.state?.from?.pathname || '/';
  const dispatch = useDispatch();

  const initialValues = {
    username: '',
    password: '',
  };

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const res = await axios.post(routes.loginPath(), { username, password });
      dispatch(logIn({ token: res.data.token, username: res.data.username }));
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('username', res.data.username);
      setAuthFailed(false);
      navigate(isFrom);
    } catch (e) {
      console.log(e);
      setAuthFailed(true);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {() => (
        <Form className="col-12 col-md-6 mt-3 mt-md-0">
          <h1 className="text-center mb-4">{t('buttons.login')}</h1>
          <div className="form-floating mb-3">
            <Field
              type="username"
              name="username"
              className="form-control"
              placeholder={t('auth.username')}
              onFocus={() => setAuthFailed(false)}
            />
            <label htmlFor="username">{t('auth.username')}</label>
          </div>
          <div className="form-floating mb-4">
            <Field
              type="password"
              name="password"
              className="form-control"
              placeholder={t('auth.password')}
              onFocus={() => setAuthFailed(false)}
            />
            <label htmlFor="password">{t('auth.password')}</label>
            <div className={`invalid-feedback ${authFailed ? 'd-block' : ''}`}>{t('errors.invalidCredentials')}</div>
          </div>
          <button type="submit" className="w-100 mb-3 btn btn-outline-primary">{t('buttons.login')}</button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
