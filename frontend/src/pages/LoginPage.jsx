import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LoginForm from '../components/login/LoginForm'
import loginImage from '../assets/login-image.jpg'
import Layout from '../components/utils/Layout'

const LoginPage = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <div className="container-fluid h-100">
        <div className="row justify-content-center align-content-center h-100">
          <div className="col-12 col-md-8 col-xxl-6">
            <div className="card shadow-sm">
              <div className="card-body row p-2">
                <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                  <img
                    src={loginImage}
                    className="rounded-circle"
                    alt={t('buttons.login')}
                  />
                </div>
                <div className="col-12 col-md-6 mt-3 mt-md-0">
                  <LoginForm />
                </div>
              </div>
              <div className="card-footer p-4">
                <div className="text-center">
                  <span>
                    {t('ui.noAccount')}
                    {' '}
                  </span>
                  <Link to="/signup">{t('ui.uiRegister')}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default LoginPage
