import { h } from 'preact'
import { useEffect, useState, useRef } from 'preact/compat'
import axios from 'axios'
import { useToasts } from 'react-toast-notifications'
import { Formik, Field } from 'formik'

import PrivacyDeclaration from './PrivacyDeclaration'
import PdfIcon from './PdfIcon'
import PhoneInput from './PhoneInput'
import validationSchema from './validationSchema'
import getQueryParams from '../../getQueryParams'

const Form = ({ campaignUuid, leadsEndpoint, prospectUrl, company, galleryImages }) => {
  const { addToast, removeAllToasts } = useToasts()
  const [isPrivacyDeclarationShow, setIsPrivacyDeclarationShow] = useState(false)

  const filteredGalleryImages = galleryImages.filter(obj => obj.large !== null)

  const allowedQueryParams = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_term',
    'utm_content'
  ]

  const query = Object.fromEntries(getQueryParams())

  const metaFields = Object.fromEntries(
    Object.entries(query).filter(([key]) => allowedQueryParams.includes(key))
  )

  const initialValues = {
    ...metaFields,
    campaignUuid,
    fullName: '',
    email: '',
    phoneNumber: '',
    message: '',
    terms: false,
    contactByPhone: false,
    contactByMail: false,
    contactBySMS: false,
    contactDuringTheDay: false,
    contactDuringTheEvening: false,
    contactOtherTime: false,
    contactTime: ''
  }

  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false)

  const handleSubmit = async (values, { resetForm }) => {
    window.fbq('track', 'Lead')
    window.ga('send', 'Lead')

    removeAllToasts()

    try {
      setSubmitButtonDisabled(true)

      await axios.post(leadsEndpoint, values, {
        headers: { 'content-type': 'application/json' }
      })

      addToast('Takk for din interesse! Vi vil holde deg oppdatert fremover.', {
        appearance: 'success',
        autoDismiss: true
      })

      resetForm()
      setSubmitButtonDisabled(false)
    } catch (err) {
      addToast('Something went wrong with form submission. Please try again later.', {
        appearance: 'error'
      })
      setSubmitButtonDisabled(false)
    }
  }

  const handleShowPrivacyDeclaration = e => {
    e.preventDefault()
    setIsPrivacyDeclarationShow(true)
  }

  function validateImg (img) {
    return typeof(img) !== 'undefined'
  }

  return (
    <div className={`form-wrap`} id="form">
      <PrivacyDeclaration
        isShown={isPrivacyDeclarationShow}
        setIsShown={setIsPrivacyDeclarationShow}
        company={company}
      />

      <h1 className="title form-wrap__title">Er du interessert i Yippi Høiseth?</h1>
      <h2 className="form-wrap__title-sub">
        Registrer deg som interessent og vi holder deg oppdatert.
      </h2>

      <div className="container">
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {({ handleSubmit, touched, errors }) => (
            <form
              className="form"
              method="post"
              id="main"
              action={leadsEndpoint}
              onSubmit={handleSubmit}
            >
              <Field
                className={[
                  'form__input',
                  touched.fullName && errors.fullName && 'isInvalid'
                ].join(' ')}
                type="text"
                name="fullName"
                placeholder="Navn"
                id="name"
              />
              <Field
                className={[
                  'form__input',
                  touched.email && errors.email && 'isInvalid'
                ].join(' ')}
                type="email"
                id="email"
                name="email"
                placeholder="E-post"
              />
              <Field
                className={[
                  'form__input',
                  touched.phoneNumber && errors.phoneNumber && 'isInvalid'
                ].join(' ')}
                id="phone"
                name="phoneNumber"
                placeholder="Telefonnummer"
                type="tel"
              />

              <div className="checkbox-wrap">
                <Field id="field_terms" type="checkbox" name="terms" className='required custom-checkbox' />
                <label
                  className={[
                    'checkbox-wrap__text',
                    touched.terms && errors.terms && 'isInvalid'
                  ].join(' ')}
                  htmlFor="field_terms"
                >
                  Jeg aksepterer
                  <a
                  className="form__link"
                  onClick={handleShowPrivacyDeclaration}
                >
                    EiendomsMegler 1 sin samtykkeerklæring
                </a>
                </label>
              </div>

              <button
                className="form__button"
                type="Submit"
                name="action"
                id="submitButton"
                disabled={ submitButtonDisabled }
              >
                Send
              </button>
            </form>
          )}
        </Formik>

        {prospectUrl && (
          <div className="pdf">
            <h2 className="pdf__title">Prospekt</h2>
            <div className="pdf-img__wrap">
              <PdfIcon className="pdf-img__img" />
            </div>
            <a className="pdf__link" href={prospectUrl} target="blank">
              Last ned her
              <span className="pdf__circle">
                <i className="fa fa-download pdf__icon"></i>
              </span>
            </a>
          </div>
        )}
      </div>
      {filteredGalleryImages[6] !== null && (
        <div className="form__extra-img">
          <img className={ validateImg(filteredGalleryImages[6]) ? 'show' : 'hide' }  src={ validateImg(filteredGalleryImages[6]) ? filteredGalleryImages[6].large : '' } alt=""/>
        </div>
      )}

    </div>
  )
}

export default Form
