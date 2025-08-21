import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import socketInit from "./services/socketService.js"
import i18next from 'i18next'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import resources from './locales'
import store from './store/index.js'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

const init = async () => {
    const i18n = i18next.createInstance()

    await i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: 'ru',
    })
    
    socketInit(store)
    return (
        <Provider store={store}>
            <I18nextProvider i18n={i18n}>
                <App />
                <ToastContainer 
                position="bottom-right"
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
    )
}

export default init