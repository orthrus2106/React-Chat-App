import { Formik, Form, Field } from 'formik';
import { useAddMessageMutation } from "../store/api/apiSlice"
import useActiveChannel from '../hooks/useActiveChannel';

const ChatForm = () => {
    const { activeChannel } = useActiveChannel()
    const initialValues = { text: '' }
    const [addMessage] = useAddMessageMutation()
    const onSubmit = async (value, { resetForm }) => {
        try {
            await addMessage({
                body: value.text,
                channelId: activeChannel?.id,
                username: 'admin'
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
            <Form noValidate className="py-1 border rounded-2">
                <div className="input-group has-validation">
                    <Field name="text" aria-label="Новое сообщение" placeholder="Введите сообщение..." className="border-0 p-0 ps-2 form-control" />
                    <button type="submit" className="btn btn-group-vertical">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20" fill="currentColor" className="bi bi-arrow-right-square"><path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"></path></svg>
                        <span className="visually-hidden">Отправить</span>
                    </button>
                </div>
            </Form>
            )}
        </Formik>
    )
}

export default ChatForm