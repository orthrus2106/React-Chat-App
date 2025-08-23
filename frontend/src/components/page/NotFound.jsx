import { useTranslation } from 'react-i18next'
import notFoundImage from '../../assets/not-found-page.svg'

const NotFound = () => {
  const { t } = useTranslation()
  return (
    <div className="text-center">
      <img
        src={notFoundImage}
        alt={t('navigation.notFound')}
        className="img-fluid"
        style={{ maxWidth: '400px', height: 'auto' }}
      />
      <h1 className="h4 text-muted">{t('navigation.notFound')}</h1>
      <p className="text-muted">
        {t('navigation.redirect')}
        <a href="/">
          {' '}
          {t('navigation.mainPage')}
        </a>
      </p>
    </div>
  )
}

export default NotFound
