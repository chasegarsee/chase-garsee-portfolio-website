import Head from 'next/head'
import styles from '../styles/Contact.module.scss'
import { Formik } from 'formik'
import * as Yup from "yup";
const schema = Yup.object().shape({
  name: Yup.string()
  .min(1, "Password must be greater than 1 character")
  .required("Required"),
  email: Yup.string().email("Invalid email address.").required("Required"),
  message: Yup.string().required("Required"),
});

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <Head>
        <title>Contact</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>   
      <main className={styles.main}>
        <section className={styles.titleContainer}>
          <h1 className={styles.title}>Want to say hi?{" "}
            <a
              href="https://www.linked.com/in/chasegarsee/"
              className=""
              target="_blank"
            >Shoot me a DM</a>, or send a piece of electronic mail. I would love to hear from you!</h1>  
        </section>  
        <section>
        <div className={styles.formContainer}>
        <Formik
        enableReinitialize
        validateOnChange={true}
        validateOnBlur={true}
        validationSchema={schema}
        initialValues={{ name: "", email: "", message: '' }}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true);
          try {
          await fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
          })
          } catch(error) {
            console.log(error)
          } finally {
            setSubmitting(false)
          }
        }}
      >
        {({ 
          handleSubmit,
          handleChange,
          handleBlur,
          isSubmitting,
          values,
          errors,
          touched,
        }) => (
          <form onSubmit={handleSubmit} className={`${styles.form} dark:bg-white bg-gray-900 dark:text-gray-700 text-white`} >
          <fieldset className={styles.fieldset}>
            <h2 className={styles.title}>Message me ✨</h2>
            <formGroup className={styles.inputGroup}>
            <label className={`${styles.label} text-violet-500`} htmlFor="name">{touched.name && errors.name ? errors.name: ''}</label>
            <input
              placeholder="What's your name?"
              className={styles.input}
              id="name"
              name="name"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            </formGroup>
            <formGroup className={styles.inputGroup} >
            <label className={styles.label} htmlFor="email">{touched.email && errors.email ? errors.email: ''}</label>
              <input
                className={styles.input}
                placeholder="How can I reach you?"
                id="email"
                name="email"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </formGroup>
            < formGroup className={styles.inputGroup} >
            <label className={styles.label} htmlFor="message">{touched.message && errors.message ? errors.message: ''}</label>
              <textarea
                className={styles.input}
                placeholder="What's happening?"
                id="message"
                name="message"
                type="textarea"
                rows="3"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              />
            </formGroup>
            <button className={styles.button} type='submit'>{isSubmitting ? 'Sending...' : "Send"}</button>
          </fieldset>
          </form >
        )}
        </Formik>
          </div>
        </section>
      </main>  
    </div>
  )
}
