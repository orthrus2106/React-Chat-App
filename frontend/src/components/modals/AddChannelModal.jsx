import { useFormik } from 'formik';
import { useAddChannelMutation } from '../../store/api/apiSlice';
import useActiveChannel from '../../hooks/useActiveChannel';
import * as yup from 'yup'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useRef } from 'react';

const AddChannelModal = ({ onHide }) => {
    const inputRef = useRef()
    const { channels } = useActiveChannel()
    const usedNames = channels.map((channel) => channel.name.trim().toLowerCase())
    const [addChannel, { isLoading }] = useAddChannelMutation()
    const schema = yup.object().shape({
        name: yup
            .string()
            .trim()
            .min(3, 'Минимум 3 символа')
            .max(20, 'Максимум 20 символов')
            .notOneOf(usedNames, 'Канал уже существует')
            .required('Обязательное поле')
    });

    const formik = useFormik({
        initialValues: {
            name: '',
        },
        // validateOnBlur: false,
        validationSchema: schema,
        onSubmit: async (value, { resetForm, setSubmitting }) => {
            try {
                await addChannel(value.name).unwrap()
                resetForm()
                onHide()
            }
            catch(e) {
                console.log(e)
            }
            finally {
                setSubmitting(false)
            }
        }
    })
    
    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <Modal show onHide={onHide}>
            <Form onSubmit={formik.handleSubmit}>
            <Modal.Header closeButton>
                <Modal.Title>Добавить канал</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form.Group className="mb-3">
                <Form.Label htmlFor='name'>Введите название канала</Form.Label>
                <Form.Control
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    disabled={formik.isSubmitting || isLoading}
                    placeholder="например, general"
                    isInvalid={!!formik.errors.name}
                    isValid={!formik.errors.name && formik.touched.name}
                    ref={inputRef}
                />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.name}
                    </Form.Control.Feedback>
                </Form.Group>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onHide} disabled={formik.isSubmitting || isLoading}>
                Закрыть
                </Button>
                <Button type="submit" variant="primary" disabled={formik.isSubmitting || isLoading || !!formik.errors.name}>
                Отправить
                </Button>
            </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default AddChannelModal