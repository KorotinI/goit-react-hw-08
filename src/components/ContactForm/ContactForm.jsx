import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contacts/operations";

function ContactForm() {
  const inicialValues = {
    name: "",
    number: "",
  };

  const dispatch = useDispatch();

  const onAddContact = (formData) => {
    dispatch(addContact(formData));
  };

  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    onAddContact(values);
    toast.success("Contact added successfully!");

    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });
  return (
    <>
      <Formik
        initialValues={inicialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.form}>
          <label className={css.formTitle} htmlFor={nameId}>
            Name
          </label>
          <Field
            className={css.formInput}
            type="text"
            name="name"
            id={nameId}
          />
          <ErrorMessage
            className={css.errorMassage}
            name="name"
            component="span"
          />
          <label className={css.formTitle} htmlFor={numberId}>
            Number
          </label>
          <Field
            className={css.formInput}
            type="tel"
            name="number"
            id={numberId}
          />
          <ErrorMessage
            className={css.errorMassage}
            name="number"
            component="span"
          />
          <button className={css.formBtn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: { duration: 2000 },
        }}
      />
    </>
  );
}

export default ContactForm;