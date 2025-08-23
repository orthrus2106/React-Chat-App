import { Formik, Form, Field } from 'formik'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import leoProfanity from 'leo-profanity'
import { useAddMessageMutation } from '../../store/api/apiSlice'
import useActiveChannel from '../../hooks/useActiveChannel'
import { selectUsername } from '../../store/slices/authSlice'

const ChatForm = () => {
  const { t } = useTranslation()
  const { activeChannel } = useActiveChannel()
  const initialValues = { text: '' }
  const [addMessage] = useAddMessageMutation()
  const currentUserName = useSelector(selectUsername)
  const onSubmit = async (value, { resetForm }) => {
    try {
      await addMessage({
        body: leoProfanity.clean(value.text),
        channelId: activeChannel?.id,
        username: currentUserName,
      })
      resetForm()
    }
    catch (e) {
      console.log(e)
    }
  }
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
  {() => (
      <Form noValidate className="p-2 border rounded-3">
        <div className="input-group has-validation">
          <Field
            name="text"
            aria-label={t('chat.newMessage')}
            placeholder={t('chat.enterMessage')}
            className="form-control border-0 shadow-none"
            autoComplete="off"
          />
        <button
          type="submit"
          className="btn d-flex align-items-center justify-content-center rounded-circle ms-2"
        >
          <i className="d-flex align-self-center bi bi-send"></i>
          <span className="visually-hidden">{t('buttons.send')}</span>
        </button>
        </div>
      </Form>
    )}
  </Formik>

  )
}

export default ChatForm
