import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import leoProfanity from 'leo-profanity';
import useActiveChannel from '../../hooks/useActiveChannel';
import { useAddChannelMutation } from '../../store/api/apiSlice';

const AddChannelModal = ({ onHide }) => {
  const { t } = useTranslation();
  const inputRef = useRef();
  const { channels } = useActiveChannel();
  const usedNames = channels.map((channel) => channel.name.trim().toLowerCase());
  const [addChannel, { isLoading }] = useAddChannelMutation();
  const schema = yup.object().shape({
    name: yup
      .string()
      .trim()
      .min(3, t('errors.usernameLength'))
      .max(20, t('errors.usernameLength'))
      .notOneOf(usedNames, t('errors.channelExists'))
      .required(t('errors.required')),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    // validateOnBlur: false,
    validationSchema: schema,
    onSubmit: async (value, { resetForm, setSubmitting }) => {
      try {
        await addChannel(leoProfanity.clean(value.name)).unwrap();
        resetForm();
        toast.success(t('notifications.channelCreated'));
        onHide();
      } catch (e) {
        console.log(e);
      } finally {
        setSubmitting(false);
      }
    },
  });

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Modal show onHide={onHide}>
      <Form onSubmit={formik.handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>{t('modals.addChannel')}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="name">{t('modals.enterChannelName')}</Form.Label>
            <Form.Control
              id="name"
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
          <Button type="submit" variant="primary" disabled={formik.isSubmitting || isLoading || !!formik.errors.name}>
            {t('buttons.send')}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddChannelModal;
