import { useEffect, useRef } from "react"
import { useFormik } from "formik"
import * as yup from 'yup'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useRenameChannelMutation } from "../../store/api/apiSlice";
import useActiveChannel from "../../hooks/useActiveChannel";
import { useSelector } from "react-redux";
import { selectModal } from "../../store/slices/uiSlice";
import { useTranslation } from 'react-i18next';
import { toast } from "react-toastify"

const RenameChannelModal = ({ onHide }) => {
    const { t } = useTranslation()
    const inputRef = useRef()
    const { channels } = useActiveChannel()
    const modal = useSelector(selectModal)
    const channelId = modal.channelId
    const usedNames = channels.map((channel) => channel.name.trim().toLowerCase())
    const [renameChannel, { isLoading }] = useRenameChannelMutation()
    const schema = yup.object().shape({
        name: yup
            .string()
            .trim()
            .min(3, t('errors.minimumLength'))
            .max(20, t('errors.maximumLength'))
            .notOneOf(usedNames, t('errors.channelExists'))
            .required(t('errors.required'))
    });
    const formik = useFormik({
        initialValues: {
            name: ''
        },
        validationSchema: schema,
        onSubmit: async (value, { resetForm, setSubmitting }) => {
            try {
                await renameChannel({ id: channelId, name: value.name }).unwrap()
                resetForm()
                toast.success(t('notifications.channelRenamed'))
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
                    <Modal.Title>{t('modals.renameChannel')}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="name"></Form.Label>
                        <Form.Control 
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            disabled={formik.isSubmitting || isLoading}
                            placeholder={t('modals.sampleChannelName')}
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
                        {t('buttons.cancel')}
                        </Button>
                        <Button type="submit" variant="primary" disabled={formik.isSubmitting |isLoading || !!formik.errors.name}>
                        {t('buttons.send')}
                        </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default RenameChannelModal