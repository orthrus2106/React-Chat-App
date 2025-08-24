import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import leoProfanity from 'leo-profanity'
import { Provider as RollbarProvider, ErrorBoundary } from '@rollbar/react'
import store from './store/index.js'
import socketInit from './services/socketService.js'
import App from './App.jsx'
import rollBarConfig from './rollbar.js'
import LanguageController from './components/page/LanguageController.jsx';
import { initI18n } from './i18n.js'
import i18n from './i18n.js';

const init = async () => {
  await initI18n()

  socketInit(store)

  leoProfanity.add(leoProfanity.getDictionary('ru'))
  leoProfanity.add(leoProfanity.getDictionary('en'))

  return (
    <RollbarProvider config={rollBarConfig}>
      <ErrorBoundary>
        <Provider store={store}>
          <I18nextProvider i18n={i18n}>
            <LanguageController />
            <App />
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable={false}
              pauseOnHover={false}
            />
          </I18nextProvider>
        </Provider>
      </ErrorBoundary>
    </RollbarProvider>
  )
}

export default init
